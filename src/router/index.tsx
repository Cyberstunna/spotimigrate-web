import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Welcome from "../pages/Welcome";
import ImportPlaylist from "../pages/ImportPlaylist";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />
    },
    {
        path: "/import",
        element: <ImportPlaylist />
    }
])