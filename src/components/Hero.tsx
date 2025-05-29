import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoE1 from '@/images/certificates/e1.png'
import logoE2 from '@/images/certificates/e2.png'
import logoE3 from '@/images/certificates/e3.png'
import logoE4 from '@/images/certificates/e4.png'
import logoE5 from '@/images/certificates/e5.png'
import logoE6 from '@/images/certificates/e6.png'

export function Hero() {
  return (
    <Container className="pt-4 pb-16 text-center lg:pt-16">
      <h1 className="mx-auto max-w-4xl font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-5xl sm:text-7xl">
        Professional{' '}
        <span className="relative text-blue-600">Plumbing & Gas</span>
        <br />
        in Cape Town.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Cape Town&apos;s premier plumbing and gas contractors since 2017.
        Serving residential and commercial clients with same-day emergency
        service, upfront pricing, and guaranteed workmanship.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/contact-us">Get a quote</Button>
        <Button
          href="tel:+27644337043"
          variant="outline"
          aria-label="Call us at +27 64 433 7043"
        >
          <svg
            aria-hidden="true"
            className="size-3 flex-none fill-blue-600 group-active:fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="ml-3">+27 64 433 7043</span>
        </Button>
      </div>
      <div className="mt-16 sm:mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          Registered and licensed with all major authorities
        </p>
        <ul
          role="list"
          className="flex flex-col items-center justify-center gap-x-0 gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Institute of Plumbing South Africa', logo: logoE4 },
              { name: 'Construction Industry Development Board', logo: logoE2 },
              { name: 'LPG South Africa', logo: logoE3 },
              { name: 'City of Cape Town', logo: logoE6 },
              { name: 'Plumbing Industry Registration Board', logo: logoE5 },
              {
                name: 'South African Qualification and Certication Committee Gas',
                logo: logoE1,
              },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-row items-center gap-y-8 sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
