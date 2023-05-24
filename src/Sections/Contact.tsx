import { Icon } from "@iconify/react";
import Link from "next/link";

//Container
import Container from "@/Components/Common/Container";

//Data
import ContactData from "@/Data/Contact.data";

const Contact = () => {
    return (
        <section id="contact">
            <Container className="py-8 grid grid-cols-3 md:grid-cols-3 xxs:grid-cols-1 gap-4 bg-white">
                {ContactData.map((item, i) => (
                    <div className="px-10 py-8 text-center" key={i}>
                        <div className="w-14 h-14 bg-main rounded-full flex justify-center items-center mx-auto text-white">
                            <Icon icon={item.icon} className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 mt-4">{item.title}</h3>
                        <p className="mb-2 opacity-70">{item.description}</p>
                        <Link href={item.link} className="text-main block font-medium w-[70%] mx-auto">{item.contact}</Link>
                        {item.contact2 &&
                            <Link href={item.link2} className="text-main block font-medium w-[70%] mx-auto">{item.contact2}</Link>
                        }
                    </div>
                ))}
            </Container>
        </section>
    );
};

export default Contact;