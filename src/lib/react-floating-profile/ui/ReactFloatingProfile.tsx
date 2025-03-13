"use client";

import "./style.css";
import { MainOption } from "@types";
import { AuthProvider, ProfileProvider } from "@context";
import FloatingProfileContainer from "./floating-profile-container";
// 에러 발견
export default function ReactFloatingProfile({
  userName,
  pinnedRepoArr = [],
  location = "bottom-right",
  accessToken = "",
}: MainOption) {
  return (
    <ProfileProvider>
      <AuthProvider accessToken={accessToken}>
        <FloatingProfileContainer userName={userName} pinnedRepoArr={pinnedRepoArr} location={location} />
      </AuthProvider>
    </ProfileProvider>
  );
}
