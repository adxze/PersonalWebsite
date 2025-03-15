import React, { useState, useEffect, useRef } from 'react';
import useTypewriter from './hooks/useTypewriter';
import './PortfolioWebsite.css'; // Base styles
import './ResponsivePortfolio.css'; // Our dynamic responsive styles

import { Link } from 'react-router-dom';

const PortfolioWebsite = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [isPinned, setIsPinned] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const popupRef = useRef(null);
    const hoverTimeoutRef = useRef(null);

    // Typewriter effect for job title
    const jobTitle = useTypewriter([
        "Game Developer",
        "Mobile Developer",
        "Web Developer",
        "UI/UX Designer"
    ], 75, 1500, 50);

    // Project data
    const projects = [
        {
            name: 'Crime Delivery',
            year: '2025',
            description: 'A game about delivering packages in a crime-ridden city. Players must navigate through dangerous streets while avoiding police and rival gangs.',
            technologies: ['Unity', 'C#', 'Blender'],
            links: [
                { title: 'View Demo', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Platform Teleport',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project1',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project2',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project3',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project4',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project5',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project6',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project7',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project8',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project9',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project10',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project10',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project10',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project10',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project10',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project10',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },

        {
            name: 'Project10',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },

        {
            name: 'Project10',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },
        {
            name: 'Project10',
            year: '2025',
            description: 'A puzzle platformer with teleportation mechanics. Players solve spatial puzzles by teleporting between different areas of each level.',
            technologies: ['Godot', 'GDScript', 'Aseprite'],
            links: [
                { title: 'Play Game', url: '#' },
                { title: 'GitHub', url: '#' }
            ]
        },










    ];

    // Responsive handler using ResizeObserver for more fluid response
    useEffect(() => {
        const checkDeviceSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Check initially
        checkDeviceSize();

        // Set up responsive listener with ResizeObserver if available
        let resizeObserver;
        if (window.ResizeObserver) {
            resizeObserver = new ResizeObserver(() => {
                checkDeviceSize();
            });
            resizeObserver.observe(document.body);
        } else {
            // Fallback to window resize event
            window.addEventListener('resize', checkDeviceSize);
        }

        return () => {
            if (resizeObserver) {
                resizeObserver.disconnect();
            } else {
                window.removeEventListener('resize', checkDeviceSize);
            }
        };
    }, []);

    // Close popup on escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isPinned) {
                closePopup();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isPinned]);

    // Handle clicks outside popup
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current &&
                !popupRef.current.contains(event.target) &&
                isPinned &&
                !event.target.closest('.project-item') &&
                !event.target.closest('.mobile-project-card')) {
                closePopup();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isPinned]);

    // Project hover handler with debounce
    const handleMouseEnter = (project) => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }

        if (!isMobile && !isPinned) {
            hoverTimeoutRef.current = setTimeout(() => {
                setHoveredProject(project);
                setActiveProject(project);
            }, 50);
        }
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }

        if (!isPinned && !isMobile) {
            hoverTimeoutRef.current = setTimeout(() => {
                setHoveredProject(null);
                setActiveProject(null);
            }, 150);
        }
    };

    // Project click handler
    const handleProjectClick = (project) => {
        setActiveProject(project);
        setIsPinned(true);
        setHoveredProject(null);
    };

    // Close popup
    const closePopup = () => {
        setIsPinned(false);
        setActiveProject(null);
    };

    // Popup visibility state
    const isPopupVisible = isPinned || hoveredProject !== null;
    const currentProject = activeProject;

    return (
        <div className="portfolio-container">
            {/* Sidebar - hidden on mobile */}
            <div className="sidebar">
                <div className="project-list">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-item ${currentProject?.name === project.name ? 'active' : ''}`}
                            onMouseEnter={() => handleMouseEnter(project)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleProjectClick(project)}
                        >
                            <span className="project-name">{project.name}</span>
                            <span className="project-year">{project.year}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="content-area">
                <div className="about-content">
                    <h1 className="name-title">Adiguna Sanjaya Ligawan</h1>
                    <h2 className="job-title">
                        {jobTitle}<span className="blinking-cursor">|</span>
                    </h2>
                    <div className="nav-links">
                        <Link to="/about" className="nav-about">About</Link>
                        <a href="mailto:adigunasanjaya@gmail.com" className="nav-link">Email</a>
                        <a href="https://www.linkedin.com/in/adiguna-sanjaya-ligawan-a417b1291/"
                           className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/adxze" className="nav-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>

                    {/* Mobile Projects Section - shown conditionally */}
                    {isMobile && (
                        <div className="mobile-projects-section">
                            <h3 className="mobile-projects-title">My Projects</h3>
                            <div className="mobile-projects-grid">
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className="mobile-project-card"
                                        onClick={() => handleProjectClick(project)}
                                    >
                                        <div className="mobile-project-name">{project.name}</div>
                                        <div className="mobile-project-year">{project.year}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Project Popup */}
            <div
                className={`popup-overlay ${isPopupVisible ? 'active' : ''} ${isPinned ? 'pinned' : ''}`}
                onClick={isPinned ? closePopup : null}
            ></div>
            <div
                ref={popupRef}
                className={`project-popup ${isPopupVisible ? 'active' : ''}`}
                onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                        clearTimeout(hoverTimeoutRef.current);
                    }
                }}
                onMouseLeave={() => {
                    if (!isPinned && !isMobile) {
                        setHoveredProject(null);
                        setActiveProject(null);
                    }
                }}
            >
                {currentProject && (
                    <>
                        <div className="project-popup-header">
                            <h2 className="project-title">{currentProject.name}</h2>
                            {isPinned && (
                                <button className="close-popup" onClick={closePopup} aria-label="Close project details">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            )}
                            {!isPinned && !isMobile && (
                                <div className="pin-indicator">
                                    <span>Click project to pin</span>
                                </div>
                            )}
                        </div>

                        <div className="project-popup-content">
                            <div className="project-description">
                                <p>{currentProject.description || `This is a preview of the ${currentProject.name} project from ${currentProject.year}.`}</p>

                                {currentProject.technologies && (
                                    <div className="project-technologies" style={{ marginTop: '20px' }}>
                                        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Technologies</h3>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                            {currentProject.technologies.map((tech, index) => (
                                                <span key={index} style={{
                                                    backgroundColor: '#f0f0f0',
                                                    padding: '4px 10px',
                                                    borderRadius: '12px',
                                                    fontSize: '14px'
                                                }}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="project-popup-footer">
                            <div className="project-year-tag">
                                {currentProject.year}
                            </div>
                            <div className="project-links">
                                {currentProject.links ? (
                                    currentProject.links.map((link, index) => (
                                        <a key={index} href={link.url} className="project-link" target="_blank" rel="noopener noreferrer">
                                            {link.title}
                                        </a>
                                    ))
                                ) : (
                                    <a href="#" className="project-link">View Project</a>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PortfolioWebsite;