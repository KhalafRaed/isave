import { useUserContext } from "../lib/User";
import { useNavigate } from "react-router-dom";

export default function useAuthorized() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  if (!user) {
    navigate("/auth");
  }
}
