import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  DocumentTextIcon,
  LockClosedIcon,
  UsersIcon,
  BuildingOfficeIcon,
  HomeIcon,
  ScaleIcon,
  KeyIcon,
} from '@heroicons/react/24/outline'

export function Services() {
  return (
    <section
      id="servicios"
      aria-label="Servicios ofrecidos por el despacho"
      className="relative pt-4"
    >
      <Container>
        {/* Two Card Layout */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Left Card - Legal Services */}
            <div className="relative flex h-full min-h-[300px] flex-col items-center justify-center rounded-2xl bg-mallorca-600 px-6 py-6 text-white shadow-xl lg:px-10">
              <div className="relative z-10 max-w-lg text-center">
                {/* Gavel Icon */}
                <div className="mb-4 flex justify-center sm:mb-5">
                  {/* <ScaleIcon className="h-10 w-10 text-white sm:h-12 sm:w-12" /> */}
                  <Image
                    src="/column.png"
                    alt="Key"
                    width={45}
                    height={45}
                    className="rounded-full bg-white"
                  />
                </div>

                {/* Title */}
                <h1 className="mb-2 text-lg font-bold uppercase tracking-wide sm:text-xl lg:text-2xl">
                  LAZÁRO Y GARRIDO ABOGADOS
                </h1>

                <p className="mb-5 text-xs leading-relaxed text-white sm:mb-6 sm:text-sm lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>

                {/* CTA Button */}
                <Link
                  href="/#servicios"
                  className="mb-5 inline-block rounded-xl bg-white px-4 py-2 text-xs font-semibold text-navy-800 transition-colors duration-200 hover:bg-mallorca-200 hover:text-white sm:mb-6 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  Servicios Legales
                </Link>
              </div>
            </div>

            {/* Right Card - Real Estate Services */}
            <div className="relative flex h-full min-h-[300px] flex-col items-center justify-center rounded-2xl border border-mallorca-600 bg-white px-6 py-6 text-mallorca-600 shadow-xl lg:px-10">
              <div className="relative z-10 max-w-lg text-center">
                {/* House with Key Icon */}
                <div className=" flex justify-center rounded-full sm:mb-2">
                  <Image
                    src="/lg-logo.png"
                    alt="Key"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  {/* <KeyIcon className="h-10 w-10 text-mallorca-600 sm:h-12 sm:w-12" /> */}
                </div>

                {/* Title */}
                <h1 className="mb-2 text-lg font-bold uppercase tracking-wide sm:text-xl lg:text-2xl">
                  L&G INMOBILIARIA
                </h1>

                {/* Description */}
                <p className="mb-5 text-xs leading-relaxed text-mallorca-600 sm:mb-6 sm:text-sm lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>

                {/* CTA Button */}
                <a
                  href="https://www.lginmobiliaria.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-5 inline-block rounded-xl bg-mallorca-600 px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-mallorca-700 sm:mb-6 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  Servicios Inmobiliarios
                </a>

                {/* Bottom Links */}
                {/* <div className="flex flex-wrap justify-center gap-4 text-xs sm:gap-6">
                  <a
                    href="https://www.lginmobiliaria.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    Comprar
                  </a>
                  <a
                    href="https://www.lginmobiliaria.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-navy-600"
                  >
                    Vender
                  </a>
                  <a
                    href="https://www.lginmobiliaria.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-navy-600"
                  >
                    Alquilar
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
