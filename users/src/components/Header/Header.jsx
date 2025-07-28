import { Link } from "react-router-dom"
import React from "react"
export default function Header(){
    return <>
        <header className="flex w-full max-w-[1440px] mx-[auto] my-0 px-[25px] py-[45px] bg-teal-400 justify-between items-center">
            <h1 className="font-extrabold text-5xl ">LOGO</h1>
            <ul className="flex w-full max-w-[800px] justify-between items-center font-extrabold text-4xl text-[#a14848]">
                <Link to={'/admin/home'}>
                    <li className="cursor-pointer">Home</li>
                </Link>
                <Link to={'/admin/contact'}>
                    <li className="cursor-pointer">Contact</li>
                </Link>
                <Link to={'/admin/about'}>
                    <li className="cursor-pointer">About</li>
                </Link>
                <Link to={'/admin/block'}>
                    <li className="cursor-pointer">Blog</li>
                </Link>
                <Link to={"/admin/users"}>
                    <li className="cursor-pointer">Users</li>
                </Link>
            </ul>
        </header>
    </>
}