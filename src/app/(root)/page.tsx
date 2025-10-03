"use client"
import Image from "next/image"
import banner from "@/assets/theloveparty-banner.svg"
import logo from "@/assets/theloveparty-logo.svg"
import twitch from "@/assets/twitch-black.svg"
import insta from "@/assets/insta-colour.svg"
import discord from "@/assets/discord-white.svg"
import youtube from "@/assets/youtube-red.svg"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { HomeCard } from "@/components/home-card"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="flex w-full flex-col items-center justify-center p-16">
          <div className="flex flex-col gap-16 w-full">
            <div className="flex  flex-row rounded-2xl justify-between w-full bg-foreground-muted border-2 overflow-clip h-[10rem] md:h-[16rem]">
              <div className="hidden sm:flex flex-1 flex-row items-start overflow-hidden">
                <Image src={banner} alt="banner" className="w-full h-full object-contain " />
              </div>
              <div className="flex sm:hidden flex-1 flex-row items-start overflow-hidden">
                <Image src={logo} alt="logo" className="w-full h-full object-contain " />
              </div>
              <DarkModeToggle />
            </div>

            {/* home card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full auto-rows-[12rem] md:auto-rows-[20rem]">
              <HomeCard
                color="bg-purple-600/80"
                icon={twitch}
                title="@theloveparty"
                href="https://twitch.tv/theloveparty"
              />
              <HomeCard
                color="bg-background"
                icon={insta}
                title="@theloveparty.au"
                href="https://www.instagram.com/theloveparty.au/"
              />
              <HomeCard
                color="bg-background"
                icon={youtube}
                title="@theloveparty-au"
                href="https://www.youtube.com/@theloveparty-au"
              />
              <HomeCard color="bg-[#5865F2]" icon={discord} title="@theloveparty" href="https://discord.gg/znYxQgJn" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
