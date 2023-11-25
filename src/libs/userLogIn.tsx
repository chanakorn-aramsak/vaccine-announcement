const userLogIn = async (userEmail:string, userPassword:string) => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return await response.json();
  } catch (error) {
    console.error("An error occurred during login:", error);
    throw error;
  }
};
export default userLogIn;