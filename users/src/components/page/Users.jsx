import { useEffect, useState,React } from "react"
import { data, Routes,Route, Link, NavLink } from "react-router-dom";
import UserItem01 from "./UserItem";
export default function Users(){
    let [user,setUser]=useState(null)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUser(data))
    },[])
    return <>
    <div className=" w-full max-w-[1440px] mx-[auto]">
    <h1 className="text-6xl text-center">Users</h1>
    <ul className="flex flex-col gap-y-[20px] my-0">
        {user?.map((item,ind)=>{
            return(
                <NavLink to={`/admin/users/${item.id}`}>
                    <li className="text-[#FFF] text-2xl cursor-pointer" id={ind}><span>{item.id}.</span> <span>{item.name}</span></li>
                </NavLink>
            )
        })}
    </ul>
    </div>
    </>
}