import Link from 'next/link'

export function Address() {
  return (
    <>
      <h2 className="mt-20 text-3xl font-bold tracking-tight text-gray-900">
        Dirección
      </h2>
      <div className="mt-8 gap-1 sm:grid-cols-2 md:flex lg:grid  lg:grid-cols-2">
        <div>
          <Link
            href="https://goo.gl/maps/E3abA2DAn8Ny2h7D6"
            className="text-lg font-medium text-mallorca-600 hover:underline"
          >
            Carrer de la Reina Maria Cristina, 4, 2°-3ª,
            <span className="block">Palma, Illes Balears</span>
          </Link>
          <h3 className="text-lg font-medium text-gray-900"></h3>
        </div>
        <div className=" sm:contents lg:relative lg:block lg:flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15675.304856498467!2d2.651404477143287!3d39.56998197884075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfe1bb27cbd3a8cba!2sL%C3%A1zaro%20%26%20Garrido%20Abogados!5e0!3m2!1sen!2sie!4v1671098634436!5m2!1sen!2sie"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="aspect-[4/3] w-full "
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  )
}
