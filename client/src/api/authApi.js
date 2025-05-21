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
    try {
      const loginData = await request.post(endpoints.login, {
        username,
        password,
      });
      localStorage.setItem("auth", {
        username,
        userId: loginData?.objectId,
        token: loginData?.sessionToken,
      });
      return loginData;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    login,
  };
};

export const useRegister = () => {
  const register = async (username, email, password) => {
    try {
      const registerData = await request.post(endpoints.register, {
        username,
        email,
        password,
      });
      localStorage.setItem("auth", {
        username,
        userId: registerData?.objectId,
        token: registerData?.sessionToken,
      });
      return registerData;
    } catch (error) {
      console.log(error);
    }
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
    const logout = async () => {
      if (!user || !user.token) {
        setPending(false);
        return;
      }

      try {
        const sessions = await request.get(
          endpoints.sessionByToken(sessionToken),
          null,
          user.token
        );
        const [currentSession] = sessions.results;
        if (currentSession?.objectId) {
          await request.del(
            endpoints.sessionById(currentSession.objectId),
            null,
            user.token
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        setUser(null);
        localStorage.removeItem("auth");
        setPending(false);
      }
    };
    logout();
  }, [user?.token]);
  return { pending, setPending };
};
