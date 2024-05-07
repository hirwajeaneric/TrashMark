import Cookies from "js-cookie";
/**
 * The base URL for the API.
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const AddProductRequest = async (data) => {

    const formData = new FormData();

    for (const key in data) {
        formData.append(key, data[key]);
    }

    // If imageFiles is an array of files
    if (data.imageFiles) {
        for (const file of data.imageFiles) {
            formData.append('imageFiles', file);
        }
    }

    const response = await fetch(`${API_BASE_URL}/api/v1/product/add`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${Cookies.get('access-token')}`,
        },
        body: formData,
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

    console.log(data.imageFiles);

    const formData = new FormData();

    for (const key in data) {
        formData.append(key, data[key]);
    }

    // If imageFiles is an array of files
    if (data.imageFiles) {
        for (const file of data.imageFiles) {
            formData.append('imageFiles', file);
        }
    }

    const response = await fetch(`${API_BASE_URL}/api/v1/product/update?id=${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${Cookies.get('access-token')}`,
        },
        body: formData,
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
        method: 'GET'
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
        method: 'GET'
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