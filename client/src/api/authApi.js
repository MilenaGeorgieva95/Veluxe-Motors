import { useContext, useEffect, useState } from "react";
import { request } from "../utils/requester";
import { UserContext } from "../components/contexts/UserContext";

const endpoints = {
  register: "/users",
  login: "/login",
  logout: "/logout",
  sessionByToken: (token) => `/sessions?where={"sessionToken":"${token}"}`,
  sessionById: (id) => `/sessions/${id}`,
};

export const useLogin = () => {
  const login = async (username, password) => {
    const loginData = await request.post(endpoints.login, {
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
    const registerData = await request.post(endpoints.register, {
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
  const sessionToken = user.token;
  const [pending, setPending] = useState(true);
  useEffect(() => {
    if (!user || !user.token) {
      setPending(false);
      return;
    }

    try {
      (async () => {
        const sessions = await request.get(
          endpoints.sessionByToken(sessionToken),
          null,
          user.token
        );
        const [currentSession] = sessions.results;
        await request.del(endpoints.sessionById(currentSession.objectId),          null,
          user.token);
      })();
      setUser("");
      setPending(false);
    } catch (error) {
      console.log(error);
      setPending(false);
    }
  }, [user.token]);
  return { pending, setPending };
};
