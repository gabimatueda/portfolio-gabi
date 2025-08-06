"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Sistema de Invite",
        description: "Projeto feito no NLW Connect da Rocketseat, foi desenvolvido um sistema de invite onde conta com uma logística de ranking, número de cliques por convite e cadastro.",
        image: "/images/projects/codecraft.png",
        tag: ["Projetos Acadêmicos"],
        gitUrl: "https://github.com/gabimatueda/nlw-connect-react",
        previewUrl: "https://nlw-connect-react-two.vercel.app/",
    },
    {
        id: 2,
        title: "Spotify Imersão Alura",
        description: "Recriação da interface do Spotify com HTML, CSS E JS e utilização do React",
        image: "/images/projects/spotify-alura.png",
        tag: ["Projetos Acadêmicos"],
        gitUrl: "https://github.com/gabimatueda/spotify-react",
        previewUrl: "https://spotify-react-kappa.vercel.app/",
    },
    {
        id: 3,
        title: "Meu Portfólio",
        description: "Criação do meu portfólio responsivo com React.Js + Vite + TailwindCSS.",
        image: "/images/projects/portfolio.png",
        tag: ["Projetos Acadêmicos"],
        gitUrl: "https://github.com/gabimatueda/portfolio-gabi",
        previewUrl: "https://gabimatueda.vercel.app/",
    },
    {
        id: 4,
        title: "Planner de Viagem",
        description: " Desenvolvido com React durante o evento NLW Journey da Rocketseat. O objetivo deste projeto é ajudar os usuários a planejarem suas viagens de forma organizada e eficiente.",
        image: "/images/projects/planner_viagem.jpg",
        tag: ["Projetos Acadêmicos"],
        gitUrl: "https://github.com/gabimatueda/planner-viagens",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Landing Page Confeitaria",
        description: "Uma confeitaria de cupcakes online, com uma ótima experiencia visual garantida.",
        image: "/images/projects/confeitaria.png",
        tag: ["Projetos Acadêmicos"],
        gitUrl: "https://github.com/gabimatueda/landingpage-confeitaria",
        previewUrl: "https://the-best-cupcake.vercel.app/",
    },
];

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0},
        animate: { y: 0, opacity: 1},
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Projects
            </h2>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project, index) => (
                <motion.li 
                key={index}
                  variants={cardVariants} 
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                <ProjectCard 
                key={project.id} 
                title={project.title}
                description={project.description} 
                imgUrl={project.image} 
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                tag={project.tag}
                />
                </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;