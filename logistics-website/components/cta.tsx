import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">准备发货了吗？</h2>
        <p className="text-xl mb-8">联系我们的专家，获取定制物流解决方案。</p>
        <Button variant="secondary" size="lg">联系我们</Button>
      </div>
    </div>
  )
}

