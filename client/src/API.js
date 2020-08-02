const API_URL = "http://localhost:5000";

export async function listAllItems() {
    const response = await fetch(`${API_URL}/api/items`);
    return response.json();
}