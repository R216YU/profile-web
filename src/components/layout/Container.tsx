import React from "react";

type ContainerProps = {
  title: string;
  children?: React.ReactNode;
};

const Container = ({ title, children }: ContainerProps) => {
  return (
    <div className="flex flex-1 flex-col gap-16">
      <h2 className="text-2xl font-semibold text-center">{title}</h2>
      {children}
    </div>
  );
};

export default Container;
