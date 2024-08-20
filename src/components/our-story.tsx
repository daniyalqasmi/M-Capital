import Image from 'next/image'
import React from 'react'

const Our_story = () => {
    return (
        <div id='our_story'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-8 ">
                        <Image src={"/assest/our_story.jpg"} alt="image" width={500} height={500} className='rounded-xl' />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-black mb-6 ">
                            Our Story
                        </h1>
                        <ul>
                            <li className='list-disc list-blue-500 mb-2'>M Capital LLC was founded in 1998 in Texas, USA, by a group of
                                passionate aviation professionals who recognized the critical need
                                for reliable, high-quality aircraft spare parts and maintenance
                                services. From the outset, our founders were driven by a mission to
                                enhance the safety, reliability, and efficiency of aircraft operations
                                worldwide.
                            </li>
                            <li className='list-disc'>In the early days, the aviation industry was rapidly evolving, with
                                increasing demand for both commercial and private aircraft. Our
                                founders faced numerous challenges, from sourcing rare spare parts
                                to establishing trust with potential clients. Despite these hurdles,
                                their unwavering dedication and commitment to excellence set the
                                foundation for what M Capital LLC would become.</li>
                        </ul>
                       
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Our_story