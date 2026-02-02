import Image from 'next/image'
import { Container } from '@/components/Container'
import axios from 'axios'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Modal } from './Modal'

interface FormData {
  'full-name': string
  email: string
  phone: string
  message: string
  mathAnswer: string
  website?: string // Honeypot field
}

// Validation patterns
const NAME_PATTERN = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]{2,100}$/
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PHONE_PATTERN = /^[0-9\s+()-]{6,20}$/

// Detect gibberish/random strings
function isGibberish(text: string): boolean {
  if (!text || text.length < 3) return false
  
  const cleaned = text.toLowerCase().replace(/[^a-záéíóúñü]/g, '')
  if (cleaned.length < 3) return false
  
  const vowels = cleaned.match(/[aeiouáéíóúü]/g)?.length || 0
  
  const vowelRatio = vowels / cleaned.length
  if (vowelRatio < 0.15 && cleaned.length > 5) return true
  
  const consecutiveConsonants = cleaned.match(/[^aeiouáéíóúü]{5,}/g)
  if (consecutiveConsonants && consecutiveConsonants.length > 0) return true
  
  const uppercasePattern = text.match(/[A-Z]/g)?.length || 0
  const lowercasePattern = text.match(/[a-z]/g)?.length || 0
  if (uppercasePattern > 3 && lowercasePattern > 3 && uppercasePattern / (uppercasePattern + lowercasePattern) > 0.3) {
    return true
  }
  
  return false
}

// Generate a simple math challenge
function generateMathChallenge(): { question: string; answer: number } {
  const num1 = Math.floor(Math.random() * 10) + 1
  const num2 = Math.floor(Math.random() * 10) + 1
  return {
    question: `¿Cuánto es ${num1} + ${num2}?`,
    answer: num1 + num2,
  }
}

// Minimum time in milliseconds user should spend on form (5 seconds)
const MIN_FORM_TIME_MS = 5000

export function RealStateContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<FormData>()

  const [open, setOpen] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formLoadTime = useRef<number>(Date.now())
  
  // Initialize with placeholder, will be set on client only to avoid hydration mismatch
  const [mathChallenge, setMathChallenge] = useState({ question: '¿Cuánto es ? + ?', answer: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Only generate math challenge on client side to avoid hydration mismatch
    setIsMounted(true)
    formLoadTime.current = Date.now()
    setMathChallenge(generateMathChallenge())
  }, [])

  const onSubmit = useCallback(async (data: FormData) => {
    setSubmitError(null)
    setIsSubmitting(true)
    
    try {
      // Honeypot check
      if (data.website) {
        setOpen(true)
        reset()
        setMathChallenge(generateMathChallenge())
        return
      }
      
      // Time-based check
      const timeSpent = Date.now() - formLoadTime.current
      if (timeSpent < MIN_FORM_TIME_MS) {
        setSubmitError('Por favor, tómese su tiempo para completar el formulario.')
        return
      }
      
      // Math challenge verification
      const userAnswer = parseInt(data.mathAnswer, 10)
      if (isNaN(userAnswer) || userAnswer !== mathChallenge.answer) {
        setError('mathAnswer', {
          type: 'manual',
          message: 'La respuesta no es correcta.',
        })
        setMathChallenge(generateMathChallenge())
        return
      }
      
      // Gibberish detection
      if (isGibberish(data['full-name'])) {
        setError('full-name', { 
          type: 'manual', 
          message: 'Por favor, introduzca un nombre válido' 
        })
        return
      }
      
      if (isGibberish(data.message)) {
        setError('message', { 
          type: 'manual', 
          message: 'El mensaje parece contener texto no válido' 
        })
        return
      }

      const transformedData = {
        'full-name': data['full-name'].trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone.trim(),
        message: data.message.trim(),
      }
      
      await axios.post('https://eo9jhkrdg16zk8w.m.pipedream.net', transformedData)
      setOpen(true)
      reset()
      setMathChallenge(generateMathChallenge())
      formLoadTime.current = Date.now()
    } catch (e) {
      console.error(e)
      setSubmitError('Error al enviar el formulario. Por favor, inténtelo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }, [mathChallenge.answer, reset, setError])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      className="bg-mallorca-600"
    >
      <Container>
        <div className="relative rounded-2xl  bg-white shadow-lg">
          <div className="relative h-40 overflow-hidden rounded-b-none md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
            <Image
              alt="Foto de una pareja sujetando las llaves de su nueva casa"
              src="https://images.pexels.com/photos/8293700/pexels-photo-8293700.jpeg"
              fill
              className="rounded-t-2xl object-cover object-center md:rounded-l-2xl md:rounded-r-none"
            />
          </div>
          <div className="relative py-1 sm:py-2 lg:px-4 lg:py-2">
            <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-8 lg:w-1/2 lg:pr-8 lg:pl-16 xl:pl-20">
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <div className="bg-white py-1 px-4 md:px-6 lg:px-8">
                    <div className="mx-auto max-w-md py-8">
                      <p className="text-xl font-semibold tracking-tight text-navy-900 sm:text-2xl">
                        Tu próximo hogar comienza aquí
                      </p>
                      <p className="mt-2 text-xs text-navy-600 sm:text-sm">
                        ¿Quieres ser el primero en recibir nuevas propiedades?
                        ¿Necesitas asesoramiento inmobiliario? Te ayudamos a
                        encontrar el hogar de tus sueños.
                      </p>
                      <div className="mt-2">
                        {/* Honeypot field - hidden from humans */}
                        <div className="absolute left-[-9999px]" aria-hidden="true">
                          <label htmlFor="website">Website</label>
                          <input
                            {...register('website')}
                            type="text"
                            name="website"
                            id="website"
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </div>
                        
                        {submitError && (
                          <div className="mb-2 rounded-md bg-red-50 p-2">
                            <p className="text-xs text-red-700">{submitError}</p>
                          </div>
                        )}
                        
                        <div className="space-y-2">
                          <div>
                            <label
                              htmlFor="full-name"
                              className="block text-xs font-medium text-navy-700 sm:text-sm"
                            >
                              Nombre completo
                              <span className="text-mallorca-500">*</span>
                            </label>
                            <input
                              {...register('full-name', { 
                                required: 'Este campo es obligatorio',
                                minLength: {
                                  value: 2,
                                  message: 'El nombre debe tener al menos 2 caracteres'
                                },
                                maxLength: {
                                  value: 100,
                                  message: 'El nombre no puede tener más de 100 caracteres'
                                },
                                pattern: {
                                  value: NAME_PATTERN,
                                  message: 'Por favor, introduzca un nombre válido'
                                }
                              })}
                              type="text"
                              name="full-name"
                              id="full-name"
                              placeholder="Nombre completo"
                              className="mt-1 w-full rounded-md border border-navy-300 px-3 py-2 text-sm focus:border-mallorca-500 focus:outline-none focus:ring-1 focus:ring-mallorca-500"
                            />
                            {errors['full-name'] && (
                              <span className="text-xs text-red-600">
                                {errors['full-name'].message || 'Este campo es obligatorio'}
                              </span>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-xs font-medium text-navy-700 sm:text-sm"
                            >
                              Email<span className="text-mallorca-500">*</span>
                            </label>
                            <input
                              {...register('email', { 
                                required: 'Este campo es obligatorio',
                                pattern: {
                                  value: EMAIL_PATTERN,
                                  message: 'Por favor, introduzca un email válido'
                                }
                              })}
                              type="email"
                              name="email"
                              id="email"
                              placeholder="email@email.com"
                              className="mt-1 w-full rounded-md border border-navy-300 px-3 py-2 text-sm focus:border-mallorca-500 focus:outline-none focus:ring-1 focus:ring-mallorca-500"
                            />
                            {errors.email && (
                              <span className="text-xs text-red-600">
                                {errors.email.message || 'Este campo es obligatorio'}
                              </span>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-xs font-medium text-navy-700 sm:text-sm"
                            >
                              Teléfono
                              <span className="text-mallorca-500">*</span>
                            </label>
                            <input
                              {...register('phone', { 
                                required: 'Este campo es obligatorio',
                                pattern: {
                                  value: PHONE_PATTERN,
                                  message: 'Por favor, introduzca un teléfono válido'
                                }
                              })}
                              type="tel"
                              name="phone"
                              id="phone"
                              placeholder="600 000 000"
                              className="mt-1 w-full rounded-md border border-navy-300 px-3 py-2 text-sm focus:border-mallorca-500 focus:outline-none focus:ring-1 focus:ring-mallorca-500"
                            />
                            {errors.phone && (
                              <span className="text-xs text-red-600">
                                {errors.phone.message || 'Este campo es obligatorio'}
                              </span>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="message"
                              className="block text-xs font-medium text-navy-700 sm:text-sm"
                            >
                              Mensaje
                              <span className="text-mallorca-500">*</span>
                            </label>
                            <textarea
                              {...register('message', { 
                                required: 'Este campo es obligatorio',
                                minLength: {
                                  value: 10,
                                  message: 'El mensaje debe tener al menos 10 caracteres'
                                },
                                maxLength: {
                                  value: 2000,
                                  message: 'El mensaje no puede tener más de 2000 caracteres'
                                }
                              })}
                              name="message"
                              id="message"
                              placeholder="Cuéntanos qué buscas..."
                              rows={3}
                              className="mt-1 w-full rounded-md border border-navy-300 px-3 py-2 text-sm focus:border-mallorca-500 focus:outline-none focus:ring-1 focus:ring-mallorca-500"
                            />
                            {errors.message && (
                              <span className="text-xs text-red-600">
                                {errors.message.message || 'Este campo es obligatorio'}
                              </span>
                            )}
                          </div>
                          
                          {/* Math challenge - anti-spam */}
                          {isMounted && (
                            <div>
                              <label
                                htmlFor="mathAnswer"
                                className="block text-xs font-medium text-navy-700 sm:text-sm"
                              >
                                {mathChallenge.question}
                                <span className="text-mallorca-500">*</span>
                                <span className="ml-1 text-[10px] text-navy-400">(anti-spam)</span>
                              </label>
                              <input
                                {...register('mathAnswer', {
                                  required: 'Responda la pregunta de verificación',
                                })}
                                type="number"
                                name="mathAnswer"
                                id="mathAnswer"
                                placeholder="Resultado"
                                className="mt-1 w-full rounded-md border border-navy-300 px-3 py-2 text-sm focus:border-mallorca-500 focus:outline-none focus:ring-1 focus:ring-mallorca-500"
                                autoComplete="off"
                              />
                              {errors.mathAnswer && (
                                <span className="text-xs text-red-600">
                                  {errors.mathAnswer.message}
                                </span>
                              )}
                            </div>
                          )}
                          
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-lg bg-mallorca-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-mallorca-700 focus:outline-none focus:ring-2 focus:ring-mallorca-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal open={open} setOpen={setOpen} />
      </Container>
    </form>
  )
}
