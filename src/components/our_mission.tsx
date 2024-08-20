import Image from 'next/image'
import React from 'react'

const Our_mission = () => {
    return (
        <div id='our_mission'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-8">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-black mb-4">
                            Mission
                        </h1>
                        <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
                            Our Mission and Vision
                        </h2>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>Our mission is to provide unparalleled service and support to the
                                aviation industry, ensuring the safety, reliability, and efficiency of
                                aircraft operations. Our vision is to be the preferred global partner
                                for aircraft parts and maintenance services, recognized for our
                                excellence, innovation, and commitment to customer satisfaction.

                            </li>
                        </ul>
                        <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
                            Looking Ahead
                        </h2>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>
                                As we look to the future, M Capital LLC remains committed to our
                                core values of excellence, integrity, customer focus, innovation,
                                and safety. We continue to expand our capabilities, forge new
                                partnerships, and invest in the latest technologies to better serve
                                our clients. Our goal is to keep aircraft in the air, safely and
                                efficiently, for years to come.
                            </li>
                        </ul>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-8">
                        <Image src={"/assest/our_mission.jpg"} alt='' width={500} height={500} className='rounded-xl'/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Our_mission