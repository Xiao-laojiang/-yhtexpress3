import Link from 'next/link'

interface ServiceProps {
  title: string
  description: string
  icon: React.ElementType
  link: string
}

export function ServiceCard({ title, description, icon: Icon, link }: ServiceProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg">
      <div className="flex flex-col items-start">
        <Icon className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={link}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          了解更多
        </Link>
      </div>
    </div>
  )
}

