"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserInfo from "./UserInfo";
import LoginForm from "./LoginForm";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkIfUserIsLoggedIn = (): boolean => {
      const token = localStorage.getItem("authToken");

      return !!token;
    };
    const isAuthenticated = checkIfUserIsLoggedIn();
    setIsAuthenticated(isAuthenticated);

    if (!isAuthenticated) {
      router.push("/");
    }
  }, [router]);

  return isAuthenticated ? <UserInfo /> : <LoginForm />;
};

export default PrivateRoute;
