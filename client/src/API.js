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

export async function deleteItem(id) {

    const response = await fetch(`${API_URL}/api/items/${id}`, {
        method: 'DELETE',
    })

    return response.json()
}

export async function editItem(id, data={}) {

    const response = await fetch(`${API_URL}/api/items/edit/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response.json()
}