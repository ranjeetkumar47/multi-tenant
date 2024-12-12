import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tenant Dashboard'
}

const TenantDashboard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Dashboard for Subdomain</h1>
    </div>
  )
}

export default TenantDashboard
