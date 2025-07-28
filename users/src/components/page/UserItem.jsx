import { useState,useEffect,React } from "react"
import { useParams } from "react-router-dom"
export default function UserItem01(){
    let params=useParams()
    let [user,setUser]=useState(null)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${params.UserId}`)
        .then((res)=>res.json())
        .then((data)=>setUser(data))
    },[])
    return <>
        <div className="w-full max-w-[1440px] mx-[auto] grid text-4xl text-white gap-y-[10px]">
            <ul>
                <li><span className="mr-[15px]">Id </span><span>{user?.id}</span></li>;
                <li><span className="mr-[15px]">Name </span><span>{user?.name}</span></li>;
                <li><span className="mr-[15px]">Username </span><span>{user?.username}</span></li>;
                <li><span className="mr-[15px]">Email </span><span>{user?.email}</span></li>;
                <li><span className="mr-[15px]">Phone </span><span>{user?.phone}</span></li>
            </ul>
        </div>
    </>
}