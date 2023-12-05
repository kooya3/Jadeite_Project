// Button.tsx
import Image from "next/image";

type ButtonProps = {
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  onClick?: () => void; // Add onClick prop
};

const Button = ({ title, icon, variant, full, onClick }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      onClick={onClick} // Use onClick prop
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
