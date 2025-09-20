"use client";
import FadeContent from '@/components/FadeContent';
import { DotBackground } from "../components/lightswind/grid-dot-backgrounds"
import ImgDome from "@/components/images-dome";
import { ShineButton } from '../components/lightswind/shine-button';
import Link from "next/link";
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div>
      <DotBackground
        dotSize={2}
        dotColor="#d4d4d4"
        darkDotColor="#404040"
        spacing={20}
        showFade={true}
        fadeIntensity={20}
        className="h-screen"
      >
        <FadeContent blur={true} duration={1000} delay={50} easing="ease-out" initialOpacity={0}>
        <ImgDome />
        </FadeContent>
        <FadeContent blur={true} duration={1000} delay={200} easing="ease-out" initialOpacity={0}>
        <div className="text-center py-2  mt-5">
          <h1 className="text-2xl md:text-4xl font-bold text-pink-400">My Girl 👧❤️</h1>
        </div>
        </FadeContent>
        <FadeContent blur={true} duration={1000} delay={500} easing="ease-out" initialOpacity={0}>
        <div className="flex justify-center mt-2">
          <Link href="/keswarin" className="mt-2">
            <ShineButton
              label="Next"
              size="md"
              bgColor="linear-gradient(325deg, hsl(217 100% 56%) 0%, hsl(194 100% 69%) 55%, hsl(217 100% 56%) 90%)"
            />
          </Link>
        </div>
        </FadeContent>
      </DotBackground>
      <FadeContent blur={true} duration={1000} delay={50} easing="ease-out" initialOpacity={0}>
      <Footer />
      </FadeContent>
    </div>
  );
}
