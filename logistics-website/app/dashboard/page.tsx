import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">欢迎回来，用户</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard 
          title="个人信息" 
          description="查看和更新您的个人信息" 
          link="/dashboard/profile"
        />
        <DashboardCard 
          title="我的订单" 
          description="查看您的订单历史和状态" 
          link="/dashboard/orders"
        />
        <DashboardCard 
          title="物流跟踪" 
          description="实时跟踪您的货物位置" 
          link="/dashboard/tracking"
        />
        <DashboardCard 
          title="账单和支付" 
          description="管理您的账单和支付方式" 
          link="/dashboard/billing"
        />
        <DashboardCard 
          title="客户支持" 
          description="获取帮助和支持" 
          link="/dashboard/support"
        />
        <DashboardCard 
          title="设置" 
          description="管理您的账户设置" 
          link="/dashboard/settings"
        />
      </div>
    </div>
  )
}

function DashboardCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link}>
        <Button>查看详情</Button>
      </Link>
    </div>
  )
}

