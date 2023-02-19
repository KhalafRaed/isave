import styles from "@/styles/auth.module.css";
import { SignInButton } from "@/components/SignInButton";
import { useUserContext } from "@/lib/User";
import Router from "next/router";

const AuthPage = () => {
  const { isAuthorized } = useUserContext();

  if (isAuthorized) {
    Router.push("/");
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.authBox}>
        <h1 className={styles.authTitle}>ISave</h1>
        <SignInButton />
      </div>
    </div>
  );
};

export default AuthPage;
