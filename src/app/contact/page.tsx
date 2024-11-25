import React from 'react'

const page = () => {
    return (
        <div><section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="w-screen h-screen bg-gray-300 rounded-lg overflow-hidden sm:mr-10  flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder={0}
                        title="map"
                        marginHeight={0}
                        marginWidth={0}
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.9127331238737!2d-95.60441762540103!3d29.635277737842696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e7a86f9b8d01%3A0x5be91f3cba70e5e2!2s12501%20Reed%20Rd%2C%20Sugar%20Land%2C%20TX%2077478%2C%20USA!5e0!3m2!1sen!2s!4v1724104347839!5m2!1sen!2s"
                        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                    />

                </div>
                {/* <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Feedback
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
        Post-ironic portland shabby chic echo park, banjo fashion axe
        </p>
        <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
        Name
        </label>
        <input
        type="text"
        id="name"
        name="name"
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        </div>
        <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
            </label>
            <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            defaultValue={""}
          />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
          </button>
          <p className="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
          </p>
          </div> */}
            </div>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                        ADDRESS
                    </h2>
                    <p className="mt-1">
                        12501 REED ROAD,
                        SUGAR LAND, TX 77478
                    </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">

                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                        PHONE
                    </h2>
                    <p className="leading-relaxed">+1 (281) 701 3321</p>
                </div>
            </div>
        </section>
        </div>
    )
}

export default page