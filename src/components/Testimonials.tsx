import { Container } from '@/components/Container'
import Image from 'next/image'
import googleReviewLogo from '@/images/logos/google-review.png'

const testimonials = [
  [
    {
      content:
        'Very professional and quick service they are my number on plumber to go to.',
      author: {
        name: 'Jan Feyen',
        role: 'residential',
      },
    },
    {
      content:
        'What a great bunch of guys. My loo blocked and Ross came out quickly. It wasn’t an easy thing to fix, but he got it sorted with some effort, and was good company while doing so. Left the place really clean too. I recommend this growing company.',
      author: {
        name: 'Michelle Macnab',
        role: 'residential',
      },
    },
  ],
  [
    {
      content:
        'Friendly, help and professional. thank you Kim, the guys did a great job and clean too.',
      author: {
        name: 'Kamteni Monica',
        role: 'residential',
      },
    },
    {
      content:
        "Amazing service from theses guys. They did 2 lots of COC's for my properties, which was expertly carried out and cost was great. Once I moved they did electrical and plumbing work at my new property and all first class. Not only is their work excellent but each person has been a pleasure to deal with, being clean, prompt and courteous. Always my go to place.",
      author: {
        name: 'Marlene B',
        role: 'residential',
      },
    },
  ],
  [
    {
      content: `I would also like to take this opportunity to say how impressed we were with the team's professionalism and conduct.

Ross and his team are an asset to your company and did a great job, particularly cleaning up afterwards. They had good attention to detail and communicated well!

Well done, and again, thanks for the good service. I would highly recommend your services.`,
      author: {
        name: 'Mark Thomas',
        role: 'residential',
      },
    },
    {
      content:
        'Jason and his team are truly Gentlemen in their trade. They are trustworthy and highly skilled. I feel safe while they work in my space and I know that they give me the best quality products at a fair and competitive price.',
      author: {
        name: 'Hettie Wainwright',
        role: 'residential',
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by our customers
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Hear what our satisfied clients have to say about our reliable
            plumbing and gas services. We pride ourselves on quality
            workmanship, prompt service, and competitive pricing across all our
            trade services.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={googleReviewLogo}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
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
