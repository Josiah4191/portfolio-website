/* Birdhouse Screenshots */
import diagram from '../assets/screenshots/birdhouse/diagram.png'
import structure from '../assets/screenshots/birdhouse/structure.png'
import swagger from '../assets/screenshots/birdhouse/swagger.png'

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


export const SCREENSHOT_MAP = {
    "word-search": [
        {
            id: "word-search-board",
            image: word_search_board,
            alt: "Word Search game board",
        },
        {
            id: "word-search-categories",
            image: word_search_categories,
            alt: "Word Search puzzle categories",
        },
        {
            id: "word-search-highlight",
            image: word_search_highlight,
            alt: "Word Search found word highlighting",
        }
    ],
    "portfolio": [
        {
            id: "hero-section",
            image: hero_section,
            alt: "Portfolio hero section screenshot",
        },
        {
            id: "mobile-view",
            image: mobile_view,
            alt: "Mobile portfolio layout screenshot",
        },
        {
            id: "project-section",
            image: project_section,
            alt: "Project page screenshot",
        }
    ],
    "birdhouse": [
        {
            id: "diagram",
            image: diagram,
            alt: "Database Diagram screenshot",
        },
        {
            id: "structure",
            image: structure,
            alt: "Project Structure screenshot",
        },
        {
            id: "swagger",
            image: swagger,
            alt: "Swagger API screenshot",
        }
    ],

    "squirrel-csharp": [
        {
            id: "add-items",
            image: add_items,
            alt: "Add items page screenshot",
        },
        {
            id: "items-csharp",
            image: items_csharp,
            alt: "Items management page screenshot",
        },
        {
            id: "squirrels-csharp",
            image: squirrels_csharp,
            alt: "Squirrels page screenshot",
        },
    ],

    "squirrel-java": [
        {
            id: "manage-squirrels",
            image: manage_squirrels,
            alt: "Manage squirrels screenshot",
        },
        {
            id: "edit-stash-java",
            image: edit_stash_java,
            alt: "Java edit stash screenshot",
        },
        {
            id: "manage-items-java",
            image: manage_items_java,
            alt: "Java manage items screenshot",
        },
        {
            id: "edit-squirrels",
            image: edit_squirrels,
            alt: "Edit squirrels screenshot",
        },

    ],
    "uno": [
        {
            id: "start-game",
            image: start_game,
            alt: "Start game screenshot"
        },
        {
            id: "game-board",
            image: game_board,
            alt: "Game board screenshot"
        },
        {
            id: "rules",
            image: rules,
            alt: "Rules screenshot"
        },
    ],
}