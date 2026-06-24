import {BADGE_MAP} from "./badgeData.js";
import {SCREENSHOT_MAP} from "./screenshotData.js";

export const PROJECTS = [
        {
            slug: 'uno',
            title: "UNO",
            summary:
                "A full-stack browser-based UNO game built with Spring Boot and React.",
            fullDescription:
                "UNO is a full-stack recreation of the classic card game built with a Java Spring Boot backend and a React frontend. The project focuses on clean game-state management, REST API design, and interactive gameplay systems. Players can compete against computer-controlled opponents through a responsive browser interface while the backend manages game rules, turn flow, card actions, and overall game state. The project serves as both a portfolio piece and a deeper exploration of full-stack architecture, domain-driven design, and interactive UI development.",
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
            features: [
                "Spring Boot REST API powering game actions and state management",
                "Interactive React frontend with responsive browser-based gameplay",
                "Computer-controlled opponents with automated turn logic",
                "Complete UNO rules including wild cards, draw cards, skips, reverses, and UNO callouts",
                "Separation of frontend presentation and backend game logic",
                "Architecture designed for future multiplayer expansion"
            ],
            links: [
                {
                    label: "React App",
                    icon: "github",
                    url: "https://github.com/Josiah4191/uno-game-client",
                },
                {
                    label: "Spring API",
                    icon: "github",
                    url: "https://github.com/Josiah4191/uno-game-api",
                },
                {
                    label: "Play Game",
                    icon: "demo",
                    url: "/uno"
                },
            ],
        },
        {
            slug: 'word-search',
            title: "Word Search",
            summary: "A React and HTML Canvas word search game featuring procedural puzzle generation, drag-to-select gameplay, and responsive design.",
            fullDescription: "Word Search is a word search game built with React, JavaScript, and the HTML Canvas API. Players solve dynamically " +
                "generated puzzles using drag-based word selection, custom canvas rendering, and interactive UI controls. The project focuses on game-style " +
                "front-end development, reusable React components, and responsive design while serving as a platform for future gameplay and puzzle-generation " +
                "features.",
            route: "/projects/word-search",
            badges: [
                BADGE_MAP.react,
                BADGE_MAP.javascript,
                BADGE_MAP.html,
                BADGE_MAP.css,
            ],
            screenshots: SCREENSHOT_MAP["word-search"],
            features: [
                "Procedural puzzle generation from categorized word banks",
                "Drag-to-select gameplay with directional word detection",
                "Custom HTML Canvas rendering system for puzzle visualization",
                "Difficulty settings with varying puzzle complexity",
                "Responsive layout supporting desktop and mobile devices",
                "Progress tracking with completed-word highlighting",
                "Component-based React architecture with reusable UI systems"
            ],
            links: [
                {
                    label: "React App",
                    icon: "github",
                    url: "https://github.com/Josiah4191/word-search-rebuild"
                },
                {
                    label: "Play Game",
                    icon: "demo",
                    url: "/word-search"
                }
            ],
        },
        {
            slug: 'portfolio',
            title: "Portfolio Website",
            summary: "A responsive React portfolio website built to showcase projects, UI design, and front-end development work.",
            fullDescription: "This portfolio website was designed and developed using React, JavaScript, HTML, and CSS to showcase software projects, responsive layouts, and front-end development skills. " +
                "The site focuses on clean UI design, reusable components, responsive navigation, project organization, and polished interaction design across desktop and mobile layouts. " +
                "The project also served as an opportunity to practice component architecture, routing, responsive design systems, dropdown navigation, hover interactions, and overall visual consistency.",
            route: "/projects/portfolio",
            badges: [
                BADGE_MAP.react,
                BADGE_MAP.javascript,
                BADGE_MAP.figma,
                BADGE_MAP.html,
                BADGE_MAP.css,
            ],
            screenshots: SCREENSHOT_MAP["portfolio"],
            features: [
                "Responsive layouts optimized for desktop and mobile devices",
                "Reusable React components and structured project organization",
                "Expandable desktop and mobile project navigation menus",
                "Interactive hover effects and polished UI transitions",
                "Project detail pages with screenshots, links, and feature breakdowns",
                "Custom design system using consistent spacing, colors, shadows, and typography"
            ],
            links: [
                {
                    label: "React App",
                    icon: "github",
                    url: "https://github.com/Josiah4191/portfolio-website",
                }
            ],
        },
        {
            slug: 'squirrel-tracker-java',
            title: "Squirrel Tracker (Java)",
            summary: "An app that lets squirrels track their food supply, built in Java and React.",
            fullDescription: "Squirrel Tracker (Java) is a full-stack web application built with React, Spring Boot, " +
                "and PostgreSQL. The project is a modern rework of the original C# version and focuses on REST APIs, " +
                "client-server communication, routing, and dynamic front-end rendering. The application allows users to " +
                "manage squirrels, stash locations, and stored food supplies while exploring modern full-stack architecture " +
                "using Java and React.",
            route: "/projects/squirrel-tracker-java",
            badges: [
                BADGE_MAP.java,
                BADGE_MAP.react,
                BADGE_MAP.javascript,
                BADGE_MAP.spring,
                BADGE_MAP.postgresql,
            ],
            screenshots: SCREENSHOT_MAP["squirrel-java"],
            features: [
                "React front-end with dynamic component-based UI",
                "REST API built with Spring Boot",
                "PostgreSQL database integration",
                "Project routing using React Router",
                "Data-driven rendering using reusable components",
                "Exploration of modern client-server architecture"
            ],
            links: [
                {
                    label: "Spring API",
                    icon: "github",
                    url: "https://github.com/Josiah4191/squirrel-backend",
                },
                {
                    label: "Live Demo",
                    icon: "demo",
                    url: "/squirrels"
                }
            ],
        },
        {
            slug: 'squirrel-tracker-csharp',
            title: "Squirrel Tracker (C#)",
            summary: "An app that lets squirrels track their food supply, built in C# and .NET MVC Core.",
            fullDescription: "Squirrel Tracker is a full-stack CRUD web application built with C#, ASP.NET MVC Core, and SQL. " +
                "The app allows users to create and manage squirrels, stash locations, and food supplies stored in a database. The " +
                "project was built to practice back-end web development concepts such as routing, controllers, database interaction, and " +
                "server-side rendering while learning how full-stack applications are structured and connected together.",
            route: "/projects/squirrel-tracker-csharp",
            badges: [
                BADGE_MAP.csharp,
                BADGE_MAP.net,
                BADGE_MAP.sql,
            ],
            screenshots: SCREENSHOT_MAP["squirrel-csharp"],
            features: [
                "Create, edit, and delete squirrels and stash locations",
                "Store and manage food supply information in a SQL database",
                "Server-side rendered pages using ASP.NET MVC Core",
                "Structured routing and controller-based architecture",
                "Connected relational database models and CRUD operations",
                "Session and cookie experimentation for user interaction tracking"
            ],
            links: [
                {
                    label: ".NET MVC",
                    icon: "github",
                    url: "https://github.com/Josiah4191/squirrel-backend-dotnet",
                }
            ],
        },
        {
            slug: 'birdhouse',
            title: "Birdhouse",
            summary: "A Spring Boot REST API project focused on back-end architecture, database integration, and API development.",
            fullDescription: "Birdhouse is a back-end focused web application built with Spring Boot and PostgreSQL. The project " +
                "focuses on designing and organizing a REST API using controllers, services, repositories, and relational database " +
                "models. It was built to practice modern Java back-end development concepts such as API routing, layered architecture, " +
                "database interaction, and structured project organization.",
            route: "/projects/birdhouse",
            badges: [
                BADGE_MAP.java,
                BADGE_MAP.spring,
                BADGE_MAP.postgresql,
            ],
            screenshots: SCREENSHOT_MAP["birdhouse"],
            features: [
                "REST API built with Spring Boot",
                "PostgreSQL database integration",
                "Controller, service, and repository architecture",
                "Structured entity and relational database models",
                "Swagger/OpenAPI documentation support",
                "Organized back-end project structure"
            ],
            links: [
                {
                    label: "Spring API",
                    icon: "github",
                    url: "https://github.com/Josiah4191/birdhouse-backend",
                }
            ],
        }
    ]
;