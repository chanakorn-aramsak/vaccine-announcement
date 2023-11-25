const getUserProfile = async (token:string) => {
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/me`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Get User Profile Failed');
      }
  
      return await response.json();
    } catch (error) {
      console.error('An error occurred while fetching user profile:', error);
      throw error;
    }
  };
  
  export default getUserProfile;
  