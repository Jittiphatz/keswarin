"use client";

import ThreeDHoverGallery from './lightswind/3d-hover-gallery';

const images =
    [
        "/images/20250617_101036.jpg",
        "/images/20250716_143257.jpg",
        "/images/20250718_160749.jpg",
        "/images/20250729_180523.jpg",
        "/images/20250729_180525.jpg",
        "/images/IMG_20250531_154826_957.jpg",
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
    ];

export default function HoverImg() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '350px',
                width: '100%',
                margin: '0 auto',
            }}
        >
            <ThreeDHoverGallery
                itemWidth={1}
                itemHeight={10}
                gap={0.6}
                perspective={40}
                hoverScale={5}
                transitionDuration={1.5}
                backgroundColor="transparent"
                grayscaleStrength={1.2}
                brightnessLevel={0.6}
                activeWidth={20}
                enableKeyboardNavigation={true}
                autoPlay={true}
                autoPlayDelay={2000}
                images={images}
            />
        </div>
    );
}
