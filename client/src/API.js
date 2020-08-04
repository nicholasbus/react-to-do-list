const API_URL = "http://localhost:5000";

export async function listAllItems() {
    const response = await fetch(`${API_URL}/api/items`);
    return response.json();
}

export async function postNewItem(data={}) {
    const response = await fetch(`${API_URL}/api/items`, {
        method: 'POST',
        mode: 'cors',
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            'Content-type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    })
    return response.json();
} 

export async function deleteItem(data={}) {

    console.log("data from the func: " + JSON.stringify(data))

    const response = await fetch(`${API_URL}/api/items`, {
        method: 'DELETE',
        body: JSON.stringify(data)
    })

    return response.json()
}