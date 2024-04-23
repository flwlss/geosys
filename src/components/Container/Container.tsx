import { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import "./Container.scss";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  );
};

export default Container;
