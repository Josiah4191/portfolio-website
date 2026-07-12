import {
    Server,
    Monitor,
    Bot,
    Puzzle,
    MousePointer,
    Smartphone,
    CheckCircle,
    Navigation,
    Sparkles,
    FolderOpen,
    Palette,
    Pencil, Cookie, MapPin, Paintbrush,
    ClipboardCheck,
    Sprout,
} from "lucide-react";

export const FEATURES_MAP = {
    "uno": [
        {
            title: "Computer Opponents",
            description: "Play against computer-controlled opponents.",
            icon: Bot
        },
        {
            title: "Complete UNO Rules",
            description: "Includes wild cards, skips, reverses, draw cards, and UNO callouts.",
            icon: ClipboardCheck
        },
        {
            title: "Responsive Design",
            description: "Works well on desktop and mobile devices.",
            icon: Smartphone
        },
        {
            title: "Game State",
            description: "Keeps track of turns, cards, and the current game.",
            icon: Server
        },
        {
            title: "Original Design",
            description: "A custom interface designed specifically for this project.",
            icon: Palette
        },
        {
            title: "Built to Grow",
            description: "Designed to make it easier to add new features later.",
            icon: Sprout
        },
    ],
    "word-search": [
        {
            title: "Puzzle Generation",
            description: "Generates a new puzzle every time you play.",
            icon: Puzzle
        },
        {
            title: "Drag Selection",
            description: "Drag across letters to find hidden words.",
            icon: MousePointer
        },
        {
            title: "Canvas Rendering",
            description: "Draws the game board using the HTML Canvas API.",
            icon: Paintbrush
        },
        {
            title: "Responsive Design",
            description: "Works well on desktop and mobile devices.",
            icon: Smartphone
        },
        {
            title: "Progress Tracking",
            description: "Keeps track of the words you've found.",
            icon: CheckCircle
        },
        {
            title: "Original Design",
            description: "A custom interface designed specifically for this project.",
            icon: Palette
        }
    ],
    "portfolio": [
        {
            title: "Responsive Design",
            description: "Works well on desktop, tablet, and mobile devices.",
            icon: Smartphone
        },
        {
            title: "Project Pages",
            description: "Each project has its own page with screenshots, links, and details.",
            icon: FolderOpen
        },
        {
            title: "Project Navigation",
            description: "Makes it easy to browse projects and pages.",
            icon: Navigation
        },
        {
            title: "Thoughtful Details",
            description: "Includes subtle animations, hover effects, and smooth transitions.",
            icon: Sparkles
        },
        {
            title: "Original Design",
            description: "A custom interface designed specifically for this project.",
            icon: Palette
        },
        {
            title: "Interactive Demos",
            description: "Play projects like UNO and Word Search directly in the browser.",
            icon: Monitor
        }
    ],
    "squirrel": [
        {
            title: "Squirrels",
            description: "Add, edit, and remove squirrels.",
            icon: Pencil
        },
        {
            title: "Stash Locations",
            description: "Manage stash locations.",
            icon: MapPin
        },
        {
            title: "Food Supplies",
            description: "Keep track of stored food supplies.",
            icon: Cookie
        },
        {
            title: "Page Navigation",
            description: "Move between different areas of the application.",
            icon: Navigation
        },
        {
            title: "Responsive Design",
            description: "Works well on desktop and mobile devices.",
            icon: Smartphone
        },
        {
            title: "Original Design",
            description: "A custom interface designed specifically for this project.",
            icon: Palette
        }
    ],
}