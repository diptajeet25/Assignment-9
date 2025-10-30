import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Page/Root';

const router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>
    }
])

export default router;