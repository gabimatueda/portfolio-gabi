"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import WhatsAppIcon from "../../../public/whatsapp-icon.png";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
    return(
        <section className="flex flex-col items-center my-12 md:my-12 py-24 gap-4 relative" id="contact">  
                <div className="text-center">
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                  Gostou do meu trabalho? Vamos conversar! 
                </p>
                <div className="socials flex flex-row gap-2 justify-center">
                    <Link href="https://github.com/gabimatueda">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/gabi-mayumi/">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                    <Link href="">
                        <Image src={WhatsAppIcon} alt="WhatsApp Icon"  width={45} height={30} />
                    </Link>
                </div>
            </div>
        </section>
    )
};

export default ContactSection;