"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.png" alt="about image" width={500} height={500} />
                <div className="mt-4 md:mt-0 flex flex-col justify-center text-left">
                    <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
                    <p className="text-base lg:text-lg">
                    Sou desenvolvedora apaixonada por tecnologia. Tenho experiência em projetos freelancers quanto em soluções corporativas, com foco em resultados práticos, inovação e qualidade. Comprometida com prazos e detalhes, busco sempre entregar trabalhos que superem as expectativas e gerem impacto positivo.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;