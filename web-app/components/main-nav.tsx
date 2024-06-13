import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-xl font-bold transition-colors hover:text-primary tracking-tighter"
      >
        Water Level Monitoring of Khopasi Hydropower
      </Link>
      
    </nav>
  )
}
