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

