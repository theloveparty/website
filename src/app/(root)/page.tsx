"use client"
import Image from "next/image"
import banner from "@/assets/theloveparty-banner.svg"
import twitch from "@/assets/twitch-black.svg"
import insta from "@/assets/insta-colour.svg"
import youtube from "@/assets/youtube-red.svg"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { HomeCard } from "@/components/home-card"
import { Footer } from "@/components/footer"
import { YoutubeIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="flex flex-col items-center justify-center p-16">
          <div className="flex flex-col gap-16">
            <div className="flex flex-row gap-4 rounded-2xl justify-between w-full bg-foreground-muted border-2 overflow-clip">
              <div className="w-[75%]">
                <Image src={banner} alt="banner" />
              </div>
              <DarkModeToggle />
            </div>

            {/* home card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full auto-rows-[20rem]">
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
