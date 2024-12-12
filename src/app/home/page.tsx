import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Homepage = () => {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Welcome to Example.com</h1>
      <p className="text-lg mt-4">
        This is the main content for the primary domain.
      </p>
      <div className="flex flex-col gap-5 w-80">
        <div>
          <div>Add domain name</div>
          <Input />
        </div>
        <Button>Add New</Button>
      </div>
    </div>
  );
};

export default Homepage;
