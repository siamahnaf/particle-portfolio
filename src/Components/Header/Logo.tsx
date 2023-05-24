import { Link } from "react-scroll/modules";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="basis-[9%] lg:basis-[9%] smd:basis-[14%] lsm:basis-[17%] msm:basis-[18%] sm:basis-[19%] xxs:basis-[20%]">
            <Link to="header" smooth={true} duration={400} spy={true} className="cursor-pointer block" offset={-65}>
                <Image src="/images/logos.png" alt="Logo" width={300} height={200} className="w-full block" />
            </Link>
        </div>
    );
};

export default Logo;