import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">粤航通国际物流解决方案</h1>
        <p className="text-xl mb-8">粤航通国际通过高效可靠的运输服务连接全球企业</p>
        <div className="space-x-4">
          <Link href="/quote">
            <Button variant="secondary" size="lg">获取报价</Button>
          </Link>
          <Link href="/register" className="inline-block">
            <Button variant="outline" size="lg">立即注册</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

