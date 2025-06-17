import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import LeadershipCard from '../component/LeadershipCard';

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
                        <p className="text-xl mb-8">Discover the story, mission and people behind the Kayode Philip Foundation's commitment to transforming lives across Nigeria and beyond through sustainable development initiatives.</p>
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
                                Kayode Philip Foundation is a humanitarian organization committed to transforming lives through empowerment, education, healthcare, and social support. We believe in creating sustainable change by addressing key challenges that hinder human development, particularly in underserved communities. Feed One Save One is a life-saving intervention program.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Our approach is to improve the quality of life for underserved communities in Nigeria and beyond by addressing core human security needs through food relief, youth empowerment, and access to basic healthcare.
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
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">2020</h3>
                                <h4 className="text-xl font-semibold text-purple-700 mb-3">Foundation Established</h4>
                                <p className="text-gray-600">The Kayode Philip Foundation was established with a mission to improve the quality of life during Codvid period. 40 families were syupport with food relief packages</p>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-purple-700 border-4 border-white"></div>
                            </div>
                            <div className="md:w-1/2 md:pl-12">
                                <img
                                    src="/Images/2020-1.jpg"
                                    alt="Foundation Established"
                                    className="rounded-lg shadow-md w-full h-64 object-cover object-top"
                                 />
                            </div>
                        </div>
                        {/* 2017 */}
                        <div className="mb-16 flex flex-col md:flex-row-reverse items-center">
                            <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">2022</h3>
                                <h4 className="text-xl font-semibold text-purple-700 mb-3">We successfully launched our first major outreach project in Ibadan, impacting over 1,200 lives.</h4>
                                <p className="text-gray-600">The initiative included the distribution of food relief packages, school bags for children, free medical check-ups for the elderly, and skill acquisition programs. To further empower participants, top-performing trainees were awarded full scholarships to complete their training programs. </p>
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
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">2023</h3>
                                <h4 className="text-xl font-semibold text-purple-700 mb-3">In 2023, we extended our impact to another underserved community in Ibadan, reaching hundreds of beneficiaries.</h4>
                                <p className="text-gray-600">Building on the success of our first project, this foundation featured another distribution of food relief items, school bags for children, free medical check-ups for elderly residents, and hands-on skill acquisition training. Outstanding participants were once again awarded scholarships to complete their vocational programs, reinforcing our commitment to sustainable community development.</p>
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
           <section className="py-20 bg-purple-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Our Leadership</h2>
                    <p className="text-white text-center max-w-3xl mx-auto mb-16">
                    Meet the dedicated team of professionals guiding our foundation's mission and vision with passion and expertise.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <LeadershipCard
                        name="Kayode Philip Fadele"
                        title="President"
                        image="/Images/President.png"
                        summary="Oluwakayode Fadele is a dynamic lifestyle coach, author, and social entrepreneur, and content creator, passionate about transforming lives and empowering communities..."
                        fullText={`Oluwakayode Fadele is a dynamic lifestyle coach, author, social entrepreneur, and content creator, passionate about transforming lives and empowering communities. He is the visionary founder of the Kayode Philip Foundation, a non-profit organization dedicated to youth empowerment, education, and community development across underserved areas.
                                With a deep commitment to personal growth and societal impact, Oluwakayode combines his expertise in coaching and storytelling to inspire individuals to unlock their full potential. Through his content and public engagements, he addresses themes around purpose, mindset, relationships, and sustainable development.
                                As a trusted voice in the personal development space, Oluwakayode has authored transformative resources and created digital platforms that reach audiences globally. His work reflects a lifelong mission to create meaningful change, especially among youth and marginalized groups.
                                Whether in coaching sessions, community projects, or digital content, Oluwakayode Fadele continues to lead with authenticity, compassion, and an unwavering belief in the power of purpose-driven living.`}
                        
                    />

                    <LeadershipCard
                        name="Jumoby D.A"
                        title="Vice President"
                        image="/Images/Vice President.jpg"
                        summary="Creator. Disruptor. Curator. Founder & Chief Thinking Officer at Travul.org Ltd, a travel fintech company reimagining how people explore, save, and grow through borderless living..."
                        fullText={`Creator. Disruptor. Curator. Founder & Chief Thinking Officer at Travul.org Ltd, a travel fintech company reimagining how people explore, save, and grow through borderless living.
                            I fuse creativity with strategy, disruption with execution. With a proven track record in innovation, entrepreneurship, and client experience, I don’t just think outside the box—I redesign the box entirely.
                            Known for bold ideas, detailed execution, and a relentless drive for excellence, I lead with vision, build with purpose, and deliver with heart.`}
                    />

                    <LeadershipCard
                        name="Marie A. Fasanya"
                        title="Chief Operations Officer"
                        image="/Images/2.jpg"
                        summary="As the Chief Operations Officer of the Kayode Philip Foundation, I am honored to contribute to a mission that resonates deeply with my values..."
                        fullText={`As the Chief Operations Officer of the Kayode Philip Foundation, I am honored to contribute to a mission that resonates deeply with my values — empowering lives and creating lasting impact. I bring strong organizational skills, strategic thinking, and a deep commitment to service.
                        My approach focuses on building systems that help our programs run smoothly, ensuring that every effort is aligned with our goals and reaches those who need it most. I am learning, growing, and driven by a desire to see real change happen — from behind the scenes and on the field.
                        I am excited to be part of a team that is dedicated to making a difference in the lives of individuals and communities across Africa. Together, we are not just addressing immediate needs but also laying the groundwork for sustainable development and empowerment.`}
                    />

                    <LeadershipCard
                        name="Toluwanimi S. Oluwagbemiga"
                        title="Voluteer Coordinator"
                        image="/Images/Tolu-1.jpg"
                        summary="As the Volunteer Coordinator at the Kayode Philip Foundation, I work closely with our amazing team of volunteers the heart of our impact..."
                        fullText={`As the Volunteer Coordinator at the Kayode Philip Foundation, I work closely with our amazing team of volunteers the heart of our impact.
                        My role involves recruiting, organizing, and supporting passionate individuals who are committed to community development. I ensure each volunteer is equipped, valued, and inspired to serve with excellence. From events to outreach, I help bridge the gap between vision and execution, making sure every helping hand counts.
                        I am dedicated to fostering a culture of service, collaboration, and continuous learning. Together, we are not just making a difference we are building a movement of change-makers who believe in the power of community and the potential of every individual.`}
                    />
                    </div>
                </div>
            </section>
            {/* Board Members Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Board of Directors</h2>
                    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">Our diverse board brings expertise from various sectors to guide our strategic direction and governance.</p>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

                            {/* Board Member 3 */}
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
                {/* <h3 className="text-4xl font-bold text-purple-700 mb-2">10+</h3> */}
                <p className="text-gray-800 font-medium mb-2">Projects Completed</p>
                <p className="text-gray-600">Across serval cmmunities in the south-west, bringing sustainable solutions to communities in need.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                <div className="inline-block p-4 rounded-full bg-orange-100 mb-6">
                <i className="fas fa-users text-3xl text-orange-500"></i>
                </div>
                {/* <h3 className="text-4xl font-bold text-orange-500 mb-2">10,000+</h3> */}
                <p className="text-gray-800 font-medium mb-2">Lives Impacted</p>
                <p className="text-gray-600">Through our education, healthcare, food items, and vocational empowerment initiatives.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
                <i className="fas fa-award text-3xl text-purple-700"></i>
                </div>
                {/* <h3 className="text-4xl font-bold text-purple-700 mb-2"></h3> */}
                <p className="text-gray-800 font-medium mb-2">International Awards</p>
                <p className="text-gray-600">Recognizing our innovative approaches to sustainable development challenges.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                <div className="inline-block p-4 rounded-full bg-orange-100 mb-6">
                <i className="fas fa-handshake text-3xl text-orange-500"></i>
                </div>
                {/* <h3 className="text-4xl font-bold text-orange-500 mb-2">75+</h3> */}
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
                <li>Food Items Distribution</li>
                <li>Vocational Skills Empowerment</li>
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
                <h3 className="font-medium text-gray-800 mb-1">Volunteer</h3>
                <p className="text-sm text-gray-600">30 volunteer across Nigeria</p>
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