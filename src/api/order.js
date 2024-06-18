import Cookies from "js-cookie";

/**
* The base URL for the API.
*/
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
* Adds a new order to the system.
*
* @param {Object} data - The order data to be added.
* @returns {Promise<Object>} - The response data from the API.
* @throws {Error} - If the API request fails.
*/
export const AddOrderRequest = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/order/add`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${Cookies.get('access-token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
        if (responseData.errors) {
            throw new Error(responseData.errors);
        }
        if (responseData.message) {
            throw new Error(responseData.message);
        }
    }

    return responseData;
};

/**
* Updates the information for an existing order.
*
* @param {Object} data - The updated order data.
* @param {string} id - The ID of the order to be updated.
* @returns {Promise<Object>} - The response data from the API.
* @throws {Error} - If the API request fails.
*/
export const updateOrderInfoRequest = async (data, id) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/order/update?id=${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${Cookies.get('access-token')}`,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
        if (responseData.errors) {
            throw new Error(responseData.errors);
        }
        if (responseData.message) {
            throw new Error(responseData.message);
        }
    }

    return responseData;
};

/**
* Updates the cart for an existing order.
*
* @param {Object} data - The updated cart data.
* @param {string} id - The ID of the order to be updated.
* @returns {Promise<Object>} - The response data from the API.
* @throws {Error} - If the API request fails.
*/
export const updateCartRequest = async (data, id) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/order/updateCart?id=${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${Cookies.get('access-token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
        if (responseData.errors) {
            throw new Error(responseData.errors);
        }
        if (responseData.message) {
            throw new Error(responseData.message);
        }
    }

    return responseData;
};


export const updateCartStatusRequest = async (data, id) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/order/updateCartStatus?id=${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${Cookies.get('access-token')}`,
        }
    });

    const responseData = await response.json();

    if (!response.ok) {
        if (responseData.errors) {
            throw new Error(responseData.errors);
        }
        if (responseData.message) {
            throw new Error(responseData.message);
        }
    }

    return responseData;
};

/**
* Retrieves an order by its ID.
*
* @param {string} id - The ID of the order to be retrieved.
* @returns {Promise<Object>} - The response data from the API.
* @throws {Error} - If the API request fails.
*/
export const getOrderByIdRequest = async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/order/findById?id=${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${Cookies.get('access-token')}`,
        }
    });

    const responseData = await response.json();

    if (response.status === 401) {
        window.location.replace('/sign-in');
    }

    if (!response.ok) {
        if (responseData.errors) {
            throw new Error(responseData.errors);
        }
        if (responseData.message) {
            throw new Error(responseData.message);
        }
    }

    return responseData;
}

export const deleteOrderRequest = async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/order/delete?id=${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${Cookies.get('access-token')}`,
        },
    });

    const responseData = await response.json();

    if (!response.ok) {
        if (responseData.errors) {
            throw new Error(responseData.errors);
        }
        if (responseData.message) {
            throw new Error(responseData.message);
        }
    }

    return responseData;
}

/**
* Retrieves all orders for the current client.
*
* @returns {Promise<Object>} - The response data from the API.
* @throws {Error} - If the API request fails.
*/
export const getClientOrderRequest = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/order/client`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${Cookies.get('access-token')}`,
        },
    });

    const responseData = await response.json();
    if (response.status === 401) {
        window.location.replace('/sign-in');
    }

    if (!response.ok) {
        if (responseData.errors) {
            throw new Error(responseData.errors);
        }
        if (responseData.message) {
            throw new Error(responseData.message);
        }
    }

    return responseData;
};

export const getAllClientOrdersRequest = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/order/purchases`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${Cookies.get('access-token')}`,
        },
    });

    const responseData = await response.json();
    if (response.status === 401) {
        window.location.replace('/sign-in');
    }

    if (!response.ok) {
        if (responseData.errors) {
            throw new Error(responseData.errors);
        }
        if (responseData.message) {
            throw new Error(responseData.message);
        }
    }

    return responseData;
};

/**
* Retrieves all orders for the current seller.
*
* @returns {Promise<Object>} - The response data from the API.
* @throws {Error} - If the API request fails.
*/
export const getAllSellerOrdersRequest = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/order/seller`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${Cookies.get('access-token')}`,
        },
    });

    const responseData = await response.json();
    if (response.status === 401) {
        window.location.replace('/sign-in');
    }
    
    if (!response.ok) {
        if (responseData.errors) {
            throw new Error(responseData.errors);
        }
        if (responseData.message) {
            throw new Error(responseData.message);
        }
    }

    return responseData;
}