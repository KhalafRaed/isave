import { MenuProps } from "antd";
import { auth } from "@/lib/firebase";

export const navbarItems: MenuProps["items"] = [
  {
    label: (
      <a
        onClick={async () => {
          console.log("signing out");
          await auth.signOut();
        }}
      >
        Sign out
      </a>
    ),
    key: "0",
  },
];
