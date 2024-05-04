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
            'Content-Type': 'application/json',
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

