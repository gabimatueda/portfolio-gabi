"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Spotify Imersão Alura",
        description: "Recriação da interface do Spotify com HTML, CSS E JS e utilização do React",
        image: "/images/projects/spotify-alura.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/gabimatueda/spotify-react",
        previewUrl: "https://spotify-react-kappa.vercel.app/",
    },
    {
        id: 2,
        title: "Meu Portfólio",
        description: "Criação do meu portfólio responsivo com React.Js + Vite + TailwindCSS.",
        image: "/images/projects/portfolio.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Planner de Viagem",
        description: " Desenvolvido com React durante o evento NLW Journey da Rocketseat. O objetivo deste projeto é ajudar os usuários a planejarem suas viagens de forma organizada e eficiente.",
        image: "/images/projects/planner_viagem.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/gabimatueda/planner-viagens",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Landing Page Confeitaria",
        description: "Uma confeitaria de cupcakes online, com uma ótima experiencia visual garantida.",
        image: "/images/projects/confeitaria.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/gabimatueda/landingpage-confeitaria",
        previewUrl: "https://the-best-cupcake.vercel.app/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0},
        animate: { y: 0, opacity: 1},
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Meus Projetos
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2  py-6">
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
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
                />
                </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;