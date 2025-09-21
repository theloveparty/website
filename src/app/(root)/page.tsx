"use client"
import Image from "next/image"
import logo from "@/assets/theloveparty-logo.svg"
import banner from "@/assets/theloveparty-banner.svg"
import twitch from "@/assets/twitch-black.svg"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { HomeCard } from "@/components/home-card"

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

        <HomeCard
          color="bg-purple-600/80"
          icon={twitch}
          title="@theloveparty"
          href="https://twitch.tv/theloveparty"
        />
      </div>
    </div>
  )
}
