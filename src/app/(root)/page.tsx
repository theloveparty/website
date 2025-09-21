"use client"
import Image from "next/image"
import logo from "@/assets/theloveparty-logo.svg"
import banner from "@/assets/theloveparty-banner.svg"
import twitch from "@/assets/twitch-black.svg"
import Link from "next/link"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-16">
      <div className="flex flex-col  gap-16">
        <div className="flex flex-row gap-4 rounded-2xl justify-between w-full bg-foreground-muted border-2 overflow-clip">
          <div className="w-[75%]">
            <Image src={banner} alt="banner" />
          </div>
          <DarkModeToggle />
        </div>

        {/* Twitch button with lucide icon */}
        <Card className="flex justify-center w-[18rem] h-[24rem] p-0">
          <div className="p-[2px] pr-1 pb-1 h-full w-full bg-clip-paddingoverflow-clip">
            <div
              className="flex justify-center w-full h-full bg-purple-600/80 p-4 cursor-pointer rounded-[0.5rem] "
              onClick={() => window.open("https://twitch.tv/theloveparty", "_blank")}
            >
              <button className="flex flex-col justify-center items-center gap-8">
                <Image src={twitch} alt="twitch" width={100} height={100} />
                <Link href="https://twitch.tv/theloveparty" target="_blank">
                  <span>@theloveparty</span>
                </Link>
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
