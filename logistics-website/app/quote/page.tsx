'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function QuotePage() {
  const [qrCode, setQrCode] = useState<string | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setQrCode(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">获取报价</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>联系我们</CardTitle>
            <CardDescription>填写以下信息，我们将尽快与您联系</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">姓名</Label>
                  <Input id="name" placeholder="请输入您的姓名" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">电子邮箱</Label>
                  <Input id="email" placeholder="your.email@example.com" type="email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="phone">电话</Label>
                  <Input id="phone" placeholder="请输入您的联系电话" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="message">留言</Label>
                  <Textarea id="message" placeholder="请简要描述您的需求" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">提交</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>扫码联系</CardTitle>
            <CardDescription>上传您的二维码或使用我们的联系方式</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            {qrCode ? (
              <Image src={qrCode} alt="Uploaded QR Code" width={200} height={200} />
            ) : (
              <div className="w-[200px] h-[200px] bg-gray-200 flex items-center justify-center text-gray-500">
                二维码预览
              </div>
            )}
            <Input 
              type="file" 
              accept="image/*" 
              onChange={handleFileUpload} 
              className="mt-4"
            />
            <div className="mt-6 text-center">
              <p className="font-semibold">粤航通国际物流</p>
              <p>电话：+86 123 4567 8900</p>
              <p>邮箱：contact@yuehangtonginternational.com</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

