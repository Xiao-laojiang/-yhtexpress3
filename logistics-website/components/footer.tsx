export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">隐私政策</a>
            <a href="#" className="hover:text-blue-400">服务条款</a>
            <a href="#" className="hover:text-blue-400">联系我们</a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          © {new Date().getFullYear()} 粤航通国际。保留所有权利。
        </div>
      </div>
    </footer>
  )
}

