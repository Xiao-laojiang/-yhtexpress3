import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-6">加入粤航通国际，开启全球物流之旅</h1>
          <p className="text-xl mb-6">注册成为我们的会员，享受以下优质服务：</p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>实时货物跟踪</li>
            <li>优先客户支持</li>
            <li>独家优惠折扣</li>
            <li>定制物流解决方案</li>
            <li>行业资讯和市场分析</li>
          </ul>
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="全球物流网络"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <Card className="w-full lg:w-1/2 max-w-md">
          <CardHeader>
            <CardTitle>注册账户</CardTitle>
            <CardDescription>填写以下信息，开始您的粤航通国际之旅</CardDescription>
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
                  <Label htmlFor="password">密码</Label>
                  <Input id="password" type="password" placeholder="请设置您的密码" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="company">公司名称（选填）</Label>
                  <Input id="company" placeholder="请输入您的公司名称" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">返回</Button>
            <Button>注册</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

