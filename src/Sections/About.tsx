import Image from "next/image";

//Container
import Container from "@/Components/Common/Container";

const About = () => {
    return (
        <section id="about">
            <Container className="grid grid-cols-2 md:grid-cols-2 xxs:grid-cols-1 gap-10 items-start py-8">
                <div className="mt-4">
                    <h1 className="text-2xl font-bold">Welcome to Particle Educational Institute!</h1>
                    <p className="font-medium opacity-60 text-base mt-3">Prosperous days with the arrival of a new dawn, All You need is tireless work and endless patience. Is there any alternative to working hard for a better future? No, it&apos;s not! Only through hard work you can reach your desired golden peak. Also need proper guidance. PEI (academic care) is extending that hand to you. Your future pioneer comrades-in-arms. Particle extend to you a cordial invitation and best wishes.</p>
                    <p className="font-medium opacity-60 text-base mt-8">Our experienced faculty and staff work hard to create a supportive learning environment that encourages intellectual curiosity, creativity, and personal growth. Our curriculum is designed to provide a well-rounded education that prepares students for success in school, college and beyond.</p>
                    <h1 className="text-2xl font-bold mt-4">Education more than just grades</h1>
                    <p className="font-medium opacity-60 text-base mt-3">We strive to create a community where all students feel valued, </p>
                    <ol className="mt-5">
                        <li className="mb-2"><p className="font-medium opacity-60 text-base">1. Experienced faculty and staff</p></li>
                        <li className="mb-2"><p className="font-medium opacity-60 text-base">2. A supportive learning environment that encourages intellectual curiosity, creativity, and personal growth.</p></li>
                        <li className="mb-2"><p className="font-medium opacity-60 text-base">3. A well-rounded curriculum that prepares students for success in school, college and beyond.</p></li>
                    </ol>
                    <p className="font-medium opacity-60 text-base mt-5">Thank you for considering Particle for your education. We invite you to explore our website to learn more.</p>
                </div>
                <div>
                    <Image src="/images/School.jpeg" alt="School Image" width={600} height={600} className="rounded-lg w-full" />
                </div>
            </Container>
        </section>
    );
};

export default About;