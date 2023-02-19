import { SignInButton } from "../components/SignInButton";
import { useUserContext } from "../lib/User";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import { useEffect } from "react";

const AuthPage = () => {
  const { isAuthorized } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized) {
      navigate("/home");
    } else {
      navigate("/auth");
    }
  }, [isAuthorized]);

  return (
    <div className="authPage">
      <div className="authBox">
        <h1 className="authTitle">ISave</h1>
        <SignInButton />
      </div>
    </div>
  );
};

export default AuthPage;
