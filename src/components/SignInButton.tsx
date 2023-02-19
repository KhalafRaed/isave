import { signInWithPopup } from "@firebase/auth";
import { auth, provider } from "@/lib/firebase";
import { message } from "antd";

export function SignInButton() {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (e) {
      message.error("Failed to login with Google, please try again");
    }
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img
        alt="test"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
      />
      Sign in with Google
    </button>
  );
}
