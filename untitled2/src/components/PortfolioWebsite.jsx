import React, { useState } from 'react';
import useTypewriter from './hooks/useTypewriter'; // Adjust path as needed
import './PortfolioWebsite.css';


const PortfolioWebsite = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const jobTitle = useTypewriter([
        "human interface designer",
        "web developer",
        "UI/UX Designer"
    ], 75, 1500, 50); // typingSpeed, pauseDuration, deletingSpeed




    const projects = [
        { name: 'DM Resharing', year: '2022' },
        { name: 'Media Viewer', year: '2022' },
        { name: 'Command System', year: '2022' },
        { name: 'Send Interaction', year: '2022' },
        { name: '@Everyone', year: '2022' },
        { name: '/Gif', year: '2022' },
        { name: '/Silent', year: '2022' },
        { name: 'Gyro Pride Theme', year: '2021' },
        { name: 'Word Effects', year: '2021' },
        { name: 'Reactions', year: '2021' },
        { name: 'Tweets in Thread', year: '2021' },
        { name: 'Super React', year: '2020' },
        { name: 'Shops Products', year: '2020' },
        { name: 'Instagram Shops', year: '2020' },
        { name: 'Origami System', year: '2020' },
        { name: 'Messenger Shops', year: '2020' },
        { name: 'Microsoft Project', year: '2019' },
        { name: 'Microsoft Tasks', year: '2018' },
        { name: 'Mobile Tasks', year: '2017' }
    ];

    const handleMouseEnter = (project) => {
        setHoveredProject(project);
    };

    const handleMouseLeave = () => {
        setHoveredProject(null);
    };

    const isDarkMode = hoveredProject === null;
    const backgroundColor = isDarkMode ? '#F8F8FB' : '#f5f5f7'; // softer white
    const textColor = isDarkMode ? 'black' : 'black';

    return (
        <div
            className="portfolio-container"
            style={{
                backgroundColor,
                color: textColor,
            }}
        >
            <div className="sidebar">
                <div className="project-list" onMouseLeave={handleMouseLeave}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-item ${hoveredProject?.name === project.name ? 'active' : ''}`}
                            onMouseEnter={() => handleMouseEnter(project)}
                        >
                            <span className="project-name">{project.name}</span>
                            <span className="project-year">{project.year}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="content-area">
                {hoveredProject ? (
                    <div className="project-content">
                        <h1 className="project-title">{hoveredProject.name}</h1>
                        <div className="project-description">
                            <p>This is a preview of the {hoveredProject.name} project from {hoveredProject.year}.</p>
                            {/*<p>Human interface designer at Apple</p>*/}
                        </div>
                    </div>
                ) : (
                    <div className="about-content">
                        <h1 className="name-title">Adiguna Sanjaya Ligawan</h1>
                        {/*<h2 className="job-title">human interface designer</h2>*/}
                        <h2 className="job-title">{jobTitle}<span className="blinking-cursor">|</span></h2>
                        <div className="nav-links">
                            <a href="#" className="nav-link">About</a>
                            <a href="#" className="nav-link">Email</a>
                            <a href="#" className="nav-link">LinkedIn</a>
                            <a href="#" className="nav-link">Twitter</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortfolioWebsite;