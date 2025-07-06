export const login = async (userData) => {
    console.log(userData)
  try {
    const response = await fetch(`/osbiz-backend-orionsolwings/api/v1/clients/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
   
    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (err) {
    // Enhance the error message if it's a network error
    if (err instanceof TypeError && err.message === "Failed to fetch") {
      throw new Error("Network error. Please check your connection.");
    }
    throw err;
  }
};

export const signup = async (userData) => {
    console.log(userData)
  try {
    const response = await fetch(`/osbiz-backend-orionsolwings/api/v1/clients/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
   
    if (!response.ok) {
      throw new Error(data.message || "Signup failed");
    }

    return data;
  } catch (err) {
    // Enhance the error message if it's a network error
    if (err instanceof TypeError && err.message === "Failed to fetch") {
      throw new Error("Network error. Please check your connection.");
    }
    throw err;
  }
};