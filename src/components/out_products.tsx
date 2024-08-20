import Image from 'next/image'
import React from 'react'

const Out_products = () => {
    return (
        <div id='our_products'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-8">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-black mb-4">
                            Our Products
                        </h1>
                        <ul>
                            <li>

                                <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
                                    Spare Parts Inventory
                                </h2>
                            </li>

                        </ul>
                        <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
                            Extensive Range:
                        </h2>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>
                                We offer a comprehensive inventory of
                                spare parts for various aircraft models, including commercial
                                jets, private planes, and helicopters.

                            </li>
                        </ul>
                        <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
                            Sourcing and Procurement:
                        </h2>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>
                                Our global network allows us to
                                source even the rarest parts quickly and efficiently.
                            </li>
                        </ul>
                        <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
                            Certifications:
                        </h2>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>
                                All our parts come with the necessary
                                certifications, ensuring compliance with international
                                aviation standards.
                            </li>
                        </ul>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-8">
                        <Image src={"/assest/parts.jpg"} alt='' width={500} height={500} className='rounded-xl' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Out_products