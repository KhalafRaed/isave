import { useUserContext } from "@/lib/User";
import Router from "next/router";
import { useEffect } from "react";

export default function useAuthorized() {
  const { isAuthorized } = useUserContext();
  useEffect(() => {
    if (!isAuthorized) {
      Router.push("/auth");
    }
  }, [isAuthorized]);
}
