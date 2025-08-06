"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.png" alt="about image" width={500} height={500} />
                <div className="mt-4 md:mt-0 flex flex-col justify-center text-left">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                    Minha jornada na tecnologia me proporcionou habilidades sólidas em programação, com experiência em desenvolvimento utilizando React, Java, Spring e Flutter, além de conhecimentos em automação de processos e segurança de sistemas de informação. Possuo inglês intermediário, com capacidade para ler, escrever e me comunicar com clareza. Estou sempre em busca de oportunidades para expandir meus conhecimentos técnicos e contribuir de forma significativa para o crescimento da organização em que trabalho.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;