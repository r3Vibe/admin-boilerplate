import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  return <div>{children}</div>;
};

export default Layout;
