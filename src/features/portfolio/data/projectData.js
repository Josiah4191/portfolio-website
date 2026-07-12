import {BADGE_MAP} from "./badgeData.js";
import {SCREENSHOT_MAP} from "./screenshotData.js";
import {FEATURES_MAP} from "./featuresData.js"
import word_search_board from '../assets/screenshots/word-search/word-search-board.png'
import manage_squirrels from '../assets/screenshots/squirrel/manage-squirrels.png'
import uno_preview from '../assets/screenshots/uno/uno-preview.png'
import hero_section from '../assets/screenshots/portfolio/hero-section.png'

export const PROJECTS = [
    {
        slug: 'portfolio',
        title: "Portfolio Website",
        summary: "A personal portfolio website built with React to showcase the projects I've been working on.",
        description: [
            "This portfolio website was built with React, JavaScript, HTML, and CSS to showcase the projects I've been building and the skills I've developed along the way.",
            "I wanted the site to be clean, simple, and easy to navigate while creating a place to share the projects I've been working on."
        ],
        navDescription: "This website built with React",
        projectType: "Portfolio Website",
        route: "/projects/portfolio",
        badges: [
            BADGE_MAP.react,
            BADGE_MAP.javascript,
            BADGE_MAP.figma,
            BADGE_MAP.html,
            BADGE_MAP.css,
        ],
        screenshots: SCREENSHOT_MAP["portfolio"],
        features: FEATURES_MAP["portfolio"],
        links: [
            {
                label: "React App",
                summary: "View the source code on GitHub",
                url: "https://github.com/josiahstoltzfus/portfolio-website",
            }
        ],
        preview: {
            image: hero_section,
            alt: "Portfolio homepage showing the hero section and featured projects.",
        }
    },
        {
            slug: 'uno',
            title: "UNO",
            summary:
                "A full-stack UNO game built with Spring Boot and React.",
            description: [
                "UNO is a full-stack application of the classic card game built with Java, Spring Boot, and React. Players compete against computer-controlled opponents while the backend manages the game rules and keeps track of the game state.",
                "The project gave me hands-on experience building a larger full-stack application, managing game logic, and connecting a React frontend to a Spring Boot backend."
            ],
            navDescription: "Card game built with Java",
            projectType: "Full-Stack Web Application",
            route: "/projects/uno",
            badges: [
                BADGE_MAP.java,
                BADGE_MAP.spring,
                BADGE_MAP.react,
                BADGE_MAP.javascript,
                BADGE_MAP.html,
                BADGE_MAP.css,
            ],
            screenshots: SCREENSHOT_MAP["uno"],
            features: FEATURES_MAP["uno"],
            links: [
                {
                    label: "Play Game",
                    summary: "Play the live game in your browser",
                    url: "/uno"
                },
                {
                    label: "React App",
                    summary: "View the source code on GitHub",
                    url: "https://github.com/josiahstoltzfus/portfolio-website/tree/main/src/features/games/uno",
                },
                {
                    label: "Spring API",
                    summary: "View the source code on GitHub",
                    url: "https://github.com/josiahstoltzfus/uno-game-api",
                },
            ],
            preview: {
                image: uno_preview,
                alt: "UNO gameboard showing players, cards, draw pile, and discard pile.",
            }
        },
        {
            slug: 'word-search',
            title: "Word Search",
            summary: "A word search game built with React and the HTML Canvas API.",
            description: [
                "Word Search is a browser-based word search game built with React, JavaScript, and the HTML Canvas API. Players solve randomly generated puzzles by dragging across words on the board.",
                "I built the project to practice using React and the Canvas API. It's also a project I can continue adding to as I learn new things."
            ],
            navDescription: "Puzzle game built with JavaScript",
            projectType: "Frontend Web Game",
            route: "/projects/word-search",
            badges: [
                BADGE_MAP.react,
                BADGE_MAP.javascript,
                BADGE_MAP.html,
                BADGE_MAP.css,
            ],
            screenshots: SCREENSHOT_MAP["word-search"],
            features: FEATURES_MAP["word-search"],
            links: [
                {
                    label: "Play Game",
                    summary: "Play the live game in your browser",
                    url: "/word-search"
                },
                {
                    label: "React App",
                    summary: "View the source code on GitHub",
                    url: "https://github.com/josiahstoltzfus/portfolio-website/tree/main/src/features/games/word-search"
                }
            ],
            preview: {
                image: word_search_board,
                alt: "Word Search game board with a letter grid and word list.",
            }
        },
        {
            slug: 'squirrel-tracker',
            title: "Squirrel Tracker",
            summary: "An app that lets squirrels track their food supply, built with Java and React.",
            description: [
                "Squirrel Tracker is a full-stack web application built with React, Spring Boot, and PostgreSQL. It allows users to manage squirrels, stash locations, and stored food supplies.",
                "The idea for Squirrel Tracker came from a C# ASP.NET MVC class project that used MySQL. I rebuilt it from scratch using React, Spring Boot, and PostgreSQL to practice building full-stack applications with the technologies I want to work with professionally.",
                "More than anything, the project gave me a chance to build a complete application from frontend to backend while getting more comfortable with Spring Boot, PostgreSQL, and REST APIs."                ],
            navDescription: "Full stack app built with Java",
            projectType: "Full-Stack Web Application",
            route: "/projects/squirrel-tracker",
            badges: [
                BADGE_MAP.java,
                BADGE_MAP.react,
                BADGE_MAP.javascript,
                BADGE_MAP.spring,
                BADGE_MAP.postgresql,
            ],
            screenshots: SCREENSHOT_MAP["squirrel"],
            features: FEATURES_MAP["squirrel"],
            links: [
                {
                    label: "React App",
                    summary: "View the live demo in your browser",
                    url: "https://github.com/josiahstoltzfus/squirrel-frontend",
                },
                {
                    label: "Spring API",
                    summary: "View the source code on GitHub",
                    url: "https://github.com/josiahstoltzfus/squirrel-backend",
                },
            ],
            preview: {
                image: manage_squirrels,
                alt: "Squirrel Tracker application showing the squirrel management page."
            }
        }
    ]
;