import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b border-[#F5E6D3]/20">
      <Link className="flex items-center justify-center" href="/">
        <Image
          src="/logo_white.png"
          alt="SAMMA logo"
          width={120}
          height={40}
          className="h-8 w-auto"
        />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm hover:text-[#F5E6D3]/80 transition-colors" href="/about">
          About Us
        </Link>
        <Link className="text-sm hover:text-[#F5E6D3]/80 transition-colors" href="/schedule">
          Schedule
        </Link>
        <Link className="text-sm hover:text-[#F5E6D3]/80 transition-colors" href="/menu">
          Menu
        </Link>
        <Link className="text-sm hover:text-[#F5E6D3]/80 transition-colors" href="/stations">
          Stations
        </Link>
      </nav>
    </header>
  )
}