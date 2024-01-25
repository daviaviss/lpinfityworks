'use client'
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Cases = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Mostra um slide de cada vez em dispositivos pequenos
        slidesToScroll: 3,
        arrows: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // Quebra em dispositivos com largura menor que 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768, // Quebra em dispositivos com largura menor que 1024px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const icons = [
        '/ifood_icon.svg',
        '/vtex_icon.svg',
        '/inter_icon.svg',
        '/ifood_icon.svg',
        '/vtex_icon.svg',
        '/inter_icon.svg',
        '/ifood_icon.svg',
        '/vtex_icon.svg',
        '/inter_icon.svg'
    ];

    return (
        <div className="bg-primary">
            <div className="text-black container max-w-screen-lg mx-auto flex flex-col">
                <div className="text-center p-6 mt-16">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-medium">CASES DE</p>
                    <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary italic tracking-widest" style={{ WebkitTextStroke: '3px #000' }}>SUCESSO</p>
                </div>
                <Carousel {...settings} className="mb-20">
                    {icons.map((icon, index) => (
                        <div key={index} className="p-4 sm:p-6 md:p-8 flex items-center justify-center">
                            <Image
                                src={icon}
                                alt={`Ícone ${index + 1}`}
                                width={125}
                                height={125}
                                className="mx-auto"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Cases;