import React, { useEffect } from 'react';
import '../style/about.css';
import starImage from '../assets/start-image.png';
import lineImage from '../assets/line-start.png';
import strengthManImage from '../assets/strength-man.png';
import LetsTalkSection from '../homepage-section/lets-talk.jsx';

// Centralized content — just edit this object!
const ABOUT_CONTENT = {
    aboutUs: {
        title: "ABOUT US",
        paragraphs: [
            "At PECO, we believe construction isn't just about bricks and mortar—it's about creating spaces that people can rely on, day after day. That's why we focus on providing high-quality solutions that bring strength, durability, and peace of mind to every project.",
            "Whether you're a homeowner building your dream house or a contractor taking on large-scale projects, you can count on PECO to deliver products that last. Our solutions are designed to make your work easier, your results stronger, and your confidence greater.",
            "Because at the heart of everything we do is a simple promise: with PECO, you're building with trust."
        ],
        heroImage: strengthManImage,
        heroAlt: "Construction Worker"
    },

    mission: {
        title: "OUR MISSION",
        text: "At PECO, our mission is simple yet powerful, to provide construction solutions that combine strength, reliability, & ease of use. We aim to support everyone who builds from the individual homeowner to the seasoned contractor by delivering products that make every project stand firm & last longer."
    },

    vision: {
        title: "OUR VISION",
        text: "We envision a future where PECO is the first name people trust in construction solutions. A brand recognized not only for the durability of its products but also for the confidence it gives to those who build with us. Creating spaces that endure and inspire for generations."
    },

    founder: {
        name: "Hitarth Patel",
        title: "FOUNDER",
        description: "As the visionary founder, Hitarth Patel established PECO on the simple, powerful promise of building with trust. His leadership drives the commitment to providing the high-quality, durable solutions that give every builder confidence in their final result.",
        image: null // Add founder image path here when available
    }
};

const About = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

        return () => {
            document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.unobserve(el));
        };
    }, []);

    const { aboutUs, mission, vision, founder } = ABOUT_CONTENT;

    return (
        <div className="about-page">

            {/* About Us Section */}
            <section className="about-section about-us">
                <div className="container">
                    <div className="content-wrapper">
                        <div className="text-content animate-on-scroll">
                            <h1 className="section-title">{aboutUs.title}</h1>
                            {aboutUs.paragraphs.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                            <div className="decorative-line">
                                <img src={lineImage} alt="Decorative Line" className="line-img animate-on-scroll" />
                            </div>
                        </div>
                        <div className="image-content animate-on-scroll">
                            <img src={starImage} alt="Star" className="star-img rotating" />
                            <div className="hero-figure">
                                <img src={aboutUs.heroImage} alt={aboutUs.heroAlt} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="about-section mission-section">
                <div className="container">
                    <div className="mission-content animate-on-scroll">
                        <h2 className="section-title">{mission.title}</h2>
                        <img src={starImage} alt="Star" className="star-img-small rotating" />
                        <p>{mission.text}</p>
                        <div className="decorative-line-center">
                            <img src={lineImage} alt="Decorative Line" className="line-img animate-on-scroll" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="about-section vision-section">
                <div className="container">
                    <div className="vision-content animate-on-scroll">
                        <h2 className="section-title">{vision.title}</h2>
                        <img src={starImage} alt="Star" className="star-img-small rotating" />
                        <p>{vision.text}</p>
                        <div className="decorative-line-center">
                            <img src={lineImage} alt="Decorative Line" className="line-img animate-on-scroll" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="about-section founder-section">
                <div className="container">
                    <div className="founder-wrapper">
                        <div className="founder-text animate-on-scroll">
                            <h2 className="section-title">{founder.title}</h2>
                            <h3 className="founder-name">{founder.name}</h3>
                            <p>{founder.description}</p>
                        </div>
                        <div className="founder-image animate-on-scroll">
                            <img src={starImage} alt="Star" className="star-img-small rotating" />
                            <div className="founder-placeholder">
                                {founder.image ? (
                                    <img src={founder.image} alt={founder.name} />
                                ) : (
                                    <div className="placeholder-text">Founder Photo Coming Soon</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LetsTalkSection />
        </div>
    );
};

export default About;