import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export function HomeCard({
  color,
  icon,
  title,
  href,
  className,
  textColor,
}: {
  color: string
  icon: string
  title: string
  href: string
  className?: string
  textColor?: string
}) {
  return (
    <Card
      className={cn(
        className,
        "flex justify-center p-0 overflow-hidden hover:-translate-y-[2px] hover:-translate-x-[-2px] transition-transform duration-200",
      )}
    >
      <div className="p-[2px] pr-1 pb-1 h-full w-full">
        <div
          className={`flex flex-col gap-8 items-center justify-center w-full h-full ${color} p-4 cursor-pointer rounded-[0.5rem]`}
          onClick={() => window.open(href, "_blank")}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 flex flex-col justify-center items-center">
            <Image src={icon} alt={title} className="cursor-pointer " />
          </div>
          <Link href={href} target="_blank">
            <span className={cn(textColor, "pt-8")}>{title}</span>
          </Link>
        </div>
      </div>
    </Card>
  )
}
