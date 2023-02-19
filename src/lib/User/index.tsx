import { createContext, useContext } from "react";
import { User } from "firebase/auth";

interface UserContextType {
  isAuthorized: boolean;
  user?: User | null | undefined;
}

export const UserContext = createContext<UserContextType>({
  isAuthorized: false,
});
export const useUserContext = () => {
  const { user, isAuthorized } = useContext(UserContext);

  return {
    user,
    isAuthorized,
  };
};
