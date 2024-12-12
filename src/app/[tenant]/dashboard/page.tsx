'use client'

import { supabase } from '@/utils/supabaseClient'
import { useEffect, useState } from 'react'

interface PageProps {
  params: { tenant: string }
}

const TenantDashboard = ({ params }: PageProps) => {
  const { tenant } = params
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser()

      if (error) {
        console.error('User fetch error:', error.message)
      } else {
        setUser(data.user)
      }
    }

    fetchUser()
  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Dashboard for {tenant}</h1>
      {user ? <p className="text-lg mt-4">Welcome, {user.email}!</p> : <p className="text-lg mt-4">Please log in to view your dashboard.</p>}
    </div>
  )
}

export default TenantDashboard
