import { AnimatedNumber } from '@/components/AnimatedNumber'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/Gradient'
import { Header } from '@/components/Header'
import { Heading, Lead, Subheading } from '@/components/Text'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Team - Bloemendal Clinic',
  description:
    'Meet the multidisciplinary team of mental health professionals at Bloemendal Clinic, dedicated to guiding you towards lasting recovery and wellness.',
}

function HeroAbout() {
  return (
    <Container className="mt-16 pb-32">
      <Heading as="h1">Expert service delivered</Heading>
      <Lead className="mt-6 max-w-3xl">
        Our dedicated team of certified plumbers, electricians, and gas
        technicians is committed to providing reliable, professional service for
        all your home and business needs.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            We are a professional plumbing and electrical company covering all
            aspects of plumbing, electrical and gas. We are passionate about our
            work and our clients. Gentlemen of Trade is a company that always
            keeps updated with the latest trends and laws within the industry to
            ensure customer satisfaction. We have over 24 years of combined
            experience in our fields.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Gentlemen of Trade (G.O.T) is serious about being a leading provider
            of plumbing and electrical services in Cape Town, and as such has
            grown and structured the business to accommodate future growth
            within Western Cape. Despite G.O.T's continuing growth, the company
            remains focused on customer service and client care.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            G.O.T has strong relationships with some of Cape Town's best
            building contractors, and is always up to date with the latest
            trends and materials available. The company offers a complete
            service – from design to installation – and if required, management
            of the project to minimize the stress of sorting out other
            contractors.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt=""
                src="/bloemendal/untitled-261-min.jpg"
                width={292}
                height={292}
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <Image
                alt=""
                src="/bloemendal/untitled-258-min.jpg"
                width={292}
                height={292}
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt=""
                src="/bloemendal/untitled-131-min.jpg"
                width={292}
                height={292}
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <Image
                alt=""
                src="/bloemendal/untitled-256-min.jpg"
                width={292}
                height={292}
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Stats</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Years in business</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber
                  start={0}
                  end={new Date().getFullYear() - 2017}
                />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Years of experience</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={24} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Jobs completed</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={2500} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Satisfaction rate</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={95} />%
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

export default function Company() {
  return (
    <>
      <Header />
      <main>
        <HeroAbout />
      </main>
      <Footer />
    </>
  )
}
