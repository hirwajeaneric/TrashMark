/**
 * The base URL for the API.
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const SignUpRequest = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/signup`, {
        method: 'POST',
        headers: {
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

export const SignInRequest = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/signin`, {
        method: 'POST',
        headers: {
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

export const ValidateOTPRequest = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/verify`, {
        method: 'POST',
        headers: {
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

export const ForgotPasswordRequest = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/forgotPassword`, {
        method: 'POST',
        headers: {
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

export const ResetPasswordRequest = async (data, token) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/resetPassword`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
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
