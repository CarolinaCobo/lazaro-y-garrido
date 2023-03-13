import Link from 'next/link'

import { Container } from '@/components/Container'

const pressData = [
  [
    {
      headLine:
        'Condena a un hotel de Mallorca tras un despido por colar a su perro en una habitación',
      description:
        'La trabajadora se alojó con el animal en una de las villas de lujo de la empresa, que prohíbe acceder con mascotas a sus clientes.',
      href: 'https://www.ultimahora.es/noticias/local/2022/12/10/1843939/hoteles-despido-por-meter-perro-habitacion.html',
    },
    {
      headLine:
        'Condenado un hotel tras un despedir a una trabajadora por colar a su perro en una habitación',
      description:
        'El tribunal ha estimado un recurso de la trabajadora, de manera que ha anulado el despido disciplinario.',
      href: 'https://www.diariodemallorca.es/sucesos/sucesos-mallorca/2022/12/10/condenado-hotel-despedir-trabajadora-colar-79803880.html?utm_source=whatsapp&utm_medium=social&utm_campaign=btn-share',
    },
  ],
  [
    {
      headLine:
        'Imputan a una mujer por liarse a palos con unos inquilinos y coaccionar a una familia con una empresa de desokupación',
      description:
        'Según denuncia el afectado, cuando la propietaria se enteró de que el hombre había vuelto a acceder a la vivienda, la mujer acudió al edificio en el que creía que vivía él, con la intención de agredirle, pero se equivocó de piso y pegó a dos personas que no tenían nada que ver.',
      href: 'https://www.eldiario.es/illes-balears/sociedad/imputan-mujer-liarse-palos-inquilinos-coaccionar-familia-empresa-desokupacion_1_9677988.html',
    },
    {
      headLine:
        'Tres detenidos por engañar a un empleado al que hicieron testaferro de una empresa con deudas',
      description:
        'La Policía Nacional detiene en Palma a tres personas acusadas de un presunto delito contra los derechos de los trabajadores, falsedad documental y contra la seguridad social.        ',
      href: 'https://www.mallorcadiario.com/detenidos-3-empresarios-por-enganar-a-un-trabajador-que-hicieron-testaferro-de-una-empresa-con-deudas',
    },
  ],
  [
    {
      headLine:
        'Investigan a unos desokupas por echar a un hombre de un apartamento en Palmanova',
      description:
        'La víctima pagó las arras a la dueña del piso y hacía tres años que vivía con sus dos hijas menores y su madre.',
      href: 'https://www.ultimahora.es/sucesos/ultimas/2022/11/06/1823525/investigan-desokupas-por-echar-hombre-apartamento-palmanova.html',
    },
    {
      headLine:
        'Diez detenidos en Palma por un fraude de 600.000 euros a la Seguridad Social        ',
      description:
        'El dueño de una empresa de alquiler de coches utilizaba a inmigrantes e indigentes como testaferros - Evitaba el pago de las cuotas de sus trabajadores, impuestos y deudas a proveedores.',
      href: 'https://www.diariodemallorca.es/sucesos/2019/09/20/diez-detenidos-palma-fraude-600-2842725.html',
    },
  ],
]

export function Press() {
  return (
    <section
      id="prensa"
      aria-labelledby="press-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="press-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Prensa
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {pressData.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((press, pressIndex) => (
                  <li key={pressIndex}>
                    <Link
                      href={press.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="font-display text-lg leading-7 text-mallorca-600 hover:text-mallorca-100 hover:underline hover:underline-offset-2">
                        {press.headLine}
                      </h3>
                      <p className="mt-4 text-sm text-slate-700">
                        {press.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
