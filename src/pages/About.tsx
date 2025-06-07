import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';

const About: React.FC = () => {


    return (
        <div className="min-h-screen font-sans">
            <Header />
            {/* Hero Section */}
            <section className="relative pt-24 overflow-hidden" style={{ minHeight: '80vh' }}>
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://readdy.ai/api/search-image?query=beautiful%20panoramic%20view%20of%20African%20community%20development%20project%20with%20people%20working%20together%20on%20sustainable%20initiatives%20with%20purple%20and%20orange%20sunset%20sky%20in%20background%20creating%20a%20gradient%20effect%20with%20space%20for%20text%20on%20left%20side%20and%20clear%20visibility%20of%20foundation%20work%20in%20rural%20communities&width=1440&height=800&seq=101&orientation=landscape"
                        alt="About Kayode Philip Foundation"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-yellow-500/60"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 flex items-center h-full" style={{ minHeight: '70vh' }}>
                    <div className="max-w-2xl text-white">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">About Our Foundation</h1>
                        <p className="text-xl mb-8">Discover the story, mission and people behind the Kayode Philip Foundation's commitment to transforming lives across Africa through sustainable development initiatives.</p>
                        <a
                            href="https://readdy.ai/home/c23ea3ce-3d5b-4114-80f9-5b95c12ad4aa/0a5a6d29-9cc6-4601-81d7-21e65a1da9c7"
                            data-readdy="true"
                            className="inline-flex items-center text-orange-300 hover:text-orange-200 transition duration-300 cursor-pointer"
                        >
                            <i className="fas fa-arrow-left mr-2"></i> Back to Home
                        </a>
                    </div>
                </div>
            </section>
            {/* Mission & Values Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/2">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                                    <i className="fas fa-bullseye text-purple-700 text-xl"></i>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                The Kayode Philip Foundation is dedicated to empowering communities across Africa through sustainable development initiatives. We believe in creating lasting change by focusing on education, healthcare, clean water access, and economic empowerment.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Our approach is centered on community partnership, ensuring that local voices guide our projects and that solutions are sustainable for generations to come. We work hand-in-hand with communities to identify needs, develop solutions, and implement programs that create meaningful and lasting impact.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                                <i className="fas fa-heart text-purple-700 text-xl"></i>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-700">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                                    <i className="fas fa-handshake text-purple-700"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
                                <p className="text-gray-600">We uphold the highest ethical standards in all our operations and partnerships.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                                    <i className="fas fa-users text-orange-500"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
                                <p className="text-gray-600">We believe in the power of community-led development and local ownership.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                                    <i className="fas fa-seedling text-orange-500"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainability</h3>
                                <p className="text-gray-600">We create solutions that stand the test of time and respect our environment.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-700">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                                    <i className="fas fa-lightbulb text-purple-700"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
                                <p className="text-gray-600">We embrace creative approaches to solving complex development challenges.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            {/* History Timeline Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Our Journey</h2>
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
                        {/* Timeline Items */}
                        <div className="relative z-10">
                        {/* 2015 */}
                        <div className="mb-16 flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">2015</h3>
                                <h4 className="text-xl font-semibold text-purple-700 mb-3">Foundation Established</h4>
                                <p className="text-gray-600">The Kayode Philip Foundation was established with a mission to transform lives across Africa through sustainable development initiatives.</p>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-700 border-4 border-white"></div>
                            </div>
                            <div className="md:w-1/2 md:pl-12">
                                <img
                                    src="https://readdy.ai/api/search-image?query=foundation%20establishment%20ceremony%20with%20diverse%20group%20of%20people%20cutting%20ribbon%20at%20new%20office%20building%20with%20purple%20and%20orange%20decorative%20elements%20and%20professional%20setting%20with%20clean%20simple%20background&width=500&height=300&seq=102&orientation=landscape"
                                    alt="Foundation Established"
                                    className="rounded-lg shadow-md w-full h-64 object-cover object-top"
                                 />
                            </div>
                        </div>
                        {/* 2017 */}
                        <div className="mb-16 flex flex-col md:flex-row-reverse items-center">
                            <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">2017</h3>
                                <h4 className="text-xl font-semibold text-purple-700 mb-3">First Major Project</h4>
                                <p className="text-gray-600">Launched our first major clean water initiative in rural Nigeria, providing access to clean water for over 5,000 people.</p>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-700 border-4 border-white"></div>
                            </div>
                            <div className="md:w-1/2 md:pr-12">
                                <img
                                    src="https://readdy.ai/api/search-image?query=clean%20water%20well%20installation%20in%20rural%20African%20village%20with%20community%20members%20celebrating%20access%20to%20clean%20water%20with%20purple%20and%20orange%20sunset%20sky%20in%20background%20and%20modern%20water%20infrastructure%20with%20clean%20simple%20background&width=500&height=300&seq=103&orientation=landscape"
                                    alt="First Major Project"
                                    className="rounded-lg shadow-md w-full h-64 object-cover object-top"
                                />
                            </div>
                        </div>
                        {/* 2019 */}
                        <div className="mb-16 flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">2019</h3>
                                <h4 className="text-xl font-semibold text-purple-700 mb-3">Educational Initiative</h4>
                                <p className="text-gray-600">Established our educational program, building 10 schools and providing scholarships to over 1,000 children across three countries.</p>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-700 border-4 border-white"></div>
                            </div>
                            <div className="md:w-1/2 md:pl-12">
                                <img
                                    src="https://readdy.ai/api/search-image?query=newly%20built%20school%20in%20African%20village%20with%20children%20in%20purple%20uniforms%20entering%20classroom%20with%20teachers%20and%20educational%20materials%20visible%20with%20clean%20simple%20background%20and%20bright%20natural%20lighting&width=500&height=300&seq=104&orientation=landscape"
                                    alt="Educational Initiative"
                                    className="rounded-lg shadow-md w-full h-64 object-cover object-top"
                                />
                            </div>
                        </div>
                        {/* 2021 */}
                        <div className="mb-16 flex flex-col md:flex-row-reverse items-center">
                            <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">2021</h3>
                                <h4 className="text-xl font-semibold text-purple-700 mb-3">Healthcare Expansion</h4>
                                <p className="text-gray-600">Launched our mobile healthcare clinics program, bringing essential medical services to remote communities across five countries.</p>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-700 border-4 border-white"></div>
                            </div>
                            <div className="md:w-1/2 md:pr-12">
                                <img
                                    src="https://readdy.ai/api/search-image?query=mobile%20healthcare%20clinic%20in%20rural%20African%20setting%20with%20medical%20professionals%20treating%20patients%20with%20modern%20medical%20equipment%20and%20purple%20branded%20vehicles%20with%20clean%20simple%20background%20and%20natural%20lighting&width=500&height=300&seq=105&orientation=landscape"
                                    alt="Healthcare Expansion"
                                    className="rounded-lg shadow-md w-full h-64 object-cover object-top"
                                />
                            </div>
                        </div>
                        {/* 2023 */}
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">2023</h3>
                                <h4 className="text-xl font-semibold text-purple-700 mb-3">Economic Empowerment</h4>
                                <p className="text-gray-600">Established our microfinance and entrepreneurship program, supporting over 200 small businesses and creating 1,000+ jobs.</p>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-700 border-4 border-white"></div>
                            </div>
                            <div className="md:w-1/2 md:pl-12">
                                <img
                                    src="https://readdy.ai/api/search-image?query=African%20entrepreneurs%20in%20marketplace%20receiving%20business%20training%20and%20microloans%20with%20digital%20technology%20visible%20and%20purple%20branded%20materials%20with%20clean%20simple%20background%20and%20natural%20lighting&width=500&height=300&seq=106&orientation=landscape"
                                    alt="Economic Empowerment"
                                    className="rounded-lg shadow-md w-full h-64 object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            {/* Leadership Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Our Leadership</h2>
                    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">Meet the dedicated team of professionals guiding our foundation's mission and vision with passion and expertise.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* CEO */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 group">
                            <div className="h-80 overflow-hidden">
                                <img
                                    src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20African%20male%20CEO%20in%20his%2050s%20wearing%20business%20suit%20against%20neutral%20background%20with%20confident%20expression%20and%20professional%20lighting%20with%20clean%20simple%20background&width=600&height=800&seq=107&orientation=portrait"
                                    alt="Kayode Philip"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Kayode Philip</h3>
                                <p className="text-purple-700 font-medium mb-4">Founder & CEO</p>
                                <p className="text-gray-600 mb-4">With over 25 years of experience in international development, Dr. Philip founded the organization with a vision to transform communities across Africa.</p>
                                <div className="flex space-x-3">
                                    <a href="#" className="text-gray-400 hover:text-purple-700 transition duration-300 cursor-pointer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-purple-700 transition duration-300 cursor-pointer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-purple-700 transition duration-300 cursor-pointer">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* COO */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 group">
                            <div className="h-80 overflow-hidden">
                                <img
                                    src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20African%20female%20COO%20in%20her%2040s%20wearing%20business%20attire%20against%20neutral%20background%20with%20warm%20smile%20and%20professional%20lighting%20with%20clean%20simple%20background&width=600&height=800&seq=108&orientation=portrait"
                                    alt="Amina Okafor"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">Amina Okafor</h3>
                                <p className="text-purple-700 font-medium mb-4">Chief Operations Officer</p>
                                <p className="text-gray-600 mb-4">Amina brings 15 years of operational expertise from the nonprofit sector, ensuring our programs deliver maximum impact efficiently.</p>
                                <div className="flex space-x-3">
                                    <a href="#" className="text-gray-400 hover:text-purple-700 transition duration-300 cursor-pointer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-purple-700 transition duration-300 cursor-pointer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-purple-700 transition duration-300 cursor-pointer">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* CFO */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 group">
                            <div className="h-80 overflow-hidden">
                                <img
                                    src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20African%20male%20CFO%20in%20his%2040s%20wearing%20business%20suit%20against%20neutral%20background%20with%20glasses%20and%20professional%20expression%20with%20clean%20simple%20background%20and%20professional%20lighting&width=600&height=800&seq=109&orientation=portrait"
                                    alt="David Mensah"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">David Mensah</h3>
                                <p className="text-purple-700 font-medium mb-4">Chief Financial Officer</p>
                                <p className="text-gray-600 mb-4">David oversees our financial strategy, ensuring transparency and accountability in all our operations and funding allocations.</p>
                                <div className="flex space-x-3">
                                    <a href="#" className="text-gray-400 hover:text-purple-700 transition duration-300 cursor-pointer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-purple-700 transition duration-300 cursor-pointer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-purple-700 transition duration-300 cursor-pointer">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Program Director */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 group">
                            <div className="h-80 overflow-hidden">
                                <img
                                    src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20African%20female%20program%20director%20in%20her%2030s%20wearing%20smart%20casual%20attire%20against%20neutral%20background%20with%20friendly%20expression%20and%20professional%20lighting%20with%20clean%20simple%20background&width=600&height=800&seq=110&orientation=portrait"
                                    alt="Sarah Adeyemi"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">Sarah Adeyemi</h3>
                                <p className="text-purple-700 font-medium mb-4">Program Director</p>
                                <p className="text-gray-600 mb-4">Sarah leads our program development and implementation, bringing extensive experience in community development across Africa.</p>
                                <div className="flex space-x-3">
                                    <a href="#" className="text-gray-400 hover:text-purple-700 transition duration-300 cursor-pointer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-purple-700 transition duration-300 cursor-pointer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-purple-700 transition duration-300 cursor-pointer">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Communications Director */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 group">
                            <div className="h-80 overflow-hidden">
                                <img
                                    src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20African%20male%20communications%20director%20in%20his%2030s%20wearing%20smart%20casual%20attire%20against%20neutral%20background%20with%20engaging%20expression%20and%20professional%20lighting%20with%20clean%20simple%20background&width=600&height=800&seq=111&orientation=portrait"
                                    alt="Michael Osei"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                                />
                            </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Michael Osei</h3>
                            <p className="text-purple-700 font-medium mb-4">Communications Director</p>
                            <p className="text-gray-600 mb-4">Michael manages our communications strategy, sharing our impact stories and building partnerships with stakeholders worldwide.</p>
                            <div className="flex space-x-3">
                                <a href="#" className="text-gray-400 hover:text-purple-700 transition duration-300 cursor-pointer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-purple-700 transition duration-300 cursor-pointer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-purple-700 transition duration-300 cursor-pointer">
                                    <i className="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </section>
            {/* Board Members Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Board of Directors</h2>
                    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">Our diverse board brings expertise from various sectors to guide our strategic direction and governance.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Board Member 1 */}
                        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-700">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                                <img
                                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20distinguished%20African%20male%20board%20member%20in%20his%2060s%20wearing%20formal%20attire%20against%20neutral%20background%20with%20dignified%20expression%20and%20professional%20lighting%20with%20clean%20simple%20background&width=200&height=200&seq=113&orientation=squarish"
                                    alt="Prof. Oluwaseun Adebayo"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 text-center mb-1">Prof. Oluwaseun Adebayo</h3>
                            <p className="text-purple-700 font-medium text-center mb-3">Board Chair</p>
                            <p className="text-gray-600 text-center text-sm">Former Minister of Education, Nigeria</p>
                        </div>
                        {/* Board Member 2 */}
                        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <img
                        src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20distinguished%20African%20female%20board%20member%20in%20her%2050s%20wearing%20business%20attire%20against%20neutral%20background%20with%20confident%20expression%20and%20professional%20lighting%20with%20clean%20simple%20background&width=200&height=200&seq=114&orientation=squarish"
                        alt="Dr. Fatima Diallo"
                        className="w-full h-full object-cover object-top"
                        />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 text-center mb-1">Dr. Fatima Diallo</h3>
                        <p className="text-purple-700 font-medium text-center mb-3">Vice Chair</p>
                        <p className="text-gray-600 text-center text-sm">CEO, Pan-African Health Initiative</p>
                        </div>

 
                        {/* Board Member 8 */}
                        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                                <img
                                src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20distinguished%20African%20female%20board%20member%20in%20her%2060s%20wearing%20traditional%20attire%20against%20neutral%20background%20with%20wise%20expression%20and%20professional%20lighting%20with%20clean%20simple%20background&width=200&height=200&seq=120&orientation=squarish"
                                alt="Chief Amara Okonkwo"
                                className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 text-center mb-1">Chief Amara Okonkwo</h3>
                            <p className="text-purple-700 font-medium text-center mb-3">Member</p>
                            <p className="text-gray-600 text-center text-sm">Traditional Leader & Philanthropist</p>
                        </div>
                    </div>
                </div>
            </section>
                {/* Achievements Section */}
                <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Our Achievements</h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">Through dedication and partnership, we've made significant strides in transforming communities across Africa.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
                <i className="fas fa-hands-helping text-3xl text-purple-700"></i>
                </div>
                <h3 className="text-4xl font-bold text-purple-700 mb-2">120+</h3>
                <p className="text-gray-800 font-medium mb-2">Projects Completed</p>
                <p className="text-gray-600">Across 12 African countries, bringing sustainable solutions to communities in need.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                <div className="inline-block p-4 rounded-full bg-orange-100 mb-6">
                <i className="fas fa-users text-3xl text-orange-500"></i>
                </div>
                <h3 className="text-4xl font-bold text-orange-500 mb-2">50,000+</h3>
                <p className="text-gray-800 font-medium mb-2">Lives Impacted</p>
                <p className="text-gray-600">Through our education, healthcare, water, and economic empowerment initiatives.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
                <i className="fas fa-award text-3xl text-purple-700"></i>
                </div>
                <h3 className="text-4xl font-bold text-purple-700 mb-2">15</h3>
                <p className="text-gray-800 font-medium mb-2">International Awards</p>
                <p className="text-gray-600">Recognizing our innovative approaches to sustainable development challenges.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                <div className="inline-block p-4 rounded-full bg-orange-100 mb-6">
                <i className="fas fa-handshake text-3xl text-orange-500"></i>
                </div>
                <h3 className="text-4xl font-bold text-orange-500 mb-2">75+</h3>
                <p className="text-gray-800 font-medium mb-2">Global Partners</p>
                <p className="text-gray-600">Collaborating with organizations worldwide to maximize our impact and reach.</p>
                </div>
                </div>
                </div>
                </section>
                {/* Organization Structure */}
                <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Our Organization</h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">We operate with a structure designed to maximize efficiency, accountability, and impact across all our initiatives.</p>
                <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                <div className="flex justify-center mb-12">
                <div className="text-center px-8 py-6 bg-purple-700 rounded-lg text-white">
                <h3 className="font-bold text-xl mb-1">Board of Directors</h3>
                <p className="text-sm text-purple-200">Strategic Oversight & Governance</p>
                </div>
                </div>
                <div className="flex justify-center mb-12">
                <div className="w-1 h-12 bg-purple-700"></div>
                </div>
                <div className="flex justify-center mb-12">
                <div className="text-center px-8 py-6 bg-orange-500 rounded-lg text-white">
                <h3 className="font-bold text-xl mb-1">Executive Leadership</h3>
                <p className="text-sm text-orange-100">CEO, COO, CFO</p>
                </div>
                </div>
                <div className="flex justify-center mb-12">
                <div className="w-1 h-12 bg-orange-500"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center px-4 py-5 bg-purple-100 rounded-lg border-t-4 border-purple-700">
                <h3 className="font-bold text-gray-800 mb-2">Program Operations</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                <li>Education Initiatives</li>
                <li>Healthcare Programs</li>
                <li>Water & Sanitation</li>
                <li>Economic Empowerment</li>
                </ul>
                </div>
                <div className="text-center px-4 py-5 bg-purple-100 rounded-lg border-t-4 border-purple-700">
                <h3 className="font-bold text-gray-800 mb-2">Administration</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                <li>Finance & Accounting</li>
                <li>Human Resources</li>
                <li>Legal & Compliance</li>
                <li>IT & Systems</li>
                </ul>
                </div>
                <div className="text-center px-4 py-5 bg-purple-100 rounded-lg border-t-4 border-purple-700">
                <h3 className="font-bold text-gray-800 mb-2">External Relations</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                <li>Communications</li>
                <li>Fundraising</li>
                <li>Partnerships</li>
                <li>Monitoring & Evaluation</li>
                </ul>
                </div>
                </div>
                <div className="mt-12 text-center">
                <div className="inline-block px-6 py-3 bg-gray-100 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-1">Field Operations</h3>
                <p className="text-sm text-gray-600">12 Country Offices Across Africa</p>
                </div>
                </div>
                </div>
                <div className="mt-12 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Approach</h3>
                <div className="space-y-4">
                <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-search text-purple-700"></i>
                </div>
                <div>
                <h4 className="font-bold text-gray-800 mb-1">Community Assessment</h4>
                <p className="text-gray-600">We begin by listening to communities and conducting thorough needs assessments.</p>
                </div>
                </div>
                <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-users-cog text-purple-700"></i>
                </div>
                <div>
                <h4 className="font-bold text-gray-800 mb-1">Collaborative Design</h4>
                <p className="text-gray-600">Programs are designed in partnership with community leaders and local experts.</p>
                </div>
                </div>
                <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-cogs text-purple-700"></i>
                </div>
                <div>
                <h4 className="font-bold text-gray-800 mb-1">Implementation</h4>
                <p className="text-gray-600">We execute projects with local teams, ensuring community ownership and participation.</p>
                </div>
                </div>
                <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-chart-line text-purple-700"></i>
                </div>
                <div>
                <h4 className="font-bold text-gray-800 mb-1">Monitoring & Evaluation</h4>
                <p className="text-gray-600">Rigorous assessment ensures we measure impact and continuously improve our work.</p>
                </div>
                </div>
                <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-sync-alt text-purple-700"></i>
                </div>
                <div>
                <h4 className="font-bold text-gray-800 mb-1">Sustainability Planning</h4>
                <p className="text-gray-600">We develop transition plans to ensure communities can maintain progress independently.</p>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
            </section>
            <Footer/>

        </div>
    );
};
export default About