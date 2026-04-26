"use client"
import React, { useEffect } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return <div>dashboard</div>
}

export default Dashboard