import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return (
    <div>
      <div>Admin sidebar</div>
      <div>{children}</div>
    </div>
  );
}
