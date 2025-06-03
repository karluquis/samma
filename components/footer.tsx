import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-8 w-full px-4 md:px-6 border-t border-[#F5E6D3]/20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/">
            <Image
              src="/logo_white.png"
              alt="SAMMA logo"
              width={100}
              height={33}
              className="h-8 w-auto mr-4"
            />
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <p className="text-sm opacity-80">© 2024 Samma</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
