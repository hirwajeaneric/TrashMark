import Cookies from "js-cookie";
/**
 * The base URL for the API.
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const AddProductRequest = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/product/add`, {
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

export const updateProductRequest = async (data, id) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/product/update?id=${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${Cookies.get('access-token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
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

export const addProductToCartRequest = async (product) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/product/addtocart?id=${product.id}`, {
        method: 'POST',
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

export const deleteProductRequest = async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/product/delete?id=${id}`, {
        method: 'DELETE',
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

export const getUserProductsRequest = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/product/user`, {
        method: 'GET',
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
};

export const getProductByIdRequest = async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/product/findById?id=${id}`, {
        method: 'GET',
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

export const getAllAvailableProductsRequest = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/product/available`, {
        method: 'GET',
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
};

export const getAllProductsRequest = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/product/list`, {
        method: 'GET',
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
};

export const getBaughtProductsRequest = async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/product/baught`, {
        method: 'GET',
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