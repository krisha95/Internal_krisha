import VerticalLayout from "@/layouts/VerticalLayout";
import React from "react";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <VerticalLayout>{children}</VerticalLayout>;
};

export default AdminLayout;
