import {BADGE_MAP} from "./badgeData.js";
import {SCREENSHOT_MAP} from "./screenshotData.js";
import {FEATURES_MAP} from "./featuresData.js"
import word_search_board from '../assets/screenshots/word-search/word-search-board.png'
import manage_squirrels from '../assets/screenshots/squirrel-java/manage-squirrels-java.png'
import uno_preview from '../assets/screenshots/uno/uno-preview.png'
import add_items from '../assets/screenshots/squirrel-csharp/add-items-csharp.png'
import hero_section from '../assets/screenshots/portfolio/hero-section.png'

import {
    Gamepad2,
    Globe,
    Squirrel,
    CodeXml,
    Server,
    MonitorSmartphone,
    Blocks,
    Grid3X3,
    Shuffle,
    Play,
    MousePointer2,
    Search,
    Palette,
    PanelsTopLeft,
    Layers3,
    Database,
    FolderTree,
    LayoutTemplate, Rocket,
} from "lucide-react";

export const PROJECTS = [
        {
            slug: 'uno',
            title: "UNO",
            summary:
                "A full-stack browser-based UNO game built with Spring Boot and React.",
            description: [
                "UNO is a full-stack recreation of the classic card game built with a Java Spring Boot backend and a React frontend. " +
                "Players compete against computer-controlled opponents through a responsive browser interface while the backend manages game " +
                "rules, turn flow, card actions, and overall game state.",
                "The project focuses on clean game-state management, REST API design, and interactive gameplay systems. It serves as both a " +
                "portfolio piece and a deeper exploration of full-stack architecture, domain-driven design, and interactive UI development."
            ],
            navIcon: Gamepad2,
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
                    label: "React App",
                    summary: "View the source code on GitHub",
                    icon: CodeXml,
                    url: "https://github.com/Josiah4191/uno-game-client",
                },
                {
                    label: "Spring API",
                    summary: "View the source code on GitHub",
                    icon: CodeXml,
                    url: "https://github.com/Josiah4191/uno-game-api",
                },
                {
                    label: "Play Game",
                    summary: "Play the live game in your browser",
                    icon: Play,
                    url: "/uno"
                },
            ],
            preview: {
                image: uno_preview,
                alt: "UNO gameboard showing players, cards, draw pile, and discard pile.",
            },
            highlights: [
                {
                    title: "Complete Gameplay",
                    description: "Play a full game against computer players.",
                    icon: Gamepad2,
                },
                {
                    title: "Spring Boot API",
                    description: "Java backend with REST endpoints.",
                    icon: Server,
                },
                {
                    title: "Responsive Design",
                    description: "Works across desktop and mobile.",
                    icon: MonitorSmartphone,
                },
                {
                    title: "Clean Architecture",
                    description: "Built with reusable components and classes.",
                    icon: Blocks,
                },
            ]
        },
        {
            slug: 'word-search',
            title: "Word Search",
            summary: "A React and HTML Canvas word search game featuring procedural puzzle generation, drag-to-select gameplay, and responsive design.",
            description: [
                "Word Search is a word search game built with React, JavaScript, and the HTML Canvas API. Players solve dynamically generated puzzles " +
                "using drag-based word selection, custom canvas rendering, and interactive UI controls.",
                "The project focuses on game-style front-end development, reusable React components, and responsive design while serving as a platform " +
                "for future gameplay and puzzle-generation features."
            ],
            navIcon: Search,
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
                    label: "React App",
                    summary: "View the source code on GitHub",
                    icon: CodeXml,
                    url: "https://github.com/Josiah4191/word-search-rebuild"
                },
                {
                    label: "Play Game",
                    summary: "Play the live game in your browser",
                    icon: Play,
                    url: "/word-search"
                }
            ],
            preview: {
                image: word_search_board,
                alt: "Word Search game board with a letter grid and word list.",
            },
            highlights: [
                {
                    title: "Canvas Rendering",
                    description: "Puzzle board drawn with Canvas.",
                    icon: Grid3X3,
                },
                {
                    title: "Random Puzzles",
                    description: "Generates a new puzzle each game.",
                    icon: Shuffle,
                },
                {
                    title: "Drag Selection",
                    description: "Highlight words by dragging.",
                    icon: MousePointer2,
                },
                {
                    title: "Responsive Design",
                    description: "Works across desktop and mobile.",
                    icon: MonitorSmartphone,
                },
            ]
        },
        {
            slug: 'portfolio',
            title: "Portfolio Website",
            summary: "A responsive React portfolio website built to showcase projects, UI design, and front-end development work.",
            description: [
                "This portfolio website was designed and developed using React, JavaScript, HTML, and CSS to showcase software projects, " +
                "responsive layouts, and front-end development skills. The site focuses on clean UI design, reusable components, responsive navigation, " +
                "project organization, and polished interactions across desktop and mobile devices.",
                "The project also served as an opportunity to practice component architecture, routing, responsive design systems, dropdown navigation, " +
                "hover interactions, and overall visual consistency."
            ],
            navIcon: Globe,
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
                    icon: CodeXml,
                    url: "https://github.com/Josiah4191/portfolio-website",
                }
            ],
            preview: {
                image: hero_section,
                alt: "Portfolio homepage showing the hero section and featured projects.",
            },
            highlights: [
                {
                    title: "Responsive Layout",
                    description: "Built for desktop and mobile.",
                    icon: MonitorSmartphone,
                },
                {
                    title: "Reusable Components",
                    description: "Shared React components throughout.",
                    icon: Blocks,
                },
                {
                    title: "Project Pages",
                    description: "Detailed pages for every project.",
                    icon: PanelsTopLeft,
                },
                {
                    title: "Clean Design",
                    description: "Simple layout with consistent styling.",
                    icon: Palette,
                },
            ]
        },
        {
            slug: 'squirrel-tracker-java',
            title: "Squirrel Tracker",
            summary: "An app that lets squirrels track their food supply, built in Java and React.",
            description: [
                "Squirrel Tracker (Java) is a full-stack web application built with React, Spring Boot, and PostgreSQL. " +
                "The application allows users to manage squirrels, stash locations, and stored food supplies through a modern web interface.",
                "The project is a modern rework of the original C# version and focuses on REST APIs, client-server communication, " +
                "routing, dynamic front-end rendering, and full-stack architecture using Java and React."
            ],
            navIcon: Squirrel,
            navDescription: "Full stack app built with Java",
            projectType: "Full-Stack Web Application",
            route: "/projects/squirrel-tracker-java",
            badges: [
                BADGE_MAP.java,
                BADGE_MAP.react,
                BADGE_MAP.javascript,
                BADGE_MAP.spring,
                BADGE_MAP.postgresql,
            ],
            screenshots: SCREENSHOT_MAP["squirrel-java"],
            features: FEATURES_MAP["squirrel-java"],
            links: [
                {
                    label: "React App",
                    summary: "View the live demo in your browser",
                    icon: CodeXml,
                    url: "https://github.com/Josiah4191/squirrel-frontend",
                },
                {
                    label: "Spring API",
                    summary: "View the source code on GitHub",
                    icon: CodeXml,
                    url: "https://github.com/Josiah4191/squirrel-backend",
                },
            ],
            preview: {
                image: manage_squirrels,
                alt: "Squirrel Tracker application showing the squirrel management page."
            },
            highlights: [
                {
                    title: "Full CRUD",
                    description: "Manage squirrels and food.",
                    icon: FolderTree,
                },
                {
                    title: "Spring Boot API",
                    description: "Connects React to the backend.",
                    icon: Server,
                },
                {
                    title: "PostgreSQL",
                    description: "Stores application data.",
                    icon: Database,
                },
                {
                    title: "React Frontend",
                    description: "Responsive user interface.",
                    icon: MonitorSmartphone,
                },
            ]
        },
        {
            slug: 'squirrel-tracker-csharp',
            title: "Squirrel Tracker (C#)",
            summary: "An app that lets squirrels track their food supply, built in C# and .NET MVC Core.",
            description: [
                "Squirrel Tracker is a full-stack CRUD web application built with C#, ASP.NET Core MVC, and SQL. " +
                "The application allows users to create and manage squirrels, stash locations, and food supplies stored in " +
                "a relational database.",
                "The project was built to practice back-end web development concepts such as routing, controllers, database " +
                "interaction, and server-side rendering while learning how full-stack applications are structured and connected."
            ],
            navIcon: CodeXml,
            navDescription: "Windows app built with C#",
            projectType: "Full-Stack MVC Application",
            route: "/projects/squirrel-tracker-csharp",
            badges: [
                BADGE_MAP.csharp,
                BADGE_MAP.net,
                BADGE_MAP.sql,
            ],
            screenshots: SCREENSHOT_MAP["squirrel-csharp"],
            features: FEATURES_MAP["squirrel-csharp"],
            links: [
                {
                    label: ".NET MVC",
                    summary: "View the source code on GitHub",
                    icon: CodeXml,
                    url: "https://github.com/Josiah4191/squirrel-backend-dotnet",
                }
            ],
            preview: {
                image: add_items,
                alt: "Squirrel Tracker application showing the add items page."
            },
            highlights: [
                {
                    title: "Full CRUD",
                    description: "Manage squirrels and food.",
                    icon: FolderTree,
                },
                {
                    title: "ASP.NET Core MVC",
                    description: "Server-rendered web application.",
                    icon: LayoutTemplate,
                },
                {
                    title: "SQL Database",
                    description: "Stores application data.",
                    icon: Database,
                },
                {
                    title: "MVC Architecture",
                    description: "Organized into separate layers.",
                    icon: Layers3,
                },
            ]
        }
    ]
;