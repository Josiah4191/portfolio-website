/* Squirrel Java Screenshots */
import edit_stash_java from '../assets/screenshots/squirrel/edit-stash.png'
import manage_items_java from '../assets/screenshots/squirrel/manage-items.png'
import edit_squirrels from '../assets/screenshots/squirrel/edit-squirrels.png'
import manage_squirrels from '../assets/screenshots/squirrel/manage-squirrels.png'

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

export const SCREENSHOT_MAP = {
    "word-search": [
        {
            id: "word-search-board",
            image: word_search_board,
            alt: "Word Search game board with a letter grid and word list.",
            title: "Game Board",
            description: "Find hidden words by dragging across the grid.",
        },
        {
            id: "word-search-categories",
            image: word_search_categories,
            alt: "Word Search category selection screen showing available puzzle themes.",
            title: "Puzzle Categories",
            description: "Choose from different puzzle categories.",
        },
        {
            id: "word-search-highlight",
            image: word_search_highlight,
            alt: "Word Search game with a found word highlighted in the puzzle grid.",
            title: "Word Highlighting",
            description: "Found words are highlighted as you play.",
        }
    ],
    "portfolio": [
        {
            id: "hero-section",
            image: hero_section,
            alt: "Portfolio homepage hero section with an introduction and featured content.",
            title: "Hero Section",
            description: "A simple introduction to who I am and what I build.",
        },
        {
            id: "mobile-view",
            image: mobile_view,
            alt: "Portfolio website displayed in a mobile layout.",
            title: "Responsive Layout",
            description: "The portfolio adapts to different screen sizes.",
        },
        {
            id: "project-section",
            image: project_section,
            alt: "Portfolio project page showing project details and screenshots.",
            title: "Project Pages",
            description: "Each project has its own page with screenshots and details.",
        }
    ],
    "squirrel": [
        {
            id: "manage-squirrels",
            image: manage_squirrels,
            alt: "Squirrel management page displaying existing squirrel records.",
            title: "Manage Squirrels",
            description: "View, add, edit, and remove squirrels.",
        },
        {
            id: "edit-stash-java",
            image: edit_stash_java,
            alt: "Form for editing a squirrel's stash.",
            title: "Edit Stash",
            description: "Update a squirrel's stored food supplies.",
        },
        {
            id: "manage-items-java",
            image: manage_items_java,
            alt: "Items management page for the Java version of the application.",
            title: "Manage Items",
            description: "Add, edit, and remove available food items.",
        },
        {
            id: "edit-squirrels",
            image: edit_squirrels,
            alt: "Form for editing squirrel information.",
            title: "Edit Squirrel",
            description: "Update a squirrel's information.",
        }
    ],
    "uno": [
        {
            id: "start-game",
            image: start_game,
            alt: "UNO game setup screen for selecting players and starting a new game.",
            title: "Game Setup",
            description: "Choose the number of computer opponents and start a new game.",
        },
        {
            id: "game-board",
            image: game_board,
            alt: "UNO game board showing the player's hand, draw pile, discard pile, and opponents.",
            title: "Game Board",
            description: "Play against computer opponents using the full game interface.",
        },
        {
            id: "rules",
            image: rules,
            alt: "UNO rules screen explaining gameplay and controls.",
            title: "Rules",
            description: "View the rules at any time during the game.",
        }
    ],
}