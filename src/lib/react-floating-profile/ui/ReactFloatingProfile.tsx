"use client";

import "./style.css";
import FloatingProfileContainer from "./floating-profile-container";
import { MainOption } from "../types";
import { AuthProvider, ProfileProvider } from "../context";

// 1. 테마 (다크모드, 라이트모드 등등)
export default function ReactFloatingProfile({
  userName,
  pinnedRepoArr = [],
  location = "bottom-right",
  accessToken = "",
}: MainOption) {
  return (
    <ProfileProvider>
      <AuthProvider>
        <FloatingProfileContainer
          accessToken={accessToken}
          userName={userName}
          pinnedRepoArr={pinnedRepoArr}
          location={location}
        />
      </AuthProvider>
    </ProfileProvider>
  );
}
