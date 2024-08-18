import React, { FunctionComponent, PropsWithChildren } from "react";
import Image from "next/image";
import { User } from "@/utils/common/person";

interface UserCardProps {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export const UserCard: FunctionComponent<PropsWithChildren<UserCardProps>> = ({
  user,
  isLoading = false,
  error,
}) => {
  if (error) {
    return (
      <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-32 bg-red-100" />
        <div className="p-5 text-center">
          <svg
            className="w-16 h-16 text-red-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Error Loading User Data
          </h2>
          <p className="text-gray-600">
            {error || "An unexpected error occurred."}
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className=" relative w-80 bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
        <div className="h-32 bg-gray-300" />
        <div className=" px-5 pb-5">
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-32 bg-gray-300 rounded-full border-4 border-white" />
          </div>
          <div className="mt-16 text-center">
            <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-2" />
            <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mb-4" />
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="h-5 bg-gray-300 rounded w-16 mb-1" />
                <div className="h-4 bg-gray-300 rounded w-20" />
              </div>
              <div className="text-center">
                <div className="h-5 bg-gray-300 rounded w-16 mb-1" />
                <div className="h-4 bg-gray-300 rounded w-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="relative w-80 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div
        className=" h-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${user.backgroundImageUrl})` }}
      />
      <div className=" px-5 pb-5">
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <Image
            src={user.profilePictureUrl}
            alt={user.name}
            width={128}
            height={128}
            className="w-32 h-32 rounded-full border-4 border-white object-cover"
          />
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-600 mb-4">{user.title}</p>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-800">
                {user.followers.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-800">
                {user.following.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
