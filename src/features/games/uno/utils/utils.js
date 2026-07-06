export function registerRef(refs, id, element) {
    if (element) {
        refs.current[id] = element;
    }
}

export const CARD_EFFECT_TEXT = {
    DRAW_TWO: "DRAW TWO",
    WILD_DRAW_FOUR: "DRAW FOUR",
    WILD: "WILD",
    SKIP: "SKIP",
    REVERSE: "REVERSE",
}

export function buildActionMessage(lastAction) {
    if (!lastAction) return null;

    switch (lastAction.type) {
        case "CARD_PLAYED": {
            const message = CARD_EFFECT_TEXT[lastAction.playedCard?.value];
            const isWild = message === "WILD" || message === "DRAW FOUR";
            return {
                message,
                color: isWild ? lastAction.resultingColor : "",
            };
        }
        default:
            return null;
    }
}

const colorOrder = {
    WILD: 0,
    RED: 1,
    BLUE: 2,
    GREEN: 3,
    YELLOW: 4,
}

const valueOrder = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    SKIP: 10,
    REVERSE: 11,
    DRAW_TWO: 12,
}

export function sortCards(cards) {
    const sortedCards = [...cards]

    return sortedCards.sort((a, b) => {

        if (a.color !== b.color) {
            return colorOrder[a.color] - colorOrder[b.color];
        }

        return valueOrder[a.value] - valueOrder[b.value];
    });
}