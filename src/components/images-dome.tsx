"use client";

import Image from "next/image";
import DomeGallery from "@/components/DomeGallery";

const images =
    [
        "/images/20240627_160958.jpg",
        "/images/20250108_165630.jpg",
        "/images/20250617_101036.jpg",
        "/images/20250716_143257.jpg",
        "/images/20250718_160749.jpg",
        "/images/20250729_180523.jpg",
        "/images/20250729_180525.jpg",
        "/images/IMG_20250531_154818_726.jpg",
        "/images/IMG_20250531_154826_957.jpg",
        "/images/IMG_20250617_192402_254.jpg",
        "/images/IMG_20250617_192405_153.jpg",
        "/images/IMG_20250617_192414_339.jpg",
        "/images/IMG_20250617_192417_238.jpg",
        "/images/IMG_20250624_171859_317.jpg",
        "/images/IMG_20250624_171900_896.jpg",
        "/images/IMG_20250718_220602_161.jpg",
        "/images/IMG_20250718_220606_212.jpg",
        "/images/IMG_20250718_221732_658.jpg",
        "/images/IMG20250912104050.jpg",
        "/images/IMG20250912104106.jpg",
        "/images/IMG20250912105657.jpg",
        "/images/IMG20250912105659.jpg",
        "/images/IMG20250912105707.jpg",
        "/images/IMG20250912105815.jpg",
        "/images/Messenger_creation_43543F65-85AF-432F-8B5D-D5FD1BDAE874.jpeg",
    ];

export default function ImgDome() {
    return (
        <div style={{ width: '100vw', height: '60vh'}}>
            <DomeGallery images={images} />
        </div>
    );
}
