import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tenant Landing Page",
};

interface Props {
  params: { tenant: string };
}

const TenantLandingPage = ({ params }: Props) => {
  const { tenant } = params;

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold">Welcome to {tenant}</h1>
      <p className="text-lg mt-4">This is the landing page for {tenant}.</p>
    </div>
  );
};

export default TenantLandingPage;
