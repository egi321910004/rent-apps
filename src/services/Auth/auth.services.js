import axios from "axios";

const login = async (username, password) => {
  try {
    const response = await axios.post(
      `https://development-rentapp-8d3349904b3d.herokuapp.com/api/auth/login?username=${username}&password=${password}`
    );

    const { token, role, client_id } = response.data.data;
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("username", client_id);
    localStorage.setItem(
      "recoil-persist",
      JSON.stringify({ authState: { token, client_id, role } })
    );
    return token;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

const register = async (formData) => {
  try {
    const response = await axios.post(
      "https://development-rentapp-8d3349904b3d.herokuapp.com/api/auth/register",
      formData
    );

    if (response.data.resultCode === "200") {
      console.log("Registration successful");
    } else {
      console.error("Registration failed:", response.data.resultMessage);
      throw new Error(response.data.resultMessage);
    }
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export { login, register };
