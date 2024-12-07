import Image from 'next/image'

const testimonials = [
  {
    name: '张先生',
    company: '跨境电商卖家',
    content: '粤航通国际的服务让我们的跨境物流变得如此简单。他们的FBA头程专线服务帮助我们大大提高了运输效率，降低了成本。',
    image: '/placeholder.svg?height=100&width=100&text=张先生'
  },
  {
    name: '李女士',
    company: '进出口贸易公司',
    content: '作为一家进出口公司，我们需要可靠的物流合作伙伴。粤航通国际的专业团队和全球网络让我们的国际货运变得轻松自如。',
    image: '/placeholder.svg?height=100&width=100&text=李女士'
  },
  {
    name: '王先生',
    company: '大型制造企业',
    content: '粤航通国际的超大件运输服务解决了我们长期以来的难题。他们的专业水平和细致周到的服务给我们留下了深刻印象。',
    image: '/placeholder.svg?height=100&width=100&text=王先生'
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">客户评价</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

