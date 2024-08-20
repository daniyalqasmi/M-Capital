import Image from 'next/image'
import React from 'react'

const Philosophy = () => {
    return (
        <div id='philosophy'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-8 ">
                        <Image src={"/assest/Philosophy.jpg"} alt="image" width={500} height={500} className='rounded-xl' />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-black mb-6 ">
                            Philosophy
                        </h1>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>M Capital LLC was founded in 1998 in Texas, USA, by a group of
                                At M Capital LLC, our philosophy is centered around the belief that the
                                aviation industry thrives on precision, trust, and continuous
                                improvement. We understand the critical role that our services play in
                                ensuring the safety and efficiency of aircraft operations. Therefore, our
                                approach is built on several core principles:

                            </li>
                        </ul>
                        <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
                            Customer-Centric Approach:
                        </h2>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>
                                We believe that our customers are our most
                                valuable assets. Our success is directly tied to their satisfaction, which is
                                why we go above and beyond to meet their needs. We listen actively,
                                respond promptly, and provide personalized solutions that address
                                specific requirements.
                            </li>
                        </ul>
                        <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
                            Commitment to Quality:
                        </h2>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>
                                Quality is non-negotiable at M Capital LLC. From
                                the sourcing of spare parts to the execution of repair and maintenance
                                services, every step is governed by stringent quality control measures. We
                                ensure that all parts and services meet or exceed industry standards and
                                regulatory requirements.
                            </li>
                        </ul>
                        <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
                            Innovation and Adaptability:
                        </h2>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>
                                The aviation industry is dynamic, with new
                                challenges and advancements emerging regularly. We foster a culture of
                                innovation and adaptability, encouraging our team to embrace new
                                technologies and methodologies. This proactive approach enables us to
                                stay ahead of industry trends and continuously enhance our service
                                offerings.
                            </li>
                        </ul>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Philosophy