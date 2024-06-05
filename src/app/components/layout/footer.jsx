"use client"

import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    
    <footer className="bg-gray-100 py-6 md:py-8 lg:py-10 xl:py-12 dark:bg-gray-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:px-6 lg:px-8 xl:px-10 md:flex-row">
          <div className="text-sm text-gray-500 dark:text-gray-400">&copy; 2024 Blog Title. All rights reserved.</div>
          <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            
          <div className="text-sm text-gray-500 dark:text-gray-400">&copy; Also if you want to call: <br/>8-777-777-77-75</div> 
            
          </nav>
        </div>
      </footer>

  )
}