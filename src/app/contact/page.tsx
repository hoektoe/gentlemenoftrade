import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Border } from '@/components/Border'
import { Offices } from '@/components/Offices'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function ContactForm() {
  return (
    <div className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
        </div>
        <Button type="submit" className="mt-10">
          Send
        </Button>
      </form>
    </div>
  )
}

function ContactDetails() {
  return (
    <div>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our office
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Our offices are located in Cape Town and we provide plumbing and gas
        services to clients in the Western Cape.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Info', 'info@gentlemenoftrade.co.za'],
            ['Careers', 'careers@gentlemenoftrade.co.za'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      {/* <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border> */}
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Gentlemen of Trade for professional plumbing and gas services in Cape Town. Available 24/7 for emergency callouts.',
  openGraph: {
    title: 'Contact Gentlemen of Trade - Plumbing & Gas Services',
    description:
      'Get in touch with Gentlemen of Trade for professional plumbing, electrical, and gas services in Cape Town. Available 24/7 for emergency callouts.',
    images: [
      {
        url: 'https://gentlemenoftrade.co.za/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Gentlemen of Trade - Plumbing & Gas Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Gentlemen of Trade - Plumbing, Electrical & Gas Services',
    description:
      'Get in touch with Gentlemen of Trade for professional plumbing, electrical, and gas services in Cape Town. Available 24/7 for emergency callouts.',
  },
}

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        {/* <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>Your business deserves expert employment counsel. Let's connect.</p>
      </PageIntro> */}

        <Container className="my-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <ContactForm />
            <ContactDetails />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
