import React from 'react';
import {BrowserRouter} from "react-router-dom"
import AnimatedRoutes from './AnimatedRoutes';

export const App = () => {
  return <BrowserRouter>
            <AnimatedRoutes />
         </BrowserRouter>
}