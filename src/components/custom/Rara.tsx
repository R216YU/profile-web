interface RaraProps {
  size?: number;
  className?: string;
}

const Rara = ({ size = 48, className }: RaraProps) => {
  return (
    <div className={className}>
      <img
        src="/profile/rara.jpg"
        alt="Rara"
        width={size}
        height={size}
        className="rounded object-cover"
      />
    </div>
  );
};

export default Rara;
