import { ReactNode } from "react";

export interface HeaderProps {
  children: ReactNode,
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="page-header" style={{fontWeight: "bold"}}>
      {children}
    </div>
  );
};

export default Header;
