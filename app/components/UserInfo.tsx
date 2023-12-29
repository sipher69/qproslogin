"use client";

import Link from "next/link";

const UserInfo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Panel!</h1>
        <p className="text-gray-600 mb-6">Youre logged in. Enjoy your stay!</p>
        <Link
          href={"/"}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none"
          onClick={()=> localStorage.clear()}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
