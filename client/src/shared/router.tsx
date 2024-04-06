import React from "react";
import { ReactNode } from "react";

import { Feed } from "@/pages/feed";
import { Profile } from "@/pages/profile";
import { Redirect } from "@/pages/redirect";

import { ProtectedRoute } from "../entities/auth/protected-route";

interface Route {
  path: string;
  element: ReactNode;
}

export const routes: Route[] = [
  {
    path: "/feed",
    element: (
      <ProtectedRoute>
        <Feed />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Redirect />,
  },
  {
    path: "/",
    element: <Redirect />,
  },
];
