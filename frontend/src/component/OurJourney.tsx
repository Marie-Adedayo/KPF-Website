import React from "react";  


const OurJourney: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Our Journey</h2>
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
                        {/* Timeline Items */}
                        <div className="relative z-10">
                        {/* 2020 */}
                        <div className="mb-16 flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">2020</h3>
                                <h4 className="text-xl font-semibold text-purple-700 mb-3">Foundation Established</h4>
                                <p className="text-gray-600">The Kayode Philip Foundation was established with a mission to improve the quality of life during Codvid period. 40 families were support with food relief packages</p>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-700 border-4 border-white"></div>
                            </div>
                            <div className="md:w-1/2 md:pl-12">
                                <img
                                    src="/Images/year/2020-1.jpg"
                                    alt="Foundation Established"
                                    className="rounded-lg shadow-md w-full h-64 object-cover object-top"
                                 />
                            </div>
                        </div>
                        {/* 2021 */}
                        <div className="mb-16 flex flex-col md:flex-row-reverse items-center">
                            <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">2021</h3>
                                <h4 className="text-xl font-semibold text-purple-700 mb-3">Food Relief Outreach for Families</h4>
                                <p className="text-gray-600">
                                    In 2021, our foundation organized a major outreach focused on supporting families facing hardship. We distributed food relief packages to vulnerable households, ensuring they had access to essential nutrition during challenging times.
                                </p>
                               
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-700 border-4 border-white"></div>
                            </div>
                            <div className="md:w-1/2 md:pr-12">
                                <img
                                    src="/Images/year/2021.jpg"
                                    alt="First Major Project"
                                    className="rounded-lg shadow-md w-full h-64 object-cover object-top"
                                />
                            </div>
                        </div>
                        {/* 2022 */}
                        <div className="mb-16 flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">2022</h3>
                                <h4 className="text-xl font-semibold text-purple-700 mb-3">First Feed One Save One Project In Ogunmakin Cpummunity in Ado-odo Otta</h4>
                                <p className="text-gray-600">
                                    Our first Feed One Save One project in Ogunmakin community provided essential food relief packages to families in need, marking a significant milestone in our outreach efforts. The initiative fostered hope and strengthened community bonds, laying the foundation for future projects.
                                </p>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-700 border-4 border-white"></div>
                            </div>
                            <div className="md:w-1/2 md:pl-12">
                                <img
                                    src="/Images/year/2022-1.jpeg"
                                    alt="Educational Initiative"
                                    className="rounded-lg shadow-md w-full h-64 object-cover object-top"
                                />
                            </div>
                        </div>
                        {/* 2023 */}
                        <div className="mb-16 flex flex-col md:flex-row-reverse items-center">
                            <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">2023</h3>
                                <h4 className="text-xl font-semibold text-purple-700 mb-3">In 2023, we extended our impact to another underserved community in Ibadan, reaching hundreds of beneficiaries.</h4>
                                <p className="text-gray-600"> Building on our commitment to underserved areas, the 2023 outreach in Ibadan delivered vital aid including food relief, educational materials, and healthcare support. The initiative strengthened community ties and brought hope to hundreds of families.</p>
 
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-700 border-4 border-white"></div>
                            </div>
                            <div className="md:w-1/2 md:pr-12">
                                <img
                                    src="/Images/year/2023.jpeg"
                                    alt="Ibadan 2023 Project"
                                    className="rounded-lg shadow-md w-full h-64 object-cover object-top"
                                />
                            </div>
                        </div>
                        {/* 2024*/}
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">2024</h3>
                                <h4 className="text-xl font-semibold text-purple-700 mb-3">Ibadan 2024 Feed One Save One Project</h4>
                                <p className="text-gray-600"> Due to Ibadan’s vast size, our initial project couldn't reach as many areas as planned, prompting a return for a second phase in a different community.</p>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-700 border-4 border-white"></div>
                            </div>
                            <div className="md:w-1/2 md:pl-12">
                                <img
                                    src="/Images/year/2024.jpg"
                                    alt="Ibadan 2024 Project"
                                    className="rounded-lg shadow-md w-full h-64 object-cover object-top"
                                />
                            </div>
                        </div>
                        {/* 2025 */}
                        <div className="mb-16 flex flex-col md:flex-row-reverse items-center">
                            <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">2025</h3>
                                <h4 className="text-xl font-semibold text-purple-700 mb-3">Ogunmakin 2025 Feed One Save One Project </h4>
                                <p className="text-gray-600">Ogunmakin community, home to our foundation office, was the site of our 2025 outreach where we provided food relief packages, school supplies, and free eye screenings to support underserved families and students.</p>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-700 border-4 border-white"></div>
                            </div>
                            <div className="md:w-1/2 md:pr-12">
                                <img
                                    src="/Images/year/2025.jpg"
                                    alt="Ogunmakin 2025 Project"
                                    className="rounded-lg shadow-md w-full h-64 object-cover object-top"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}
export default OurJourney;