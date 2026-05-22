/* Birdhouse Screenshots */
import diagram from '../assets/screenshots/birdhouse/diagram.png'
import structure from '../assets/screenshots/birdhouse/structure.png'
import swagger from '../assets/screenshots/birdhouse/swagger.png'

/* Portfolio Original Screenshots */
import contact from '../assets/screenshots/portfolio-original/contact.png'
import home from '../assets/screenshots/portfolio-original/home.png'
import labs from '../assets/screenshots/portfolio-original/labs.png'
import news from '../assets/screenshots/portfolio-original/news.png'
import preferences from '../assets/screenshots/portfolio-original/preferences.png'

/* Squirrel C# Screenshots */
import add_items from '../assets/screenshots/squirrel-csharp/add_items.png'
import home_page_csharp from '../assets/screenshots/squirrel-csharp/home_page_csharp.png'
import items_csharp from '../assets/screenshots/squirrel-csharp/items_csharp.png'
import squirrels_csharp from '../assets/screenshots/squirrel-csharp/squirrels_csharp.png'
import stashes_csharp from '../assets/screenshots/squirrel-csharp/stashes_csharp.png'

/* Squirrel Java Screenshots */
import add_items_java from '../assets/screenshots/squirrel-java/add_items_java.png'
import edit_items_java from '../assets/screenshots/squirrel-java/edit_items_java.png'
import edit_stash_java from '../assets/screenshots/squirrel-java/edit_stash_java.png'
import manage_items_java from '../assets/screenshots/squirrel-java/manage_items_java.png'
import manage_stashes_java from '../assets/screenshots/squirrel-java/manage_stashes_java.png'
import relocate_stash from '../assets/screenshots/squirrel-java/relocate_stash.png'
import rename_squirrel from '../assets/screenshots/squirrel-java/rename_squirrel.png'
import select_items from '../assets/screenshots/squirrel-java/select_items.png'
import edit_squirrels from '../assets/screenshots/squirrel-java/edit_squirrels.png'
import manage_squirrels from '../assets/screenshots/squirrel-java/manage_squirrels.png'

/* Uno Screenshots */
import login from '../assets/screenshots/uno/login.png'
import menu from '../assets/screenshots/uno/menu.png'
import game_play from '../assets/screenshots/uno/game_play.png'
import settings_selection from '../assets/screenshots/uno/settings_selection.png'
import game_selection from '../assets/screenshots/uno/game_selection.png'

/* Word Search Screenshots */
import word_search1 from '../assets/screenshots/word-search/word_search1.png'
import word_search2 from '../assets/screenshots/word-search/word_search2.png'

/* Portfolio Screenshots */
import dropdown from '../assets/screenshots/portfolio/dropdown.png'
import hero_section from '../assets/screenshots/portfolio/hero_section.png'
import mobile_dropdown from '../assets/screenshots/portfolio/mobile_dropdown.png'
import mobile_view from '../assets/screenshots/portfolio/mobile_view.png'
import stack_section from '../assets/screenshots/portfolio/stack_section.png'
import portfolio_page from '../assets/screenshots/portfolio/portfolio_page.png'

export const SCREENSHOT_MAP = {
    "portfolio": [
        {
            id: "hero-section",
            image: hero_section,
            alt: "Portfolio hero section screenshot",
            description: "Landing section of the portfolio website featuring the introduction, navigation, and primary action links."
        },
        {
            id: "stack-section",
            image: stack_section,
            alt: "Portfolio stack section screenshot",
            description: "Technology stack section displaying the tools, languages, and frameworks used throughout projects."
        },
        {
            id: "portfolio-page",
            image: portfolio_page,
            alt: "Portfolio project page screenshot",
            description: "Dedicated project detail page displaying screenshots, technologies, features, and project information."

        },
        {
            id: "dropdown",
            image: dropdown,
            alt: "Desktop navigation dropdown screenshot",
            description: "Desktop navigation menu with expandable project links and responsive dropdown interaction."
        },
        {
            id: "mobile-view",
            image: mobile_view,
            alt: "Mobile portfolio layout screenshot",
            description: "Responsive mobile layout of the portfolio website optimized for smaller screen sizes."
        },
        {
            id: "mobile-dropdown",
            image: mobile_dropdown,
            alt: "Mobile navigation dropdown screenshot",
            description: "Mobile navigation panel with expandable project navigation and responsive menu behavior."
        }
    ],
    "birdhouse": [
        {
            id: "diagram",
            image: diagram,
            alt: "Database Diagram screenshot",
            description: "Database schema and table relationships used in the Birdhouse project."
        },
        {
            id: "structure",
            image: structure,
            alt: "Project Structure screenshot",
            description: "Organized Spring Boot project structure using controllers, services, repositories, and entities."
        },
        {
            id: "swagger",
            image: swagger,
            alt: "Swagger API screenshot",
            description: "Swagger/OpenAPI documentation showing available REST API endpoints."
        }
    ],

    "portfolio-original": [
        {
            id: "contact",
            image: contact,
            alt: "Portfolio contact page screenshot",
            description: "Contact section from the original portfolio website."
        },
        {
            id: "home",
            image: home,
            alt: "Portfolio home page screenshot",
            description: "Main landing page of the original portfolio project."
        },
        {
            id: "labs",
            image: labs,
            alt: "Portfolio labs page screenshot",
            description: "Labs section used for experimenting with smaller JavaScript features and projects."
        },
        {
            id: "news",
            image: news,
            alt: "Portfolio news page screenshot",
            description: "News/blog style section used for project updates and announcements."
        },
        {
            id: "preferences",
            image: preferences,
            alt: "Portfolio preferences page screenshot",
            description: "Preferences panel allowing customization and interaction with the site."
        }
    ],

    "squirrel-csharp": [
        {
            id: "add-items",
            image: add_items,
            alt: "Add items page screenshot",
            description: "Page used to add new food items and supplies into the database."
        },
        {
            id: "home-page-csharp",
            image: home_page_csharp,
            alt: "Squirrel Tracker C# home page screenshot",
            description: "Main dashboard and navigation area for the Squirrel Tracker application."
        },
        {
            id: "items-csharp",
            image: items_csharp,
            alt: "Items management page screenshot",
            description: "Items management interface displaying stored food supplies and inventory."
        },
        {
            id: "squirrels-csharp",
            image: squirrels_csharp,
            alt: "Squirrels page screenshot",
            description: "Squirrel management page displaying tracked squirrels and related information."
        },
        {
            id: "stashes-csharp",
            image: stashes_csharp,
            alt: "Stashes page screenshot",
            description: "Stash management interface used to organize squirrel food storage locations."
        }
    ],

    "squirrel-java": [
        {
            id: "add_items_java",
            image: add_items_java,
            alt: "Java add item screenshot",
            description: "Add items to a stash using the React front-end connected to the Spring Boot back-end."
        },
        {
            id: "edit_items_java",
            image: edit_items_java,
            alt: "Java edit item screenshot",
            description: "Edit item names and quantities directly from the item management interface."
        },
        {
            id: "edit_stash_java",
            image: edit_stash_java,
            alt: "Java edit stash screenshot",
            description: "Rename and update stash information through the interactive stash management system."
        },
        {
            id: "manage_items_java",
            image: manage_items_java,
            alt: "Java manage items screenshot",
            description: "Manage stash items through a responsive React interface backed by Spring Boot APIs."
        },
        {
            id: "manage_stashes_java",
            image: manage_stashes_java,
            alt: "Java manage stashes screenshot",
            description: "View and organize squirrel stashes using the full-stack Java application."
        },
        {
            id: "relocate_stash",
            image: relocate_stash,
            alt: "Relocate stash screenshot",
            description: "Move stashes between locations using the stash relocation feature."
        },
        {
            id: "rename_squirrel",
            image: rename_squirrel,
            alt: "Rename squirrel screenshot",
            description: "Update squirrel names directly through the interactive management interface."
        },
        {
            id: "select_items",
            image: select_items,
            alt: "Select items screenshot",
            description: "Select and organize available items before adding them to a stash."
        },
        {
            id: "edit_squirrels",
            image: edit_squirrels,
            alt: "Edit squirrels screenshot",
            description: "Rename and manage squirrel data through the responsive full-stack management interface."
        },
        {
            id: "manage_squirrels",
            image: manage_squirrels,
            alt: "Manage squirrels screenshot",
            description: "View and organize squirrels using the React front-end connected to the Spring Boot back-end."
        }

    ],
    "uno": [
        {
            id: "login",
            image: login,
            alt: "UNO login screen screenshot",
            description: "Login screen for the UNO project."
        },
        {
            id: "game_selection",
            image: game_selection,
            alt: "UNO game selection screenshot",
            description: "Selection screen for configuring the game."
        },
        {
            id: "settings-selection",
            image: settings_selection,
            alt: "UNO settings selection screenshot",
            description: "Initial player setup and customization interface for configuring the game."
        },
        {
            id: "game-play",
            image: game_play,
            alt: "UNO gameplay screenshot",
            description: "Gameplay screen showing turn flow, player interaction, and card management."
        },
        {
            id: "menu",
            image: menu,
            alt: "UNO menu screenshot",
            description: "Main menu interface for navigating game options and settings."
        },
    ],

    "word-search": [
        {
            id: "word-search-1",
            image: word_search1,
            alt: "Word Search gameplay screenshot",
            description: "Gameplay view showing the generated word search puzzle and word list."
        },
        {
            id: "word-search-2",
            image: word_search2,
            alt: "Word Search game interface screenshot",
            description: "Close-up screenshot showing the category selection interface for the Word Search game."
        }
    ],
}