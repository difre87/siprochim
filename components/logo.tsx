import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  isPage?: boolean;
}
const Logo = ({ isPage }: LogoProps) => {
  return (
    <Link href={"/"}>
      <Image
        src={isPage ? "/assets/logo-white.png" : "/assets/logo.png"}
        width={120}
        height={50}
        alt="siprochim"
      />
    </Link>
  );
};

export default Logo;
