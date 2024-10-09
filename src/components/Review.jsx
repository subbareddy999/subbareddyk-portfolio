/**
 * @copyright 2024 subbareddyk
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import ReviewCard from "./ReviewCard";

const reviews = [
    {
        content:
            "I'm absolutely blown away by your work! The site is stunning and so easy to navigate. I can't recommend you enough!",
        name: "Sophia Ramirez",
        imgSrc: "/images/people-1.jpg",
        company: "Freelance Designer",
    },
    {
        content:
            "Working with you was such a breath of fresh air! You delivered everything so quickly and with such attention to detail. I'm truly impressed!",
        name: "Ethan Caldwell",
        imgSrc: "/images/people-2.jpg",
        company: "Tech Innovator",
    },
    {
        content:
            "You are incredibly talented! The website you built is not only functional but also looks amazing. I’m thrilled with the result!",
        name: "Liam Bennett",
        imgSrc: "/images/people-3.jpg",
        company: "Startup Founder",
    },
    {
        content:
            "Your creativity shines through in every aspect of the project! I’m so happy with how it turned out. You really exceeded my expectations!",
        name: "Noah Williams",
        imgSrc: "/images/people-4.jpg",
        company: "Creative Agency",
    },
    {
        content:
            "I’m so impressed by your professionalism! The final product is polished and user-friendly. I can’t wait to work together again!",
        name: "Ava Thompson",
        imgSrc: "/images/people-5.jpg",
        company: "Marketing Specialist",
    },
    {
        content:
            "Your dedication to quality is evident! The way you tackled challenges and brought the project to life was inspiring. I wholeheartedly recommend you!",
        name: "Jonathan",
        imgSrc: "/images/people-6.jpg",
        company: "Product Manager",
    },
];

const Review = () => {
    useGSAP(() => {
        gsap.to(".scrub-slide", {
            scrollTrigger: {
                trigger: ".scrub-slide",
                start: "-200% 80%",
                end: "400% 80%",
                scrub: true,
            },
            x: "-1000",
        });
    });

    return (
        <section id="reviews" className="section overflow-hidden">
            <div className="container">
                <h2 className="healine-2 mb-8 reveal-up">
                    What our customers say
                </h2>
                <div className="scrub-slide flex items-stretch gap-3 w-fit">
                    {reviews.map(({ content, name, imgSrc, company }, key) => (
                        <ReviewCard
                            key={key}
                            name={name}
                            imgSrc={imgSrc}
                            company={company}
                            content={content}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Review;
