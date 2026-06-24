import {UNO_API_BASE_URL} from "../../../../config/api.js"

export async function createGame(playerName, computerPlayerCount) {
    const response = await fetch(`${UNO_API_BASE_URL}/games`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            playerName: playerName,
            computerPlayerCount: computerPlayerCount,
        })
    });

    return handleUnoResponse(response, "Failed to create game");
}

export async function playCard(gameId, playerId, cardId, chosenColor = null) {
    const response = await fetch(`${UNO_API_BASE_URL}/games/${gameId}/play-card`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            playerId: playerId,
            cardId: cardId,
            chosenColor: chosenColor,
        })
    });

    return handleUnoResponse(response, "Failed to play card");
}

export async function drawCard(gameId) {
    const response = await fetch(`${UNO_API_BASE_URL}/games/${gameId}/draw-card`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

    return handleUnoResponse(response, "Failed to draw card");
}

export async function passTurn(gameId) {
    const response = await fetch(`${UNO_API_BASE_URL}/games/${gameId}/pass-turn`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }

        });

    return handleUnoResponse(response, "Failed to pass turn");
}

export async function playBotTurn(gameId) {
    const response = await fetch(`${UNO_API_BASE_URL}/games/${gameId}/play-bot-turn`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return handleUnoResponse(response, "Failed to play bot turn");
}

export async function chooseWildColor(gameId, playerId, cardId, chosenColor) {
    const response = await fetch(`${UNO_API_BASE_URL}/games/${gameId}/choose-wild-color`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            playerId: playerId,
            cardId: cardId,
            chosenColor: chosenColor,
        })
    });

    return handleUnoResponse(response, "Failed to choose wild color");
}

export async function callUno(gameId, playerId) {
    const response = await fetch(`${UNO_API_BASE_URL}/games/${gameId}/call-uno`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(playerId)
    })

    return handleUnoResponse(response, "Failed to call uno");
}

export async function callOutUno(gameId, playerId) {
    const response = await fetch(`${UNO_API_BASE_URL}/games/${gameId}/call-out-uno`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(playerId)
    })

    return handleUnoResponse(response, "Failed to call out uno");
}

// TODO: Show a friendly expired-session message for 404 game responses.
async function handleUnoResponse(response, fallbackMessage) {
    if (!response.ok) {
        let message = fallbackMessage;

        try {
            const error = await response.json();
            message = error.message ?? fallbackMessage;
        } catch {
            // Ignore JSON parsing error
        }

        const apiError = new Error(message);
        apiError.status = response.status;
        throw apiError;
    }
    return response.json();
}