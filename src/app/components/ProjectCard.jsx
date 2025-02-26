import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tag }) => {
  const isService = tag.includes("Serviços Realizados"); 

  return (
    <div>
      <div
        className="h-48 md:h-64 rounded-t-xl relative group"
        style={{ 
          background: `url(${imgUrl})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {!isService && (
            <Link
              href={gitUrl}
              className="h-12 w-12 md:h-14 md:w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link hover:scale-110 transition-transform duration-300"
            >
              <CodeBracketIcon className="h-8 w-8 md:h-10 md:w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          <Link
            href={previewUrl}
            className={`h-12 w-12 md:h-14 md:w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link hover:scale-110 transition-transform duration-300 ${
              isService ? "mx-auto" : "" 
            }`}
          >
            <EyeIcon className="h-8 w-8 md:h-10 md:w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;