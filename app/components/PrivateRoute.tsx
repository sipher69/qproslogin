"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

  return isAuthenticated ? <>{children}</> : <Link href="/">Login</Link>;
};

export default PrivateRoute;
