"use client";

import Link from "next/link";
import HoverImg from "@/components/hover-gallery";
import Footer from '@/components/footer';
import { ShineButton } from '@/components/lightswind/shine-button';
import FadeContent from '@/components/FadeContent';

export default function Home() {
    return (
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className=" min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #ff8ecb 0%, #ffb6ea 100%)' }}>
            <FadeContent blur={true} duration={1000} delay={50} easing="ease-out" initialOpacity={0}>
            <div className="pt-10">
                <h1 className="text-pink-400 text-center py-5 text-4xl">Love u na kubb ❤️❤️</h1>
                <p className="text-red-500 text-center mb-5 text-sm">⚠️ This page only support on PC view and Tablet view!
                    <br /> because I'm too lazy to make it responsive😂
                </p>
            </div>
            </FadeContent>
            <FadeContent blur={true} duration={1000} delay={500} easing="ease-out" initialOpacity={0}>
            <div className="flex justify-center mb-5">
                <Link href="/">
                    <ShineButton
                        label="Back To Home"
                        size="sm"
                        bgColor="linear-gradient(-325deg, hsl(295 100% 56%) 0%, hsl(322 100% 69%) 55%, hsl(321 100% 56%) 90%)"
                    />
                    
                </Link>
                <Link href="https://github.com/Jittiphatz/keswarin" target="_blank" rel="noopener noreferrer">
                <ShineButton
                    className="ml-5"
                        label="Source Code"
                        size="sm"
                        bgColor="linear-gradient(325deg, hsl(200 100% 10%) 0%, hsl(100 100% 50%) 55%, hsl(400 100% 56%) 90%)"
                    />
                </Link>
                </div>
                </FadeContent>
                <FadeContent blur={true} duration={1000} delay={1200} easing="ease-out" initialOpacity={0}>
            <div className="overflow-hidden">
                <HoverImg />
            </div>
            </FadeContent>
            <Footer />
        </div>
        </FadeContent>
    );
}
