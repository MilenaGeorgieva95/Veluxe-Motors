import { useContext, useEffect, useState } from "react";
import { request } from "../utils/requester";
import { UserContext } from "../components/contexts/UserContext";

export const useLogin = () => {
  const login = async (username, password) => {
    const loginData = await request.post('/login', {
      username,
      password,
    });
    return loginData;
  };

  return {
    login,
  };
};

export const useRegister = () => {
  const register = async (username, email, password) => {
    const registerData = await request.post('/users', {
      username,
      email,
      password,
    });
    return registerData;
  };
  return {
    register,
  };
};

export const useLogout = () => {
  const { user, setUser } = useContext(UserContext);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    if (!user || !user.accessToken) {
      setPending(false);
      return;
    }

    try {
      request.get(`${baseUrl}/logout`, null, user.accessToken);
      setUser("");
      setPending(false);
    } catch (error) {
      console.log(error);
      setPending(false);
    }
  }, [user.accessToken]);
  return { pending, setPending };
};
