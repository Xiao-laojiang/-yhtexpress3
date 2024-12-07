'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function ProfilePage() {
  const [name, setName] = useState('张三')
  const [email, setEmail] = useState('zhangsan@example.com')
  const [phone, setPhone] = useState('13800138000')
  const [company, setCompany] = useState('ABC贸易有限公司')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里应该添加实际的更新个人信息的逻辑
    console.log('更新个人信息:', { name, email, phone, company })
    // 显示成功消息或处理错误
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">个人信息</h1>
      <Card>
        <CardHeader>
          <CardTitle>编辑个人信息</CardTitle>
          <CardDescription>更新您的个人资料和联系方式</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">姓名</Label>
                <Input 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">电子邮箱</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">电话</Label>
                <Input 
                  id="phone" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="company">公司名称</Label>
                <Input 
                  id="company" 
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
            <Button className="mt-6" type="submit">保存更改</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

