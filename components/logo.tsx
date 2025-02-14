import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/assets/logo.png"} width={120} height={50} alt="siprochim" />
    </Link>
  );
};

export default Logo;
