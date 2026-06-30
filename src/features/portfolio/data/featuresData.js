import {
    Server,
    Monitor,
    Bot,
    Trophy,
    Layers,
    Network,
    Puzzle,
    MousePointer,
    Grid3X3,
    Gauge,
    Smartphone,
    CheckCircle,
    Blocks,
    Navigation,
    Sparkles,
    FolderOpen,
    Palette,
    Database,
    Route,
    Pencil,
    Layout,
    Cookie,
    FileText,
    FolderTree,
} from "lucide-react";

export const FEATURES_MAP = {
    "uno": [
        {
            title: "Spring Boot Backend",
            description: "REST API powering game actions and state management.",
            icon: Server
        },
        {
            title: "React Frontend",
            description: "Responsive browser-based gameplay built with React.",
            icon: Monitor
        },
        {
            title: "Computer Opponents",
            description: "Computer-controlled players with automated turn logic.",
            icon: Bot
        },
        {
            title: "Complete UNO Rules",
            description: "Supports wilds, skips, reverses, draw cards, and UNO callouts.",
            icon: Trophy
        },
        {
            title: "Clean Architecture",
            description: "Frontend and backend responsibilities remain clearly separated.",
            icon: Layers
        },
        {
            title: "Extensible Foundation",
            description: "Designed to support future features and expansion.",
            icon: Network
        },
    ],
    "word-search": [
        {
            title: "Procedural Generation",
            description: "Creates unique puzzles from categorized word banks.",
            icon: Puzzle
        },
        {
            title: "Interactive Selection",
            description: "Drag across letters to discover hidden words.",
            icon: MousePointer
        },
        {
            title: "Canvas Rendering",
            description: "Custom HTML Canvas system for puzzle visualization.",
            icon: Grid3X3
        },
        {
            title: "Difficulty Levels",
            description: "Multiple difficulty settings with increasing complexity.",
            icon: Gauge
        },
        {
            title: "Responsive Design",
            description: "Optimized for both desktop and mobile devices.",
            icon: Smartphone
        },
        {
            title: "Progress Tracking",
            description: "Highlights discovered words and tracks completion.",
            icon: CheckCircle
        },
        {
            title: "Reusable Architecture",
            description: "Built with reusable React components and UI patterns.",
            icon: Blocks
        }
    ],
    "portfolio": [
        {
            title: "Responsive Design",
            description: "Optimized for desktop, tablet, and mobile devices.",
            icon: Smartphone
        },
        {
            title: "Reusable Components",
            description: "Built with reusable React components and shared UI patterns.",
            icon: Blocks
        },
        {
            title: "Project Navigation",
            description: "Desktop and mobile navigation for browsing projects.",
            icon: Navigation
        },
        {
            title: "Polished Interactions",
            description: "Subtle animations, hover effects, and smooth transitions.",
            icon: Sparkles
        },
        {
            title: "Project Showcases",
            description: "Dedicated project pages with screenshots, links, and details.",
            icon: FolderOpen
        },
        {
            title: "Design System",
            description: "Consistent spacing, colors, typography, and visual styling.",
            icon: Palette
        }
    ],

    "squirrel-csharp": [
        {
            title: "CRUD Operations",
            description: "Create, edit, and delete squirrels and stash locations.",
            icon: Pencil
        },
        {
            title: "SQL Database",
            description: "Stores food supplies and squirrel data in a relational database.",
            icon: Database
        },
        {
            title: "ASP.NET MVC",
            description: "Server-rendered pages built with ASP.NET MVC Core.",
            icon: Layout
        },
        {
            title: "MVC Architecture",
            description: "Uses controllers, routing, and separation of concerns.",
            icon: Layers
        },
        {
            title: "Relational Models",
            description: "Connected database entities with full CRUD functionality.",
            icon: Network
        },
        {
            title: "Sessions & Cookies",
            description: "Explores user tracking with sessions and browser cookies.",
            icon: Cookie
        }
    ],
    "squirrel-java": [
        {
            title: "React Frontend",
            description: "Interactive user interface built with React components.",
            icon: Monitor
        },
        {
            title: "Spring Boot API",
            description: "REST API powering application data and business logic.",
            icon: Server
        },
        {
            title: "PostgreSQL Database",
            description: "Persistent storage for application data and records.",
            icon: Database
        },
        {
            title: "Client-Side Routing",
            description: "Page navigation and routing with React Router.",
            icon: Route
        },
        {
            title: "Reusable Components",
            description: "Data-driven UI built from reusable React components.",
            icon: Blocks
        },
        {
            title: "Full-Stack Development",
            description: "Combines frontend, backend, and database technologies.",
            icon: Network
        }
    ],
    "birdhouse": [
        {
            title: "Spring Boot API",
            description: "REST API built with Spring Boot.",
            icon: Server
        },
        {
            title: "PostgreSQL Database",
            description: "Persistent data storage using PostgreSQL.",
            icon: Database
        },
        {
            title: "Layered Architecture",
            description: "Organized with controller, service, and repository layers.",
            icon: Layers
        },
        {
            title: "Entity Modeling",
            description: "Structured entities and relational database mappings.",
            icon: Network
        },
        {
            title: "API Documentation",
            description: "Interactive API documentation with Swagger/OpenAPI.",
            icon: FileText
        },
        {
            title: "Project Organization",
            description: "Clean backend structure focused on maintainability.",
            icon: FolderTree
        }
    ],
}