import { Checkout } from "@/components/checkout"
import React from 'react'
import { useSearchParams } from "next/navigation"
import type { NextRequest, NextResponse } from 'next/server';

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}){
  const { plan } = searchParams
  console.log("AAA: ", plan)
  return (
    <div>
      <Checkout plan={ Array.isArray(plan) ? plan[0] : plan || "" }/>
    </div>
  )
}

