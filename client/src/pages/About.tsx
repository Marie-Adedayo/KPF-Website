import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import LeadershipCard from '../component/LeadershipCard';
import OurJourney from '../component/OurJourney';

const About: React.FC = () => {


    return (
        <div className="min-h-screen font-sans">
            <Header />
            {/* Hero Section */}
            <section className="relative pt-24 overflow-hidden" style={{ minHeight: '80vh' }}>
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Images/AboutPic.jpg"
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
                            href="/"
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
            < OurJourney />
            {/* History Timeline Section */}
            <section className="py-20 bg-purple-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Our Leadership</h2>
                    <p className="text-white text-center max-w-3xl mx-auto mb-16">
                    Meet the dedicated team of professionals guiding our foundation's mission and vision with passion and expertise.
                    </p>
                     <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Board Member 1 */}
                            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-700">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                                <img
                                src="Images/kayode.jpg"
                                alt="President"
                                className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 text-center mb-1">Kayode Philip Fadele </h3>
                            <p className="text-purple-700 font-medium text-center mb-3">Founder</p>
                           
                            </div>

                            {/* Board Member 2 */}
                            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                                <img
                                src="/Images/Adedayo.jpg"
                                alt="Adedayo"
                                className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 text-center mb-1">Fasanya Marie Adedayo</h3>
                            <p className="text-purple-700 font-medium text-center mb-3">Chief Operating Officer</p>
                            </div>

                            {/* Board Member 3 */}
                            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                                <img
                                src="/Images/gift.png"
                                alt="Gift"
                                className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 text-center mb-1">Oyewale Ebunoluwa</h3>
                            <p className="text-purple-700 font-medium text-center mb-3">Social Media Manager</p>
                            </div>
                             <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                                <img
                                src="/Images/Tolu-1.jpg"
                                alt="Tolu"
                                className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 text-center mb-1">Toluwanimi S. Oluwagbemiga</h3>
                            <p className="text-purple-700 font-medium text-center mb-3">Voluteer Coordinator</p>
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
                    <div className="flex flex-wrap justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <LeadershipCard
                                name="Kayode Philip Fadele"
                                title="President"
                                image="/Images/kayode.jpg"
                                summary="Oluwakayode Fadele is a dynamic lifestyle coach, author, and social entrepreneur, and content creator..."
                                fullText={`Oluwakayode Fadele is a dynamic lifestyle coach, author, social entrepreneur, and content creator, passionate about transforming lives and empowering communities. He is the visionary founder of the Kayode Philip Foundation, a non-profit organization dedicated to youth empowerment, education, and community development across underserved areas.
                                        With a deep commitment to personal growth and societal impact, Oluwakayode combines his expertise in coaching and storytelling to inspire individuals to unlock their full potential. Through his content and public engagements, he addresses themes around purpose, mindset, relationships, and sustainable development.
                                        As a trusted voice in the personal development space, Oluwakayode has authored transformative resources and created digital platforms that reach audiences globally. His work reflects a lifelong mission to create meaningful change, especially among youth and marginalized groups.
                                        Whether in coaching sessions, community projects, or digital content, Oluwakayode Fadele continues to lead with authenticity, compassion, and an unwavering belief in the power of purpose-driven living.`}
                                
                            />

                            <LeadershipCard
                                name="Jumoby D.A"
                                title="Vice President"
                                image="/Images/Vice President.jpg"
                                summary="Creator. Disruptor. Curator. Founder & Chief Thinking Officer at Travul.org Ltd, a travel..."
                                fullText={`Creator. Disruptor. Curator. Founder & Chief Thinking Officer at Travul.org Ltd, a travel fintech company reimagining how people explore, save, and grow through borderless living.
                                I fuse creativity with strategy, disruption with execution. With a proven track record in innovation, entrepreneurship, and client experience, I don’t just think outside the box—I redesign the box entirely.
                                Known for bold ideas, detailed execution, and a relentless drive for excellence, I lead with vision, build with purpose, and deliver with heart.`}
                            />
                            <LeadershipCard
                                name="Oriyomi Joseph"
                                title="Member"
                                image="/Images/Ori.jpg"
                                summary="A fellow at Global Arts In Medicine, His exceptional talents extend across various domains..."
                                fullText={`Oriyomi Joseph, affectionately known as ORí, is a multifaceted performing artist both on screen and stage, with a deep-rooted
                                    passion for the arts. A Bachelor of Arts degree holder in Theatre Arts. His journey is a testament to the enriching experiences that the study of Theatre Arts can offer. He embodies the cultural
                                    richness and diversity of his heritage. A fellow at Global Arts In Medicine, His exceptional talents extend across various domains,
                                    making him a true Renaissance artist. ORí has earned recognition and awards for his outstanding contributions to the theatre, excelling in areas such as dance, drums, acting, recitation,
                                    voice(over)acting, singing, chanting, etc. Hailing from the esteemed lineage of the Ojomu of Ajiran Kingdom in Lagos, Nigeria, One of
                                    ORí's notable achievements lies in his captivating portrayal of 'Wasiu Wakanaki' in the renowned
                                    TV sitcom, "The Johnsons." This beloved character continues to entertain audiences on Africa's
                                    most-viewed TV platform, Africa Magic, available on DsTV. Additionally, ORí has taken on
                                    leading roles in a Yoruba TV series titled "ELENINI," produced by NOSTALGIA MEDIA NG,
                                    sub-lead, supporting roles in other films and television series.
                                    Beyond the screen, ORí has achieved international acclaim, representing Nigerian culture and the
                                    arts on global
                                    platforms. He led a group of performers at the International Youth Arts Festival (IYAF) in the UK,
                                    promoting African culture and artistic excellence. He has also facilitated theatre workshops and
                                    cultural exchanges in Ghana, the Republic of Benin, Togo, and the Ivory Coast, further
                                    strengthening the ties between nations through the medium of theatre.
                                    ORí is more than just an actor; he's a cultural ambassador and educator. He has shared his vast
                                    knowledge of Theatre for Development (TFD) by engaging with colleges, NGOs, Higher
                                    institutions, communities, and beyond. This work showcases his commitment to preserving and
                                    promoting cultural aesthetics through the transformative power of theatre.
                                    Notably, he has made two special theater appearances at the Badagry Diaspora Festival (BDF),
                                    alongside distinguished figures like Honorable Abike Dabiri, Senior Special Assistant to the former
                                    President of Nigeria on Foreign Affairs and Diaspora. His contributions to cultural enrichment have
                                    been recognized and celebrated, as evidenced by his recent decoration and award as an Ambassador
                                    of Arts and Culture under the auspices of the Alimosho Art Initiative (AAI) and the Alimosho Art
                                    Community (AAC).
                                    ORí's journey from conception to application to becoming a cultural icon and ambassador is an
                                    inspiring testament to the boundless adventures which continue to enrich the world with the beauty
                                    and depth of Nigerian culture, captivating hearts on both the local and global stages`}
                            />
                            <LeadershipCard
                                name="Aderemi Idowu Abel"
                                title="Director of Finance"
                                image="/Images/mr ID.jpeg"
                                summary="Prince Aderemi Idowu Abel is a graduate of Business Administration from Osun State University, Osogbo, and a Chartered Manager..."
                                fullText={`Prince Aderemi Idowu Abel is a graduate of Business Administration from Osun State University, Osogbo, and a Chartered Manager and member of the Nigerian Institute of Management (NIM). He is the Founder of ArcGlobal Group, a business organization established in 2021 with operational subsidiaries spanning Haulage, Mining, Real Estate, Finance, and Agriculture.
                                With several years of practical experience in both the corporate and business sectors, Prince Aderemi is widely recognized for his passion and expertise in supporting business growth across Nigeria and beyond. He is particularly renowned for providing strategic financial support through diverse well tailored loan schemes, financial advisory services, and long-term business growth strategies, enabling them to strengthen operations and achieve sustainable expansion, helping businesses strengthen their financial capacity, seize opportunities, and enhance operational stability.
                                A skilled business analyst, strategist, and consultant, Prince Aderemi has delivered impactful consultations for numerous enterprises in both the private and public sectors. His work with the Lagos State Government is especially notable, driven by his strong background in human resources, capacity building, and organizational development.
                                He is also an alumnus of Youniverse Business School in the United Kingdom—an international institute dedicated to equipping entrepreneurs around the world with the skills and expertise needed to build sustainable and scalable businesses.
                                A serial entrepreneur with an unwavering commitment to excellence, Prince Aderemi Idowu Abel believes in getting the job done before giving excuses. He stands as a true embodiment of competence, resilience, and visionary leadership.`}
                            />
                            
                            <LeadershipCard
                                name="Fasanya Marie Adedayo"
                                title="Head of Operation"
                                image="/Images/Adedayo.jpg"
                                summary="Marie is a passionate operations leader, social entrepreneur, and community-impact..."
                                fullText={`Marie is a passionate operations leader, social entrepreneur, and community-impact advocate committed to creating opportunities for young people and underserved communities. With a strong track record in coordinating educational 
                                    programs, organizing statewide competitions, and managing high-impact foundation projects, she brings grace, strategy, and excellence to every initiative she leads. Her work is driven by a deep belief in empowerment, purpose, and meaningful
                                    change—making her a vital force in advancing the mission of the Kayode Philip Foundation.`}
                            />

                    
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