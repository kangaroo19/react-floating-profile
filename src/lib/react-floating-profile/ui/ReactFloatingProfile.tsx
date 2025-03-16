"use client";

import "./style.css";
import FloatingProfileContainer from "./floating-profile-container";
import { AuthProvider, ProfileProvider } from "@context";
import { MainOption } from "../types";
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
