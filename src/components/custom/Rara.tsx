import React from "react";
import Image from "next/image";

interface RaraProps {
  size?: number;
  className?: string;
}

const Rara = ({ size = 48, className }: RaraProps) => {
  return (
    <div className={className}>
      <Image
        src="/rara.jpg"
        alt="Rara"
        width={size}
        height={size}
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default Rara;
