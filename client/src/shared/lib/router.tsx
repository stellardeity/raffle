import React from "react";
import { ReactNode } from "react";

import { AdsEdit } from "@/pages/ads-edit";
import { AdsRead } from "@/pages/ads-read";
import { Feed } from "@/pages/feed";
import { Profile } from "@/pages/profile";
import { Redirect } from "@/pages/redirect";
import { Settings } from "@/pages/settings";

interface Route {
  path: string;
  element: ReactNode;
}

export const routes: Route[] = [
  {
    path: "/feed",
    element: <Feed />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/ads/create",
    element: <AdsEdit />,
  },
  {
    path: "/ads/edit/:id",
    element: <AdsEdit />,
  },
  {
    path: "/ads/read/:id",
    element: <AdsRead />,
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
