export async function loadSquirrels() {
    try {
        const response = await fetch("http://localhost:8080/squirrels");

        if (!response.ok) {
            throw new Error("Failed to load squirrels.");
        }

        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error("Error loading squirrels:", error);
        throw error;
    }
}

export async function loadStashes({params}) {
    const squirrelId = params.id;

    try {
        const stashesResponse = await fetch(`http://localhost:8080/squirrels/${squirrelId}/stashes`);
        const squirrelResponse = await fetch(`http://localhost:8080/squirrels/${squirrelId}`);

        if (!stashesResponse.ok) {
            throw new Error("Failed to load stashes.");
        }

        if (!squirrelResponse.ok) {
            throw new Error("Failed to load squirrel.");
        }

        const stashes = await stashesResponse.json();
        const squirrel = await squirrelResponse.json();

        return {
            stashes: stashes.content,
            squirrel: squirrel
        }
    } catch (error) {
        console.error("Error loading stashes:", error);
        throw error;
    }
}

export async function loadStashItems({params}) {
    const stashId = params.id;
    try {
        const response = await fetch(`http://localhost:8080/stashes/${stashId}/items`);

        if (!response.ok) {
            throw new Error("Failed to load stash items.");
        }

        return await response.json();
    } catch (error) {
        console.error("Error loading stash items:", error);
        throw error;
    }
}