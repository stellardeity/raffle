import React from "react";
import { ReactNode } from "react";

import { AdsEdit } from "@/pages/ads-edit";
import { AdsRead } from "@/pages/ads-read";
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
    path: "/ads/create",
    element: (
      <ProtectedRoute>
        <AdsEdit />
      </ProtectedRoute>
    ),
  },
  {
    path: "/ads/edit/:id",
    element: (
      <ProtectedRoute>
        <AdsEdit />
      </ProtectedRoute>
    ),
  },
  {
    path: "/ads/read/:id",
    element: (
      <ProtectedRoute>
        <AdsRead />
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
