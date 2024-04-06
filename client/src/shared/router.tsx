import React from "react";
import { ReactNode } from "react";

import { Feed } from "@/pages/feed";

import { ProtectedRoute } from "../entities/auth/protected-route";

interface Route {
  path: string;
  element: ReactNode;
}

export const routes: Route[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Feed />
      </ProtectedRoute>
    ),
  },
];
