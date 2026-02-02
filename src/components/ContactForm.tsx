import Link from 'next/link'
import axios from 'axios'
import { people } from './Team'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/Button'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Modal } from './Modal'
import { Container } from './Container'

interface FormData {
  firstName: string
  lastName: string
  email: string
  message: string
  mathAnswer: string
  website?: string // Honeypot field
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

// Validation patterns
const NAME_PATTERN = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]{2,50}$/
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// Detect gibberish/random strings (high consonant ratio, unusual patterns)
function isGibberish(text: string): boolean {
  if (!text || text.length < 3) return false
  
  const cleaned = text.toLowerCase().replace(/[^a-záéíóúñü]/g, '')
  if (cleaned.length < 3) return false
  
  const vowels = cleaned.match(/[aeiouáéíóúü]/g)?.length || 0
  const consonants = cleaned.length - vowels
  
  // Normal text has roughly 40% vowels, gibberish often has <20%
  const vowelRatio = vowels / cleaned.length
  if (vowelRatio < 0.15 && cleaned.length > 5) return true
  
  // Check for repeating patterns or too many consecutive consonants
  const consecutiveConsonants = cleaned.match(/[^aeiouáéíóúü]{5,}/g)
  if (consecutiveConsonants && consecutiveConsonants.length > 0) return true
  
  // Check for random uppercase patterns in original text
  const uppercasePattern = text.match(/[A-Z]/g)?.length || 0
  const lowercasePattern = text.match(/[a-z]/g)?.length || 0
  if (uppercasePattern > 3 && lowercasePattern > 3 && uppercasePattern / (uppercasePattern + lowercasePattern) > 0.3) {
    return true
  }
  
  return false
}

// Minimum time in milliseconds user should spend on form (5 seconds)
const MIN_FORM_TIME_MS = 5000

export function ContactForm() {
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

  // Reset form load time and generate new math challenge when component mounts (client-side only)
  useEffect(() => {
    setIsMounted(true)
    formLoadTime.current = Date.now()
    setMathChallenge(generateMathChallenge())
  }, [])

  const onSubmit = useCallback(async (data: FormData) => {
    setSubmitError(null)
    setIsSubmitting(true)
    
    try {
      // Honeypot check - if filled, it's a bot
      if (data.website) {
        console.log('Bot detected via honeypot')
        // Silently reject but show success to confuse bots
        setOpen(true)
        reset()
        setMathChallenge(generateMathChallenge())
        return
      }
      
      // Time-based check - bots submit too fast
      const timeSpent = Date.now() - formLoadTime.current
      if (timeSpent < MIN_FORM_TIME_MS) {
        console.log('Bot detected via timing')
        setSubmitError('Por favor, tómese su tiempo para completar el formulario.')
        return
      }
      
      // Math challenge verification
      const userAnswer = parseInt(data.mathAnswer, 10)
      if (isNaN(userAnswer) || userAnswer !== mathChallenge.answer) {
        setError('mathAnswer', {
          type: 'manual',
          message: 'La respuesta no es correcta. Por favor, inténtelo de nuevo.',
        })
        setMathChallenge(generateMathChallenge()) // Generate new challenge
        return
      }
      
      // Gibberish detection
      if (isGibberish(data.firstName)) {
        setError('firstName', { 
          type: 'manual', 
          message: 'Por favor, introduzca un nombre válido' 
        })
        return
      }
      
      if (isGibberish(data.lastName)) {
        setError('lastName', { 
          type: 'manual', 
          message: 'Por favor, introduzca apellidos válidos' 
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

      // Transform camelCase to kebab-case to match email template
      const transformedData = {
        'first-name': data.firstName.trim(),
        'last-name': data.lastName.trim(),
        email: data.email.trim().toLowerCase(),
        message: data.message.trim(),
      }
      
      await axios.post('https://eo7vnosi4j5466v.m.pipedream.net', transformedData)
      setOpen(true)
      reset()
      setMathChallenge(generateMathChallenge()) // Generate new challenge for next submission
      formLoadTime.current = Date.now() // Reset timer for next submission
    } catch (e) {
      console.error(e)
      setSubmitError('Error al enviar el formulario. Por favor, inténtelo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }, [mathChallenge.answer, reset, setError])

  return (
    <Container>
      <h2 className="py-8 text-center text-3xl font-bold tracking-tight text-navy-900">
        Contacta directamente con nuestro equipo{' '}
      </h2>
      <ul
        role="list"
        className="mt-8 space-y-12 lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
      >
        {people.map((person) => (
          <li key={person.name}>
            <div className="mb-8 space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:gap-8">
              <div className="sm:col-span-2">
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>{person.name}</h3>
                    <p className="text-mallorca-600">{person.role}</p>
                  </div>
                </div>
                <div>
                  <dl className="mt-2 text-base text-navy-500">
                    <div className="mb-1 flex">
                      <Link
                        href={`mailto:${person.email}`}
                        className="flex items-center text-mallorca-600 hover:text-mallorca-100 hover:underline hover:underline-offset-2"
                        aria-label="correo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
                        <span className=" ml-3">{person.email}</span>
                      </Link>
                    </div>

                    {person.phone !== '' ? (
                      <>
                        <div className="mb-1 flex">
                          <Link
                            href={`tel:${person.phone}`}
                            className="flex text-mallorca-600 hover:text-mallorca-100 hover:underline hover:underline-offset-2"
                            aria-label="telefono"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <PhoneIcon
                              className="h-6 w-6 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span className="ml-3">{person.phone}</span>
                          </Link>
                        </div>
                        <div className="mb-1 flex">
                          <Link
                            href={`https://wa.me/${person.whatsapp}`}
                            className="flex flex-row-reverse text-mallorca-600 hover:text-mallorca-100 hover:underline hover:underline-offset-2"
                            aria-label="Whatsapp number"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ml-3">WhatsApp</span>
                            <svg
                              className="h-6 w-6 fill-current text-green-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                            </svg>
                          </Link>
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                  </dl>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-md mt-6 text-navy-500">
        Si no sabes con quien deberias contactar puedes escribirnos a{' '}
        <Link
          href="mailto:info@lazarogarrido.com"
          className="font-medium text-mallorca-600 hover:underline"
        >
          info@lazarogarrido.com
        </Link>
      </p>

      <h2 className=" mt-20 text-center text-3xl font-bold tracking-tight text-navy-900">
        Formulario de contacto{' '}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        className="mt-10 gap-y-8 gap-x-6 sm:grid-cols-2"
      >
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            {/* Honeypot field - hidden from humans, bots will fill it */}
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="website">
                Website (leave empty)
              </label>
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
              <div className="mb-4 rounded-md bg-red-50 p-4">
                <p className="text-sm text-red-700">{submitError}</p>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-navy-700"
                >
                  Nombre<span className="text-mallorca-500 ">*</span>
                </label>
                <input
                  {...register('firstName', { 
                    required: 'Este campo es obligatorio',
                    minLength: {
                      value: 2,
                      message: 'El nombre debe tener al menos 2 caracteres'
                    },
                    maxLength: {
                      value: 50,
                      message: 'El nombre no puede tener más de 50 caracteres'
                    },
                    pattern: {
                      value: NAME_PATTERN,
                      message: 'Por favor, introduzca un nombre válido (solo letras)'
                    }
                  })}
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="María"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-md border-navy-300 shadow-sm focus:border-mallorca-500 focus:ring-mallorca-500 sm:text-sm"
                />
                {errors.firstName && (
                  <span className="text-sm text-red-600">
                    {errors.firstName.message || 'Este campo es obligatorio'}
                  </span>
                )}
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-navy-700"
                >
                  Apellidos<span className="text-mallorca-500 ">*</span>
                </label>
                <input
                  {...register('lastName', { 
                    required: 'Este campo es obligatorio',
                    minLength: {
                      value: 2,
                      message: 'Los apellidos deben tener al menos 2 caracteres'
                    },
                    maxLength: {
                      value: 100,
                      message: 'Los apellidos no pueden tener más de 100 caracteres'
                    },
                    pattern: {
                      value: NAME_PATTERN,
                      message: 'Por favor, introduzca apellidos válidos (solo letras)'
                    }
                  })}
                  type="text"
                  placeholder="Pérez García"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  className="mt-1 block w-full rounded-md border-navy-300 shadow-sm focus:border-mallorca-500 focus:ring-mallorca-500 sm:text-sm"
                />
                {errors.lastName && (
                  <span className="text-sm text-red-600">
                    {errors.lastName.message || 'Este campo es obligatorio'}
                  </span>
                )}
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-navy-700"
                >
                  Dirección de correo electrónico
                  <span className="text-mallorca-500 ">*</span>
                </label>
                <input
                  {...register('email', { 
                    required: 'Este campo es obligatorio',
                    pattern: {
                      value: EMAIL_PATTERN,
                      message: 'Por favor, introduzca una dirección de correo válida'
                    },
                    maxLength: {
                      value: 254,
                      message: 'El correo no puede tener más de 254 caracteres'
                    }
                  })}
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="ejemplo@email.com"
                  className="mt-1 block w-full rounded-md border-navy-300 shadow-sm focus:border-mallorca-500 focus:ring-mallorca-500 sm:text-sm"
                />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    {errors.email.message || 'Este campo es obligatorio'}
                  </span>
                )}
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="message"
                  className=" text-sm font-medium text-navy-700"
                >
                  Mensaje<span className="text-mallorca-500 ">*</span>
                </label>
                <div className="mt-1">
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
                    id="message"
                    name="message"
                    rows={3}
                    className="mt-1 block w-full rounded-md border-navy-300 shadow-sm focus:border-mallorca-500 focus:ring-mallorca-500 sm:text-sm"
                    placeholder="Desearía saber más sobre..."
                    defaultValue={''}
                  />
                  {errors.message && (
                    <span className="text-sm text-red-600">
                      {errors.message.message || 'Este campo es obligatorio'}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Math challenge - anti-spam (only render on client to avoid hydration mismatch) */}
              {isMounted && (
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="mathAnswer"
                    className="block text-sm font-medium text-navy-700"
                  >
                    {mathChallenge.question}
                    <span className="text-mallorca-500 ">*</span>
                    <span className="ml-2 text-xs text-navy-400">(verificación anti-spam)</span>
                  </label>
                  <input
                    {...register('mathAnswer', {
                      required: 'Por favor, responda a la pregunta de verificación',
                    })}
                    type="number"
                    name="mathAnswer"
                    id="mathAnswer"
                    placeholder="Escriba el resultado"
                    className="mt-1 block w-full rounded-md border-navy-300 shadow-sm focus:border-mallorca-500 focus:ring-mallorca-500 sm:text-sm"
                    autoComplete="off"
                  />
                  {errors.mathAnswer && (
                    <span className="text-sm text-red-600">
                      {errors.mathAnswer.message || 'Por favor, responda a la pregunta'}
                    </span>
                  )}
                </div>
              )}
            </div>
            <Button
              className="mt-6 w-full md:w-24"
              color="mallorca"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </Button>
          </div>
          <Modal open={open} setOpen={setOpen} />
        </div>
      </form>
    </Container>
  )
}
