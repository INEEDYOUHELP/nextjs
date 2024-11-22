"use client"
import { useState } from "react"
import  Link  from "next/link"

    
export default function DashboardTemplate({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    const [count, setCount] = useState(0)
    return (
        
      <div className=" border-2 border-dash border-black p4">
        {/* Include shared UI here e.g. a header or sidebar */}
      
        <h2>dashboard template {count}</h2>
        <button className="rounded-md bg-black text-white p-2 my-4" onClick={() => setCount(count + 1)}>increcement</button>
        {children}
      </div>
    )
  }