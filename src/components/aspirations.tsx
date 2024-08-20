import Image from 'next/image'
import React from 'react'

const Aspirations = () => {
    return (
        <div id='aspirations'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                    <Image src={"/assest/asp.jpg"} alt="image" width={500} height={500} className='mb-8 rounded-xl' />
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Aspirations
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            As we look to the future, M Capital LLC remains steadfast in our
                            commitment to excellence, integrity, customer focus, innovation, and safety.
                            These core values drive us as we expand our capabilities, forge strategic
                            partnerships, and invest in the latest technologies. By continually enhancing
                            our service offerings and operational efficiency, we aim to set new standards
                            in the aviation industry. Our unwavering goal is to ensure that every aircraft
                            entrusted to us operates safely and reliably, maintaining our position as a
                            trusted partner in aviation maintenance and spare parts supply. Through
                            innovation and dedication, we strive to keep aircraft in the air, meeting the
                            evolving needs of our clients with unparalleled expertise and service
                            excellence.
                        </p>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Aspirations