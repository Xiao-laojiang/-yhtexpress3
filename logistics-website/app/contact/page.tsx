import { useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail } from 'lucide-react'

export default function ContactPage() {

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">联系我们</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>联系方式</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  <span>+86 13760220668</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-blue-600" />
                  <span>contact@yhtexpress.com</span>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 text-blue-600 mt-1" />
                  <span>
                    广东省深圳市宝安区福海街道永福路102号<br />
                    富桥工业一区A17栋101<br />
                    粤航通国际物流
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>扫码联系我们</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20241204170903-zyCXry4Otja3xnQzSt2F5gTGB0hWdY.png"
                alt="联系我们微信二维码" 
                width={200} 
                height={200}
                className="border border-gray-200 rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

