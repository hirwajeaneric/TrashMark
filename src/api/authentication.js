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

    if (!response.ok) {
        throw new Error("Failed to sign in");
    }

    return response.json();
};

export const ValidateOTPRequest = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/verify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to validate OTP");
    }

    return response.json();
};

export const ForgotPasswordRequest = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/forgotPassword`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Forgot password request failed");
    }

    return response.json();
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

    if (!response.ok) {
        throw new Error("Failed to reset your password");
    }

    return response.json();
};
