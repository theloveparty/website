import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface HomeCardProps {
  color: string
  icon: string
  title: string
  href: string
}

export function HomeCard({ color, icon, title, href }: HomeCardProps) {
  return (
    <Card className="flex justify-center w-[16rem] h-[22rem] p-0 overflow-hidden hover:-translate-y-[2px] hover:-translate-x-[-2px] transition-transform duration-200">
      <div className="p-[2px] pr-1 pb-1 h-full w-full">
        <div
          className={`flex justify-center w-full h-full ${color} p-4 cursor-pointer rounded-[0.5rem]`}
          onClick={() => window.open(href, "_blank")}
        >
          <button className="flex flex-col justify-center items-center gap-8">
            <Image src={icon} alt={title} width={100} height={100} className="cursor-pointer" />
            <Link href={href} target="_blank">
              <span>{title}</span>
            </Link>
          </button>
        </div>
      </div>
    </Card>
  )
}
