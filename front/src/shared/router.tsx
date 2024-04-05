import React from "react";
import { ReactNode } from "react";

import { Feed } from "@/pages/feed";

interface Route {
  path: string;
  element: ReactNode;
}

export const routes: Route[] = [
  {
    path: "/",
    element: <Feed />,
  },
];
