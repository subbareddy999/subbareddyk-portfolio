/**
 * @copyright 2024 subbareddyk
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: "/images/instashare.svg",
        title: "InstaShare App",
        tags: ["Social Media", "API", "Authentication"],
        projectLink: "https://subbainstashare.ccbp.tech/",
    },
    {
        imgSrc: "/images/nxttrendz.svg",
        title: "NxtTrendz",
        tags: ["E-commerce", "API", "Shopping Cart"],
        projectLink: "https://subbatrendz.ccbp.tech/",
    },
    {
        imgSrc: "/images/jobby.png",
        title: "Jobby",
        tags: ["Job Search Website", "UI", "Filters"],
        projectLink: "https://subbajobby.ccbp.tech/",
    },
    {
        imgSrc: "/images/nxtwatch.svg",
        title: "NxtWatch",
        tags: ["YouTube Clone", "Dark/Light Mode", "Responsive Design"],
        projectLink: "https://subbanxtwatch.ccbp.tech/",
    },
    {
        imgSrc: "/images/portfolio.svg",
        title: "Personal Portfolio",
        tags: ["Web Design", "Development", "React", "Responsive Design"],
        projectLink: "",
    },
    {
        imgSrc: "/images/workinprogress.svg",
        title: "eCommerce website",
        tags: ["work-in-progress"],
        projectLink: "",
    },
];

const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
