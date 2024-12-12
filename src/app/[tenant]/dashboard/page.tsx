interface PageProps {
  params: { tenant: string }
}

const TenantDashboard = ({ params }: PageProps) => {
  const { tenant } = params

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Dashboard for {tenant}</h1>
    </div>
  )
}

export default TenantDashboard
