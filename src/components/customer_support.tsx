import Image from 'next/image'
import React from 'react'

const Customer_support = () => {
    return (
        <div id='customer_support'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                    <Image src={"/assest/support.jpg"} alt="image" width={500} height={500} className='mb-8 rounded-xl' />
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Customer Support
                        </h1>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>
                                Technical Assistance
                            </li>
                            <li className='list-disc list-blue-500 mb-2'>
                                24/7 Helpline
                            </li>
                            <li className='list-disc list-blue-500 mb-2'>
                                Remote Diagnostics
                            </li>
                            <li className='list-disc list-blue-500 mb-2'>
                                On-Site Technical Support
                            </li>
                            <li className='list-disc list-blue-500 mb-2'>
                                Consulting Services
                            </li>
                            <li className='list-disc list-blue-500 mb-2'>
                                Maintenance Planning
                            </li>
                            <li className='list-disc list-blue-500 mb-2'>
                                Regulatory Compliance
                            </li>
                            <li className='list-disc list-blue-500 mb-2'>
                                Training Programs
                            </li>
                            <li className='list-disc list-blue-500 mb-2'>
                                Technical Training for Engineers and Technicians
                            </li>
                            <li className='list-disc list-blue-500 mb-2'>
                                Safety and Compliance Training
                            </li>
                            <li className='list-disc list-blue-500 mb-2'>
                                Customer Service
                            </li>
                        </ul>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Customer_support