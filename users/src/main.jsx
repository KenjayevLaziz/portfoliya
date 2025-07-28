import { createRoot } from 'react-dom/client'
import Layout from './App.jsx'
import "./index.css"
import React from "react"
import {BrowserRouter} from "react-router-dom"
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
)
