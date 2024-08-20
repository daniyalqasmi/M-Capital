import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="ml-4 mr-4">
            <footer className="text-myred body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="scroll-m-20 text-xl font-semibold  tracking-tight text-myorange mb-3">
                                QUICK LINKS
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"/home"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Home</Link>
                                </li>
                                <li>
                                    <Link href={"/company"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Company</Link>
                                </li>
                                <li>
                                    <Link href={"/services"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Services</Link>
                                </li>
                                <li>
                                    <Link href={"/contact"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Contact</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
                            <h2 className="scroll-m-20 text-xl font-semibold  tracking-tight text-myorange mb-3">
                                Page Links
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"#our_story"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Our Story</Link>
                                </li>
                                <li>
                                    <Link href={"#our_mission"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Our Mission and Vision</Link>
                                </li>
                                <li>
                                    <Link href={"#philosophy"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Philosophy</Link>
                                </li>

                                <li>
                                    <Link href={"#our_products"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Our Products</Link>
                                </li>

                                <li>
                                    <Link href={"#our_services"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Our Services</Link>
                                </li>
                                <li>
                                    <Link href={"#aspirations"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Aspirations</Link>
                                </li>
                                <li>
                                    <Link href={"#customer_support"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Customer Support</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
                            <h2 className="scroll-m-20 text-xl font-bold  tracking-tight text-myorange mb-3">
                                CONTACT US
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"/"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-bold  tracking-tight">CALL US</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-myblue hover:text-myorange scroll-m-20 text-sm font-normal  tracking-tight"><span className="capitalize font-medium mr-4 text-myred">telephone:- </span>+1 (281) 701 3321</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-bold  tracking-tight">Address</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-myblue hover:text-myorange scroll-m-20 text-sm font-normal  tracking-tight">12501 REED ROAD,
                                    SUGAR LAND, TX 77478</Link>
                                </li>


                                
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <Link href={"/home"} className="flex title-font font-medium items-center md:justify-start justify-center text-myorange ">
                                <Image src={'/assest/footer-logo.png'} alt="logo" width={200} height={200} />

                            </Link>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <Link href={"/home"} className="flex title-font font-medium items-center md:justify-start justify-center text-myorange">
                            <Image src={'/assest/footer-logo.png'} alt="logo" width={150} height={150} />

                        </Link>
                        <p className="text-sm text-myblue sm:ml-6 sm:mt-0 mt-4">
                            © 2024 M-Capital | Powered by<span className="ml-3 text-sm text-myorange">M-Capital</span>
                        </p>
                    </div>
                </div>
            </footer >

        </div >
    )
}