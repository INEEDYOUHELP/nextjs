"use client"
import { useState } from "react"
import  Link  from "next/link"
import { usePathname } from "next/navigation"
import path from "path"
import { link } from "fs"

    
export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    const [count, setCount] = useState(0)
    const pathname = usePathname()
    console.log(pathname)

    const linkData =[
        {
          name:"About",path:"/dashboard/about"
        },
        {
          name:"Settings",path:"/dashboard/settings"
        }
    ]

    return (
        
      <div className=" border-2 border-dash border-black p4">
        {/* Include shared UI here e.g. a header or sidebar */}
        <div className=" flex gap-4 font-bold text-lg mb-4 "> 
          {
            linkData.map(link =>(
              <Link key={link.name} href={link.path} className={pathname === link.path ? "text-blue-500" : ""}>{link.name}</Link>
            ))
          }
            
        </div>
        <h2>dashboard layout {count}</h2>
        <button className="rounded-md bg-black text-white p-2 my-4" onClick={() => setCount(count + 1)}>increcement</button>
        {children}
      </div>
    )
  }