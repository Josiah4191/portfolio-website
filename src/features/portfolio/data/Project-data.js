import {BADGE_MAP} from "./Badge-data.js";
import {SCREENSHOT_MAP} from "./Screenshot-data.js";

export const PROJECTS = [
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
                    label: "GitHub",
                    url: "https://github.com/Josiah4191/portfolio-website",
                }
            ],
            lessonsLearned: [
                "This project improved my understanding of responsive front-end design and organizing larger React applications into reusable components.",
                "I gained experience building adaptive navigation systems, responsive layouts, hover interactions, dropdown menus, and mobile-friendly UI patterns.",
                "The project also strengthened my understanding of visual consistency, spacing systems, reusable styling patterns, and balancing usability with clean minimal design."
            ]
        },
        {
            slug: 'portfolio-original',
            title: "Portfolio Original",
            summary: "An earlier personal portfolio website built with HTML, CSS, and JavaScript that includes several small projects and experiments.",
            fullDescription: "Portfolio Original is an earlier version of my personal portfolio website built with HTML, CSS, and vanilla JavaScript. " +
                "The project was used to practice front-end fundamentals such as responsive layout design, DOM manipulation, navigation systems, " +
                "styling organization, and interactive UI features. It also served as a home for several smaller JavaScript projects and experiments, " +
                "including the original version of the Word Search game.",
            route: "/projects/portfolio-original",
            badges: [
                BADGE_MAP.javascript,
                BADGE_MAP.html,
                BADGE_MAP.css,
            ],
            screenshots: SCREENSHOT_MAP["portfolio-original"],
            features: [
                "Multi-section portfolio website layout",
                "Responsive design using HTML and CSS",
                "JavaScript-driven navigation and interaction",
                "Project showcase and experiment sections",
                "Preferences/settings functionality",
                "Original Word Search game implementation"
            ],
            links: [
                {
                    label: "GitHub",
                    url: "https://github.com/Josiah4191/portfolio-website-original",
                }
            ],
            lessonsLearned: [
                "This project helped me build a stronger understanding of core front-end web development concepts using HTML, CSS, and JavaScript.",
                "I gained experience organizing larger front-end projects, working with DOM interaction, building responsive layouts, and creating reusable " +
                "UI structures before transitioning into React-based development."
            ]
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
                    label: "GitHub",
                    url: "https://github.com/Josiah4191/squirrel-backend",
                },
                {
                    label: "Live Demo",
                    url: "/squirrels"
                }
            ],
            lessonsLearned: [
                "This project helped me better understand how modern full-stack applications are structured using React and Spring Boot.",
                "I gained experience working with REST APIs, routing, reusable front-end components, PostgreSQL integration, and organizing larger applications across both client and server layers.",
                "The project also improved my understanding of how front-end and back-end systems communicate and work together in a modern web application."
            ]
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
                    label: "GitHub",
                    url: "https://github.com/Josiah4191/squirrel-backend-dotnet",
                }
            ],
            lessonsLearned: [
                "This project helped me better understand how full-stack web applications are structured using ASP.NET MVC Core.",
                "I gained experience working with controllers, routing, CRUD operations, relational databases, sessions, cookies, and connecting back-end logic to rendered pages.",
                "The project also improved my understanding of organizing larger applications into separate layers and components."
            ]
        },
        {
            slug: 'word-search',
            title: "Word Search",
            summary: "A responsive word search game built with JavaScript, HTML, and CSS.",
            fullDescription: "Word Search is a browser-based game built with HTML, CSS, and vanilla JavaScript. The project " +
                "focuses on generating and displaying a word search grid, handling user interaction with letters, and practicing " +
                "DOM manipulation and event handling. The current version is intentionally simple, with future plans to rebuild or " +
                "expand it with React and Canvas-based drawing features.",
            route: "/projects/word-search",
            badges: [
                BADGE_MAP.html,
                BADGE_MAP.css,
                BADGE_MAP.javascript,
            ],
            screenshots: SCREENSHOT_MAP["word-search"],
            features: [
                "Word search grid rendered in the browser",
                "Interactive letter selection using JavaScript events",
                "Word list display for the player",
                "Basic game logic for placing and finding words",
                "Responsive layout and styling with CSS",
                "Planned Canvas upgrade for drawing around selected words"
            ],
            links: [
                {
                    label: "GitHub",
                    url: "https://github.com/Josiah4191/portfolio-website-original/tree/main/src/game",
                }
            ],
            lessonsLearned: [
                "This project helped me practice core JavaScript concepts such as DOM manipulation, event handling, arrays, grid-based layout, and basic game logic.",
                "It also gave me a better understanding of how browser interaction works without relying on a framework.",
                "I plan to revisit this project later to improve the interaction system and add Canvas-based drawing features.",
            ]
        }
        ,
        {
            slug: 'uno',
            title: "UNO",
            summary: "Custom UNO game built using Java with object-oriented design and multiplayer experimentation.",
            fullDescription: "UNO is a Java-based card game project built with JavaFX. The project focuses on implementing core UNO " +
                "gameplay, including players, turns, card rules, drawing cards, discard piles, and game state management. It was designed " +
                "to separate game logic from the user interface while exploring how a larger desktop application can be structured and " +
                "expanded over time.",
            route: "/projects/uno",
            badges: [
                BADGE_MAP.java,
            ],
            screenshots: SCREENSHOT_MAP["uno"],
            features: [
                "Core UNO card and deck system",
                "Turn management and player flow",
                "Draw pile and discard pile handling",
                "Rule validation for playable cards",
                "JavaFX-based user interface",
                "Designed with future multiplayer expansion in mind"
            ],
            links: [
                {
                    label: "GitHub",
                    url: "https://github.com/Josiah4191/java-uno-game",
                }
            ],
            lessonsLearned: [
                "This project helped me better understand object-oriented design, game state management, JavaFX UI structure, and how to organize a larger Java application.",
                "I also gained experience thinking through turn-based logic, card rules, player interactions, and how to separate back-end game logic from the visual interface."
            ]
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
                    label: "GitHub",
                    url: "https://github.com/Josiah4191/birdhouse-backend",
                }
            ],
            lessonsLearned: [
                "This project helped me better understand how modern Java back-end applications are structured using Spring Boot.",
                "I gained experience working with REST APIs, layered architecture, PostgreSQL integration, routing, and organizing larger " +
                "back-end applications into separate responsibilities and components."
            ]
        }
    ]
;