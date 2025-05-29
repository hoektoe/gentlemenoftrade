import Image from 'next/image'
import Script from 'next/script'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqPlumber = [
  [
    {
      question: 'Why is my geyser not heating water properly?',
      answer:
        'Common causes include a faulty thermostat, damaged geyser element, or a malfunctioning geyser timer. Our certified plumbers can diagnose and repair these issues quickly to restore your hot water supply.',
    },
    {
      question: 'What causes unusually high water bills in Cape Town homes?',
      answer:
        'High water bills often indicate hidden burst pipes, faulty geyser valves, or continuously running toilets. We provide comprehensive leak detection services to identify and fix these costly water wastage issues.',
    },
    {
      question: 'Why do my taps and pipes make loud noises?',
      answer:
        'Thumping or whining sounds typically result from faulty geyser valves, worn tap washers, or improperly secured pipework. This is especially common in new developments and can be resolved with proper plumbing adjustments.',
    },
  ],
  [
    {
      question: 'What causes sewerage smells in my bathroom?',
      answer:
        'Bathroom odors usually stem from improper drainage venting, worn pipe seals, or partially blocked drains. Our drainage specialists can identify ventilation issues and clear blockages to eliminate unpleasant smells.',
    },
    {
      question: 'Where is my main water shut-off valve located?',
      answer:
        'Your main water shut-off is typically located near your water meter inside your property boundary. Geyser shut-off valves are installed directly at the geyser as per municipal regulations. We can help locate and service these essential valves.',
    },
    {
      question: 'Why do my drains keep blocking repeatedly?',
      answer:
        'Recurring blockages often indicate serious underlying issues like root ingress, collapsed pipes, improper installation, or incorrect drainage fall. Our drain specialists use CCTV inspections to diagnose and permanently resolve persistent drainage problems.',
    },
  ],
]

const faqGas = [
  [
    {
      question: 'What is LPG gas and how does it work?',
      answer:
        "LPG (Liquefied Petroleum Gas) is a clean-burning fuel mixture of propane, butane, and isobutane. It's commonly used for residential heating, cooking, and water heating applications, offering efficient and environmentally-friendly energy solutions.",
    },
    {
      question: 'What are the main uses for LPG gas in homes?',
      answer:
        'LPG is versatile for space heating, water heating, cooking, and commercial applications. It provides reliable, cost-effective energy for homes and businesses, especially useful during load-shedding or in areas with unreliable electricity supply.',
    },
    {
      question: 'Is LPG gas safe to use in residential properties?',
      answer:
        'LPG is extremely safe when properly installed and maintained. Safety depends on professional installation with compliance certificates, regular maintenance, and following safety guidelines. LPG cannot burn without air and flames cannot travel back into cylinders.',
    },
  ],
  [
    {
      question: 'When do I need a gas compliance certificate in South Africa?',
      answer:
        'SANS 10087-1 regulations require compliance certificates for any fixed gas appliance connected to cylinders, regardless of size. Certificates are also mandatory for property transfers involving LPG installations. We provide certified gas installations and compliance certificates.',
    },
    {
      question: 'Can I refill my gas cylinder myself safely?',
      answer:
        'Never attempt DIY gas cylinder refilling. Pressurized cylinders require specialized equipment and qualified technicians for safe refilling. Always use registered gas suppliers with proper safety equipment and training for cylinder refills.',
    },
    {
      question: 'How often should I service my gas appliances?',
      answer:
        'Annual servicing by qualified gas technicians ensures optimal performance and safety. Regular maintenance includes checking connections, testing for leaks, inspecting regulators, and verifying appliance efficiency. We provide comprehensive gas appliance servicing and repairs.',
    },
  ],
]

const faq = [
  {
    title: 'Frequently asked questions about Plumbing',
    content: faqPlumber,
  },

  {
    title: 'Frequently asked questions about Gas',
    content: faqGas,
  },
]

export function Faqs() {
  // Create the JSON-LD structured data for FAQs
  const generateFaqJsonLd = () => {
    // Flatten all FAQs from all categories
    const allFaqs = faq.flatMap((category) =>
      category.content.flatMap((section) =>
        section.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      ),
    )

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: allFaqs,
    }
  }

  const faqJsonLd = generateFaqJsonLd()

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email us at{' '}
            <a href="mailto:info@gentlemenoftrade.co.za">
              info@gentlemenoftrade.co.za
            </a>
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {faq.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mx-auto">
              <h3
                className="mb-8 font-display text-2xl tracking-tight text-slate-900"
                id={`faq-section-${categoryIndex}`}
              >
                {category.title}
              </h3>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.content.map((section, sectionIndex) =>
                  section.map((item, itemIndex) => (
                    <div
                      key={`${sectionIndex}-${itemIndex}`}
                      className="rounded-lg bg-white p-6 shadow-sm"
                    >
                      <h4 className="font-display text-lg text-slate-900">
                        {item.question}
                      </h4>
                      <p className="mt-4 text-sm text-slate-700">
                        {item.answer}
                      </p>
                    </div>
                  )),
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
