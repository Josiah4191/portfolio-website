/*
    PreferencesManager is responsible for managing site appearance settings, 
    such as theme, colors, and font, and storing them using localStorage.

    Features:
    - Stores and applies multiple theme presets
    - Saves and loads individual color and font preferences
    - Updates UI elements like color pickers and font titles
    - Resets preferences to default settings
*/

export default class PreferencesManager {
    // Initialize available themes and store default color values
    constructor() {
        this.themes = {
            default: {
                '--bg-color': '#f7f5ee',
                '--ui-text-color': '#fbc093',
                '--text-color': '#1e293b',
                '--highlight-color': '#f7f5ee',
                '--header-footer-color': '#6a6a6a',
                '--font-family': 'Quicksand, sans-serif'
            },

            sunset: {
                '--bg-color': '#fff3e0',
                '--ui-text-color': '#6d4c41',
                '--text-color': '#4e342e',
                '--highlight-color': '#ffe0b2',
                '--header-footer-color': '#ff7043 ',
                '--font-family': 'Quicksand, sans-serif'
            },

            midnight: {
                '--bg-color': '#383838',
                '--text-color': '#e0e0e0',
                '--ui-text-color': '#ffffff',
                '--highlight-color': '#444444',
                '--header-footer-color': '#262626',
                '--font-family': 'Quicksand, sans-serif'
            },

            ocean: {
                '--bg-color': '#e0f7fa',
                '--text-color': '#138fad',
                '--ui-text-color': '#0988C8',
                '--highlight-color': '#eef7fa',
                '--header-footer-color': '#b2ebf2',
                '--font-family': 'Quicksand, sans-serif'
            }
        }

        // Get saved theme or use default
        this.theme = localStorage.getItem("theme") || "default";
        localStorage.setItem("theme", this.theme);

        // Immediately apply the theme
        this.setTheme(this.theme);

    }

    // Apply a theme by name and save the preference
    setTheme(themeName) {
        let theme = this.themes[themeName];

        // If theme doesn't exist, exit early
        if (!theme) return;

        // Apply each CSS variable from the theme
        for (let [varName, value] of Object.entries(theme)) {
            document.documentElement.style.setProperty(varName, value);
            this.setColor(varName, value);
        }

        // Save selected theme and update UI
        this.savePreference("theme", themeName);
        this.updateColorPickers();
        this.updateFontTitle();
    }

    // Set and store a font style variable
    setFontStyle(variable, font) {
        document.documentElement.style.setProperty(variable, font);
        this.savePreference(variable, font);
    }

    // Set and store a color variable
    setColor(variable, color) {
        document.documentElement.style.setProperty(variable, color);
        this.savePreference(variable, color);
    }

    // Save a preference to localStorage
    savePreference(variable, value) {
        localStorage.setItem(variable, value);
    }

    // Load saved preferences and apply them to the page
    loadPreferences() {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);

            // Apply only CSS variable entries that start with --
            if (key.startsWith('--')) {
                let value = localStorage.getItem(key);
                document.documentElement.style.setProperty(key, value);
            }
        }

        // Update UI elements to reflect loaded preferences
        this.updateFontTitle();
        this.updateRadioSelection();
        this.updateColorPickers();
    }

    // Select the correct theme radio button based on saved theme
    updateRadioSelection() {
        let savedTheme = localStorage.getItem("theme") || "default";
        document.querySelectorAll("input[name='presets']").forEach(radio => {
            radio.checked = radio.value === savedTheme;
        });
    }

    // Display the currently selected font in the font dropdown title
    updateFontTitle() {
        let currentFont = localStorage.getItem('--font-family');
        let fontName = this.getFontName(currentFont);
        document.querySelector(".current-font").textContent = fontName + " ▼";
    }

    // Update all color pickers to match current CSS variable values
    updateColorPickers() {
        document.querySelectorAll("input[type='color']").forEach(picker => {
            let variable = picker.dataset.variable;
            let color = getComputedStyle(document.documentElement)
                .getPropertyValue(variable)
                .trim();
            picker.value = color;
        });
    }

    // Extract a font name from a CSS font-family string
    getFontName(value) {
        if (!value) {
            value = 'Quicksand, sans-serif';
        }

        let match = value.match(/'([^']+)'|([^,]+)/);
        return match ? (match[1] || match[2]).trim() : 'Quicksand';
    };

    // Reset all preferences to default theme and values
    resetPreferences() {
        this.setTheme("default");
        this.updateFontTitle();
        this.updateRadioSelection();
        this.updateColorPickers();
    }

}