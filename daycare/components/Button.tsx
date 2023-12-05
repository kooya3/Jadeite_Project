// Button.tsx
import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  href?: string; // Add href prop for client-side navigation
};

const Button = ({ title, icon, variant, full, href }: ButtonProps) => {
  return (
    <Link href={href || '/'} passHref>
      <a className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
      </a>
    </Link>
  );
};

export default Button;
