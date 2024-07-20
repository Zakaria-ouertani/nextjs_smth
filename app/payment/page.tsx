"use client"
import { Checkout } from "@/components/checkout"
import React from 'react'
import { useSearchParams } from "next/navigation"

export default async function Page(){
  const plan = useSearchParams().get("plan")
  return (
    <div>
      <Checkout plan={plan}/>
    </div>
  )
}

