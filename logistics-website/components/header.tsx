'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const services = [
  { name: '快递服务', href: '/services/express-delivery' },
  { name: '空运服务', href: '/services/air-transportation' },
  { name: '海运服务', href: '/services/sea-transportation' },
  { name: '超大件国际运输', href: '/services/oversized-transportation' },
  { name: '海外仓服务', href: '/services/overseas-warehouse' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cf695c9451bffcc2cdc7e0ff2f9d5fd%20%E6%8B%B7%E8%B4%9D-LscyOUXPtL7uq4n3wpBzkAotxTx6wO.png"
                alt="YEHATON Logo"
                width={150}
                height={75}
                className="h-16 w-auto"
              />
              <span className="ml-4 text-lg font-semibold text-gray-800 hidden lg:inline">深圳市粤航通国际货运代理有限公司</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600">首页</Link>
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center">
                  服务
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link href={service.href} className="w-full">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">关于我们</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">联系我们</Link>
          </nav>
          <div className="md:hidden">
            {/* 这里可以添加移动端菜单按钮 */}
          </div>
        </div>
      </div>
    </header>
  )
}

