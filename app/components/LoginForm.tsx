"use client";


import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error === "InvalidCredentialsError") {
        setError("Invalid email or password. Please try again.");
      } else if (res?.error) {
        setError("Something went wrong. Please try again later.");
      } else {
        router.replace("/dashboard"); // Replace with your dashboard route
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-[#e4554f]">
        <h1 className="text-xl font-bold my-4">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={email}
            placeholder="Email"
          />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            placeholder="Password"
          />
          <button className="bg-[#eb7974] text-white font-bold cursor-pointer px-6 py-2">
            Login
          </button>
          <div
            role="alert"
            className={`error-message ${error ? "visible" : "hidden"}`}
          >
            {error}
          </div>
        </form>
      </div>
    </div>
  );
}
