import React from "react";
import Form from "@/components/Form";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  let profile = null;
  if (session) {
    profile = await getUserProfile(session.user.token);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
          {session ? (
            <>
              <h2 className="text-2xl font-bold mb-4">User Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold">Name:</p>
                  <p>{profile.data.name}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Email:</p>
                  <p>{profile.data.email}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Tel.:</p>
                  <p>{profile.data.tel}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Member Since:</p>
                  <p>{profile.data.createdAt.toString()}</p>
                </div>
              </div>
            </>
          ) : null}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Booking Information</h2>
          <Form />
        </div>
      </div>
    </div>
  );
}
