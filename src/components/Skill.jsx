/**
 * @copyright 2024 subbareddyk
 * @license Apache-2.0
 */

/**
 * Components
 */

import SkillCard from "./SkillCard";

const skillItem = [
    {
        imgSrc: "/images/html.svg",
        label: "Html",
        desc: "Markup Language",
    },
    {
        imgSrc: "/images/css3.svg",
        label: "CSS",
        desc: "User Interface",
    },
    {
        imgSrc: "/images/javascript.svg",
        label: "JavaScript",
        desc: "Interaction",
    },
    {
        imgSrc: "/images/bootstrap.svg",
        label: "Bootstrap",
        desc: "Front-End Framework",
    },
    {
        imgSrc: "/images/mongodb.svg",
        label: "MongoDB",
        desc: "Database",
    },
    {
        imgSrc: "/images/expressjs.svg",
        label: "ExpressJS",
        desc: "Node Framework",
    },
    {
        imgSrc: "/images/react.svg",
        label: "React",
        desc: "Framework",
    },
    {
        imgSrc: "/images/nodejs.svg",
        label: "NodeJS",
        desc: "Web Server",
    },
    {
        imgSrc: "/images/tailwindcss.svg",
        label: "TailwindCSS",
        desc: "User Interface",
    },
    {
        imgSrc: "/images/figma.svg",
        label: "Figma",
        desc: "Design tool",
    },
    {
        imgSrc: "/images/lenis.svg",
        label: "Lenis",
        desc: "Smooth Scrolling Library",
    },
    {
        imgSrc: "/images/gsap.svg",
        label: "GSAP",
        desc: "Animation Library",
    },
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[48ch] reveal-up">
                    Explore the tools and technologies I use to build
                    exceptional, high-performing websites and applications
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
