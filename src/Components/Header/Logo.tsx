import { Link } from "react-scroll/modules";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="basis-[10%] lg:basis-[10%] smd:basis-[15%] lsm:basis-[20%] msm:basis-[24%] sm:basis-[27%] xxs:basis-[30%]">
            <Link to="header" smooth={true} duration={400} spy={true} className="cursor-pointer block" offset={-65}>
                <Image src="/images/logos.png" alt="Logo" width={300} height={200} className="w-full block" />
            </Link>
        </div>
    );
};

export default Logo;