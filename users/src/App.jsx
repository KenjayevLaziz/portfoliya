import Header from "./components/Header/Header"
import React from "react"
import Footer from "./components/Footer/Footer"
import Users from "./components/page/Users"
import Home from "./components/page/Home"
import Contact from "./components/page/Contact"
import Block from "./components/page/Block"
import { Route,Routes } from "react-router-dom"
import About from "./components/page/About"
import UserItem from "./components/page/UserItem"
export default function Layout(){
    return <>
        <div className="flex flex-col justify-between h-[95vh]">
            <Header />
                <Routes>
                    <Route path={'/admin'}>
                        <Route path="users"element={ <Users /> }/>
                        <Route path="home"element={ <Home /> }/>
                        <Route path="about"element={ <About /> }/>
                        <Route path="contact"element={ <Contact /> }/>
                        <Route path="users/:UserId"element={ <UserItem /> }/>
                        <Route path="block"element={ <Block /> }/>
                    </Route>
                </Routes>
            <Footer />
        </div>
    </>
}