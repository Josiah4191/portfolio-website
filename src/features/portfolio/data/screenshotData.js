/* Squirrel C# Screenshots */
import add_items from '../assets/screenshots/squirrel-csharp/add-items-csharp.png'
import items_csharp from '../assets/screenshots/squirrel-csharp/items-csharp.png'
import squirrels_csharp from '../assets/screenshots/squirrel-csharp/squirrels-csharp.png'

/* Squirrel Java Screenshots */
import edit_stash_java from '../assets/screenshots/squirrel-java/edit-stash-java.png'
import manage_items_java from '../assets/screenshots/squirrel-java/manage-items-java.png'
import edit_squirrels from '../assets/screenshots/squirrel-java/edit-squirrels-java.png'
import manage_squirrels from '../assets/screenshots/squirrel-java/manage-squirrels-java.png'

/* Portfolio Screenshots */
import hero_section from '../assets/screenshots/portfolio/hero-section.png'
import mobile_view from '../assets/screenshots/portfolio/mobile-view.png'
import project_section from '../assets/screenshots/portfolio/project-section.png'

/* Uno Screenshots */
import start_game from '../assets/screenshots/uno/start-game.png'
import game_board from '../assets/screenshots/uno/game-board.png'
import rules from '../assets/screenshots/uno/rules.png'

/* Word Search Screenshots */
import word_search_board from '../assets/screenshots/word-search/word-search-board.png'
import word_search_categories from '../assets/screenshots/word-search/word-search-categories.png'
import word_search_highlight from '../assets/screenshots/word-search/word-search-highlight.png'

import {
    Gamepad2,
    BookOpen,
    Squirrel,
    Database,
    Smartphone,
    UserPen,
    Sparkles,
    Highlighter,
    Library,
    LayoutGrid,
    Server,
    PlusCircle,
    Package,
    Grid3x3,
    Pencil,
    Settings2, FolderTree
} from "lucide-react";

export const SCREENSHOT_MAP = {
    "word-search": [
        {
            id: "word-search-board",
            image: word_search_board,
            alt: "Word Search game board with a letter grid and word list.",
            title: "Game Board",
            description: "Search the grid and highlight hidden words.",
            icon: Grid3x3,
        },
        {
            id: "word-search-categories",
            image: word_search_categories,
            alt: "Word Search category selection screen showing available puzzle themes.",
            title: "Puzzle Categories",
            description: "Browse themed word lists before starting.",
            icon: Library,
        },
        {
            id: "word-search-highlight",
            image: word_search_highlight,
            alt: "Word Search game with a found word highlighted in the puzzle grid.",
            title: "Word Highlighting",
            description: "Found words are highlighted directly in the grid.",
            icon: Highlighter,
        }
    ],
    "portfolio": [
        {
            id: "hero-section",
            image: hero_section,
            alt: "Portfolio homepage hero section with an introduction and featured content.",
            title: "Hero Section",
            description: "Clean introduction with a clear call to action.",
            icon: Sparkles,
        },
        {
            id: "mobile-view",
            image: mobile_view,
            alt: "Portfolio website displayed in a mobile layout.",
            title: "Responsive Layout",
            description: "Optimized experience across mobile devices.",
            icon: Smartphone,
        },
        {
            id: "project-section",
            image: project_section,
            alt: "Portfolio project page showing project details and screenshots.",
            title: "Project Showcase",
            description: "Detailed pages highlighting features and design.",
            icon: LayoutGrid,
        }
    ],
    "squirrel-csharp": [
        {
            id: "add-items",
            image: add_items,
            alt: "Form for adding a new item to the squirrel inventory.",
            title: "Add Items",
            description: "Create new stash items with validation.",
            icon: PlusCircle,
        },
        {
            id: "items-csharp",
            image: items_csharp,
            alt: "Items management page listing stored inventory items.",
            title: "Item Management",
            description: "Browse, edit, and remove stored items.",
            icon: Package,
        },
        {
            id: "squirrels-csharp",
            image: squirrels_csharp,
            alt: "Squirrel management page listing squirrel records.",
            title: "Squirrel Management",
            description: "Manage squirrels and their stored supplies.",
            icon: Squirrel,
        }
    ],
    "squirrel-java": [
        {
            id: "manage-squirrels",
            image: manage_squirrels,
            alt: "Squirrel management page displaying existing squirrel records.",
            title: "Manage Squirrels",
            description: "View and organize squirrel records.",
            icon: Squirrel,
        },
        {
            id: "edit-stash-java",
            image: edit_stash_java,
            alt: "Form for editing a squirrel's stash.",
            title: "Edit Stash",
            description: "Update stored items and quantities.",
            icon: Pencil,
        },
        {
            id: "manage-items-java",
            image: manage_items_java,
            alt: "Items management page for the Java version of the application.",
            title: "Manage Items",
            description: "Maintain the application's item catalog.",
            icon: Package,
        },
        {
            id: "edit-squirrels",
            image: edit_squirrels,
            alt: "Form for editing squirrel information.",
            title: "Edit Squirrels",
            description: "Modify squirrel information and details.",
            icon: UserPen,
        }
    ],
    "uno": [
        {
            id: "start-game",
            image: start_game,
            alt: "UNO game setup screen for selecting players and starting a new game.",
            title: "Game Setup",
            description: "Choose players and start a new match.",
            icon: Settings2,
        },
        {
            id: "game-board",
            image: game_board,
            alt: "UNO game board showing the player's hand, draw pile, discard pile, and opponents.",
            title: "Game Board",
            description: "Play cards with smooth animations and effects.",
            icon: Gamepad2,
        },
        {
            id: "rules",
            image: rules,
            alt: "UNO rules screen explaining gameplay and controls.",
            title: "Rules",
            description: "Quick reference for gameplay and controls.",
            icon: BookOpen,
        }
    ],
}