import Image from 'next/image'
import React from 'react'

const Our_services = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-8 ">
                        <Image src={"/assest/services.jpg"} alt="image" width={500} height={500} className='rounded-xl' />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-black mb-6 ">
                            Our Services
                        </h1>


                        
                        <h2 className='list-disc scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
                        Repair and Maintenance Services
                        </h2>
                        <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
                            Authorized MRO and OEM Collaboration:
                        </h2>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>
                                We work closely with authorized Maintenance,
                                Repair, and Overhaul providers and Original Equipment Manufacturers to deliver exceptional
                                services.
                            </li>
                        </ul>
                        <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
                            Expert Technicians:
                        </h2>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>
                                Our team includes highly trained technicians and engineers with
                                extensive experience in aircraft maintenance.
                            </li>
                        </ul>
                        <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
                            State-of-the-Art Facilities:
                        </h2>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>
                                Our facilities are equipped with the latest technology, allowing us
                                to perform a wide range of maintenance and repair tasks.
                            </li>
                        </ul>
                        <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
                            Modification and Upgrades
                        </h2>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>
                                Avionics Upgrades
                            </li>
                            <li className='list-disc list-blue-500 mb-2'>
                                Interior Refurbishments
                            </li>
                            <li className='list-disc list-blue-500 mb-2'>
                                Performance Enhancements
                            </li>
                        </ul>
                        <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
                            Specialized Services
                        </h2>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>
                                Non-Destructive Testing (NDT)
                            </li>
                            <li className='list-disc list-blue-500 mb-2'>
                                Composite Material Repairs
                            </li>
                            <li className='list-disc list-blue-500 mb-2'>
                                Paint and Coating Services
                            </li>
                        </ul>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Our_services