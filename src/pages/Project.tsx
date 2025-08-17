import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '@/component/Footer';
const Project: React.FC = () => {
const [activeCategory, setActiveCategory] = useState('all');
const [activeLocation, setActiveLocation] = useState('all');
const [activeStatus, setActiveStatus] = useState('all');
const [searchQuery, setSearchQuery] = useState('');
const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
const [showLocationDropdown, setShowLocationDropdown] = useState(false);
const [showStatusDropdown, setShowStatusDropdown] = useState(false); 
// Project data
const projects = [
{
id: 1,
title: "Bright Future Academy",
category: "education",
location: "Nigeria",
status: "active",
description: "Sponsorship to educate children in underserved communities.",
impact: " Give access to quality education for 1,000 children",
progress: 50,
image: "/Images/edu-3.jpeg"
},
{
id: 2,
title: "An Enterprenuership Skill Center Initiative",
category: "enterprenuership",
location: "Nigeria",
status: "active",
description: "Building a center to provide vocational training and entrepreneurship skills to youth.",
impact: "500 youth trained, 200 businesses started",
progress: 10,
image: "/Images/voc-2.jpeg"
},
{
id: 3,
title: "Feed One Save One",
category: "food",
location: "Nigeria",
status: "active",
description: "Providing food relief packages, Free Medical Check-up, Fre School Items and Free acquisition of skills ",
impact: "8,500 patients treated, 15 villages served",
progress: 85,
image: "https://readdy.ai/api/search-image?query=mobile%2520health%2520clinic%2520van%2520with%2520medical%2520staff%2520treating%2520patients%2520in%2520rural%2520African%2520setting%2520with%2520medical%2520equipment%2520visible%2520and%2520patients%2520waiting%2520in%2520line%2520with%2520clean%2520simple%2520background&width=600&height=400&seq=203&orientation=landscape"
},
{
id: 4,
title: "Women's Microfinance Program",
category: "economic",
location: "Nigeria",
status: "In Progress",
description: "Providing microloans and business training to women entrepreneurs to start and grow small businesses.",
impact: "We want to empower several women build their business",
progress: 100,
image: "/Images/food-2.jpeg"
},
/* {
id: 5,
title: "Solar Power for Schools",
category: "education",
location: "Uganda",
status: "active",
description: "Installing solar panels in rural schools to provide reliable electricity for educational technology.",
impact: "12 schools equipped, 3,600 students benefiting",
progress: 65,
image: "https://readdy.ai/api/search-image?query=solar%2520panels%2520being%2520installed%2520on%2520school%2520rooftop%2520in%2520rural%2520African%2520setting%2520with%2520technicians%2520working%2520and%2520students%2520observing%2520the%2520installation%2520process%2520with%2520clean%2520simple%2520background&width=600&height=400&seq=205&orientation=landscape"
},
{
id: 6,
title: "Community Health Workers Training",
category: "healthcare",
location: "Ethiopia",
status: "completed",
description: "Training local community members as health workers to provide basic healthcare and education.",
impact: "120 health workers trained, 45 communities served",
progress: 100,
image: "https://readdy.ai/api/search-image?query=training%2520session%2520for%2520community%2520health%2520workers%2520in%2520African%2520setting%2520with%2520medical%2520professionals%2520teaching%2520local%2520trainees%2520with%2520medical%2520equipment%2520and%2520educational%2520materials%2520visible%2520with%2520clean%2520simple%2520background&width=600&height=400&seq=206&orientation=landscape"
}, */

/*
{ id: 7,
title: "Sustainable Agriculture Initiative",
category: "economic",
location: "Rwanda",
status: "active",
description: "Teaching sustainable farming techniques and providing equipment to improve crop yields and food security.",
impact: "850 farmers trained, 35% increase in crop yields",
progress: 70,
image: "https://readdy.ai/api/search-image?query=sustainable%2520farming%2520training%2520in%2520African%2520rural%2520setting%2520with%2520farmers%2520learning%2520new%2520agricultural%2520techniques%2520with%2520crops%2520growing%2520and%2520farming%2520equipment%2520visible%2520with%2520clean%2520simple%2520background&width=600&height=400&seq=207&orientation=landscape"
},
{
id: 8,
title: "Rainwater Harvesting Systems",
category: "water",
location: "Malawi",
status: "planned",
description: "Installing rainwater collection systems in villages to provide water for domestic use and small-scale agriculture.",
impact: "Projected to serve 5,000 people across 8 villages",
progress: 15,
image: "https://readdy.ai/api/search-image?query=rainwater%2520harvesting%2520system%2520installation%2520in%2520rural%2520African%2520village%2520with%2520water%2520collection%2520tanks%2520and%2520gutters%2520being%2520installed%2520on%2520buildings%2520with%2520community%2520members%2520helping%2520with%2520clean%2520simple%2520background&width=600&height=400&seq=208&orientation=landscape"
},
{
id: 9,
title: "Youth Tech Skills Program",
category: "education",
location: "Senegal",
status: "active",
description: "Training young people in coding, digital design, and other tech skills to improve employment opportunities.",
impact: "250 youth trained, 65% found employment",
progress: 80,
image: "https://readdy.ai/api/search-image?query=computer%2520lab%2520in%2520African%2520setting%2520with%2520young%2520people%2520learning%2520coding%2520and%2520digital%2520skills%2520with%2520instructors%2520helping%2520students%2520at%2520modern%2520computers%2520with%2520clean%2520simple%2520background&width=600&height=400&seq=209&orientation=landscape"
} */
];
// Featured projects (top 3)
const featuredProjects = projects.filter(project => [1, 2, 3].includes(project.id));
// Filter projects based on selected filters and search query
/* const filteredProjects = projects.filter(project => {
const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
const matchesLocation = activeLocation === 'all' || project.location === activeLocation;
const matchesStatus = activeStatus === 'all' || project.status === activeStatus;
const matchesSearch = searchQuery === '' ||
project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
project.description.toLowerCase().includes(searchQuery.toLowerCase());
return matchesCategory && matchesLocation && matchesStatus && matchesSearch;
}); */
// Get unique locations for filter
/* const locations = [...new Set(projects.map(project => project.location))];

const handleClearFilters = () => {
setActiveCategory('all');
setActiveLocation('all');
setActiveStatus('all');
setSearchQuery('');
};*/
return (
<div className="min-h-screen font-sans">
{/* Header */}
< Header/>
{/* Hero Section */}
<section className="relative pt-24 overflow-hidden" style={{ minHeight: '80vh' }}>
<div className="absolute inset-0 z-0">
<img
src="/Images/project.jpg"
alt="Kayode Philip Foundation Projects"
className="w-full h-full object-cover object-top"
/>
<div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-yellow-500/60"></div>
</div>
<div className="container mx-auto px-6 relative z-10 flex items-center h-full" style={{ minHeight: '70vh' }}>
<div className="max-w-2xl text-white">
<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Our Projects</h1>
<p className="text-xl mb-8">Discover the transformative initiatives we're implementing across Nigeria to empower communities and create lasting positive change.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
{/* <div className="text-4xl font-bold text-white mb-2">120+</div> */}
<div className="text-orange-300">Active Projects</div>
</div>
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
{/* <div className="text-4xl font-bold text-white mb-2"></div> */}
<div className="text-orange-300">Communities</div>
</div>
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
{/* <div className="text-4xl font-bold text-white mb-2">50K+</div> */}
<div className="text-orange-300">5000+ Lives Impacted</div>
</div>
</div>
</div>
</div>
</section>
{/* Featured Projects Section */}
<section className="py-20 bg-white">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-12">
<div>
<h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Projects</h2>
<p className="text-gray-600">Highlighting our most impactful current initiatives</p>
</div>
<a href="#all-projects" className="text-purple-700 hover:text-purple-800 font-medium flex items-center mt-4 md:mt-0 cursor-pointer">
View all projects <i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{featuredProjects.map(project => (
<div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 group">
<div className="relative h-56 overflow-hidden">
<img
src={project.image}
alt={project.title}
className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
/>
<div className="absolute top-4 left-4">
<span className={`text-xs font-bold uppercase py-1 px-2 rounded-full ${
project.category === 'education' ? 'bg-blue-500 text-white' :
project.category === 'healthcare' ? 'bg-red-500 text-white' :
project.category === 'water' ? 'bg-cyan-500 text-white' :
'bg-green-500 text-white'
}`}>
{project.category} 
</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
<span className={`text-xs font-medium py-1 px-2 rounded-full ${
project.status === 'active' ? 'bg-green-100 text-green-800' :
project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
'bg-yellow-100 text-yellow-800'
}`}>
{project.status.charAt(0).toUpperCase() + project.status.slice(1)}
</span>
</div>
<p className="text-gray-600 mb-4">{project.description}</p>
<div className="flex items-center text-sm text-gray-500 mb-4">
<i className="fas fa-map-marker-alt text-purple-700 mr-2"></i>
{project.location}
</div>
<div className="bg-gray-100 p-4 rounded-lg mb-4">
<div className="text-sm font-medium text-gray-800 mb-1">Impact</div>
<div className="text-gray-600">{project.impact}</div>
</div>
{project.status === 'active' && (
<div className="mb-4">
<div className="flex justify-between text-sm mb-1">
<span className="font-medium text-gray-800">Project Progress</span>
<span className="text-purple-700">{project.progress}%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div
className="bg-purple-700 h-2 rounded-full"
style={{ width: `${project.progress}%` }}
></div>
</div>
</div>
)}
<button className="w-full bg-purple-700 text-white py-2 !rounded-button hover:bg-purple-800 transition duration-300 cursor-pointer whitespace-nowrap">
View Details
</button>
</div>
</div>
))}
</div>
</div>
</section>
    {/* Project Filter Section */}
    
{/* Impact Statistics Section */}
<section className="py-20 bg-white">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Impact</h2>
<p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">The numbers behind our work demonstrate the scale and effectiveness of our projects across Africa.</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="bg-purple-50 p-8 rounded-lg text-center hover:shadow-md transition duration-300">
<div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
<i className="fas fa-graduation-cap text-3xl text-purple-700"></i>
</div>
<h3 className="text-4xl font-bold text-purple-700 mb-2">5,000+</h3>
<p className="text-gray-800 font-medium mb-2">Students Educated</p>
<p className="text-gray-600">Through our schools, scholarships, and educational programs.</p>
</div>
<div className="bg-blue-50 p-8 rounded-lg text-center hover:shadow-md transition duration-300">
<div className="inline-block p-4 rounded-full bg-blue-100 mb-6">
<i className="fas fa-heartbeat text-3xl text-blue-700"></i>
</div>
<h3 className="text-4xl font-bold text-blue-700 mb-2">2,500+</h3>
<p className="text-gray-800 font-medium mb-2">Patients Treated</p>
<p className="text-gray-600">Through our free medical care initiatives.</p>
</div>
<div className="bg-cyan-50 p-8 rounded-lg text-center hover:shadow-md transition duration-300">
<div className="inline-block p-4 rounded-full bg-cyan-100 mb-6">
<i className="fas fa-tint text-3xl text-cyan-700"></i>
</div>
<h3 className="text-4xl font-bold text-cyan-700 mb-2">5,000+</h3>
<p className="text-gray-800 font-medium mb-2">Food Relief Packages</p>
<p className="text-gray-600">Distribution of food items to families.</p>
</div>
<div className="bg-green-50 p-8 rounded-lg text-center hover:shadow-md transition duration-300">
<div className="inline-block p-4 rounded-full bg-green-100 mb-6">
<i className="fas fa-seedling text-3xl text-green-700"></i>
</div>
<h3 className="text-4xl font-bold text-green-700 mb-2">2,000+</h3>
<p className="text-gray-800 font-medium mb-2">Vocational Training</p>
<p className="text-gray-600">Through 2-weeks skill training, and scholarship for full training initiatives.</p>
</div>
</div>

</div>
</section>
{/* Footer */}
< Footer/>
</div>
);
};
export default Project