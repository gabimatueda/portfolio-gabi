"use client";

import { useState } from 'react';

const skills = [
    { name: 'React', img: '/images/skills/react.png' },
    { name: 'Flutter', img: '/images/skills/flutter.png' },
    { name: 'JavaScript', img: '/images/skills/javascript.png' },
    { name: 'TypeScript', img: '/images/skills/typescript.png' },
    { name: 'NodeJs', img: '/images/skills/nodeJs.png' },
    { name: 'VueJs', img: '/images/skills/vueJs.png' },
];

export function Skills() {
    const [activeSkill, setActiveSkill] = useState(null);

    return (
        <div className="py-8 px-4 xl:gap-16 sm:py-10 xl:px-10">
            <div className="sm:w-auto w-full sm:mx-2 mb-4 sm:mb-0 border sm:border-[#33353F] rounded-md py-6 px-2 flex flex-wrap justify-center gap-7">
                {skills.map((skills) => (
                    <div
                        key={skills.name}
                        className="relative inline-block sm:w-auto h-auto"
                        onMouseEnter={() => setActiveSkill(skills.name)}
                        onMouseLeave={() => setActiveSkill(null)}
                    >
                        <img
                            src={skills.img}
                            className="w-14 h-14"
                            alt={skills.name}
                        />
                        {activeSkill === skills.name && (
                            <div className="absolute top-0 right-1/2 translate-x-1/2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                                {skills.name}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
