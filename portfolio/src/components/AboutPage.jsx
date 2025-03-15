// AboutPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/style.css';
import '../components/cv.css';

const AboutPage = () => {
    useEffect(() => {
        // Initialize the interactive bubble animation from main.ts
        const interBubble = document.querySelector('.interactive');
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        function move() {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            if (interBubble) {
                interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            }
            requestAnimationFrame(() => {
                move();
            });
        }

        window.addEventListener('mousemove', (event) => {
            tgX = event.clientX;
            tgY = event.clientY;
        });

        move();

        // Cleanup event listener
        return () => {
            window.removeEventListener('mousemove', () => {});
        };
    }, []);

    return (
        <div className="about-page-wrapper" style={{ width: '100%', minHeight: '100vh', position: 'relative', overflowY: 'auto' }}>
            {/* Background Animation */}
            <div className="gradient-bg" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -8" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <div className="gradients-container">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                    <div className="interactive"></div>
                </div>
            </div>

            <Link to="/" className="back-button" aria-label="Back to home page">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5"></path>
                    <path d="M12 19l-7-7 7-7"></path>
                </svg>
            </Link>

            {/* CV Card */}
            <div className="cv-container">
                <div className="cv-card">
                    {/* Profile section with just the header */}
                    <div className="profile-section">
                        {/* Profile header group that stays at top */}
                        <div className="profile-header">
                            <img src="/photo.png" alt="Adiguna" className="profile-img" />
                            <h1 className="name">Adiguna Sanjaya L</h1>
                            <p className="title">Web & Game Developer</p>
                        </div>
                    </div>

                    <div className="content-section">
                        <div className="section">
                            <h2 className="section-title">About Me</h2>
                            <div className="section-content">
                                <div className="section-content-detail">
                                    <p>Birthday: 24 January 2005 in NTB</p>
                                    <p>Gender: Male</p>
                                </div>
                                <p>Passionate web developer with 5+ years of experience creating intuitive and dynamic web applications. Specializing in front-end development with a strong focus on user experience and responsive design. Constantly exploring new technologies and methodologies to enhance my skill set and deliver cutting-edge solutions.</p>
                            </div>
                        </div>

                        <div className="section">
                            <h2 className="section-title">Skills</h2>
                            <div className="skill-list">
                                <div className="skill-item">C#</div>
                                <div className="skill-item">C++</div>
                                <div className="skill-item">C</div>
                                <div className="skill-item">Unity</div>
                                <div className="skill-item">Godot</div>
                                <div className="skill-item">HTML5</div>
                                <div className="skill-item">CSS3</div>
                                <div className="skill-item">JavaScript</div>
                                <div className="skill-item">Java</div>
                                <div className="skill-item">React</div>
                                <div className="skill-item">Flask</div>
                                <div className="skill-item">python3</div>
                                <div className="skill-item">Git</div>
                                <div className="skill-item">Figma</div>
                            </div>
                        </div>

                        <div className="section">
                            <h2 className="section-title">Experience</h2>
                            <div className="experience-item">
                                <h3 className="experience-title">Senior Web Developer</h3>
                                <p className="experience-place">TechInnovate Solutions</p>
                                <p className="experience-date">2020 - Present</p>
                                <p className="experience-description">Lead front-end development for multiple high-profile client projects. Collaborated with design and back-end teams to deliver seamless user experiences. Implemented modern frameworks and optimized performance across platforms.</p>
                            </div>

                            <div className="experience-item">
                                <h3 className="experience-title">Web Developer</h3>
                                <p className="experience-place">Digital Crafters Agency</p>
                                <p className="experience-date">2018 - 2020</p>
                                <p className="experience-description">Developed responsive websites and web applications for diverse clients. Worked closely with designers to implement pixel-perfect interfaces. Maintained and updated existing client websites.</p>
                            </div>
                        </div>

                        <div className="section">
                            <h2 className="section-title">Education</h2>
                            <div className="experience-item">
                                <h3 className="experience-title">Bachelor of Computer Science</h3>
                                <p className="experience-place">University of Technology</p>
                                <p className="experience-date">2014 - 2018</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact info moved out of profile section so it can be repositioned independently */}
                    <div className="contact-info">
                        <div className="contact-item">
                            <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                            </svg>
                            <span>adiguna@example.com</span>
                        </div>
                        <div className="contact-item">
                            <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                            </svg>
                            <span>+123 456 7890</span>
                        </div>
                        <div className="contact-item">
                            <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>Jakarta, Indonesia</span>
                        </div>
                        <div className="contact-item">
                            <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                            <span>linkedin.com/adiguna</span>
                        </div>
                        <div className="contact-item">
                            <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                            </svg>
                            <span>github.com/adiguna</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;