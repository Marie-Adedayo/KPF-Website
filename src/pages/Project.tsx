import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
const Project: React.FC = () => {
const [isScrolled, setIsScrolled] = useState(false);
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
description: "Building a modern school facility with technology labs to serve 500 children in underserved communities.",
impact: "500 students enrolled, 20 teachers employed",
progress: 75,
image: "https://readdy.ai/api/search-image?query=modern%2520school%2520building%2520in%2520African%2520setting%2520with%2520students%2520in%2520uniform%2520entering%2520bright%2520colorful%2520classrooms%2520with%2520technology%2520equipment%2520visible%2520and%2520teachers%2520guiding%2520students%2520with%2520clean%2520simple%2520background&width=600&height=400&seq=201&orientation=landscape"
},
{
id: 2,
title: "Clean Water Initiative",
category: "water",
location: "Kenya",
status: "active",
description: "Installing water purification systems and wells to provide clean drinking water to rural communities.",
impact: "12,000 people with access to clean water",
progress: 60,
image: "https://readdy.ai/api/search-image?query=water%2520well%2520and%2520purification%2520system%2520installation%2520in%2520rural%2520African%2520village%2520with%2520community%2520members%2520collecting%2520clean%2520water%2520and%2520celebration%2520around%2520new%2520infrastructure%2520with%2520clean%2520simple%2520background&width=600&height=400&seq=202&orientation=landscape"
},
{
id: 3,
title: "Mobile Health Clinics",
category: "healthcare",
location: "Ghana",
status: "active",
description: "Deploying mobile health clinics to provide essential medical services to remote villages.",
impact: "8,500 patients treated, 15 villages served",
progress: 85,
image: "https://readdy.ai/api/search-image?query=mobile%2520health%2520clinic%2520van%2520with%2520medical%2520staff%2520treating%2520patients%2520in%2520rural%2520African%2520setting%2520with%2520medical%2520equipment%2520visible%2520and%2520patients%2520waiting%2520in%2520line%2520with%2520clean%2520simple%2520background&width=600&height=400&seq=203&orientation=landscape"
},
{
id: 4,
title: "Women's Microfinance Program",
category: "economic",
location: "Tanzania",
status: "completed",
description: "Providing microloans and business training to women entrepreneurs to start and grow small businesses.",
impact: "350 businesses launched, $125,000 in loans distributed",
progress: 100,
image: "https://readdy.ai/api/search-image?query=group%2520of%2520African%2520women%2520entrepreneurs%2520receiving%2520business%2520training%2520and%2520microloans%2520in%2520community%2520center%2520with%2520small%2520business%2520products%2520displayed%2520and%2520financial%2520training%2520materials%2520visible%2520with%2520clean%2520simple%2520background&width=600&height=400&seq=204&orientation=landscape"
},
{
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
},
{
id: 7,
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
}
];
// Featured projects (top 3)
const featuredProjects = projects.filter(project => [1, 2, 3].includes(project.id));
// Filter projects based on selected filters and search query
const filteredProjects = projects.filter(project => {
const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
const matchesLocation = activeLocation === 'all' || project.location === activeLocation;
const matchesStatus = activeStatus === 'all' || project.status === activeStatus;
const matchesSearch = searchQuery === '' ||
project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
project.description.toLowerCase().includes(searchQuery.toLowerCase());
return matchesCategory && matchesLocation && matchesStatus && matchesSearch;
});
// Get unique locations for filter
const locations = [...new Set(projects.map(project => project.location))];
useEffect(() => {
const handleScroll = () => {
if (window.scrollY > 50) {
setIsScrolled(true);
} else {
setIsScrolled(false);
}
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);
const handleClearFilters = () => {
setActiveCategory('all');
setActiveLocation('all');
setActiveStatus('all');
setSearchQuery('');
};
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
<p className="text-xl mb-8">Discover the transformative initiatives we're implementing across Africa to empower communities and create lasting positive change.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
<div className="text-4xl font-bold text-white mb-2">120+</div>
<div className="text-orange-300">Active Projects</div>
</div>
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
<div className="text-4xl font-bold text-white mb-2">12</div>
<div className="text-orange-300">Countries</div>
</div>
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
<div className="text-4xl font-bold text-white mb-2">50K+</div>
<div className="text-orange-300">Lives Impacted</div>
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
<section id="all-projects" className="py-16 bg-gray-50">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Explore All Projects</h2>
<div className="bg-white p-6 rounded-lg shadow-md mb-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
{/* Category Filter */}
<div className="relative">
<button
onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
className="w-full flex items-center justify-between bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 cursor-pointer whitespace-nowrap !rounded-button"
>
<span>
<i className="fas fa-tags text-purple-700 mr-2"></i>
{activeCategory === 'all' ? 'All Categories' :
activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
</span>
<i className="fas fa-chevron-down text-gray-500"></i>
</button>
{showCategoryDropdown && (
<div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
<ul>
<li
className={`px-4 py-2 hover:bg-gray-50 cursor-pointer ${activeCategory === 'all' ? 'bg-purple-50 text-purple-700' : ''}`}
onClick={() => {
setActiveCategory('all');
setShowCategoryDropdown(false);
}}
>
All Categories
</li>
<li
className={`px-4 py-2 hover:bg-gray-50 cursor-pointer ${activeCategory === 'education' ? 'bg-purple-50 text-purple-700' : ''}`}
onClick={() => {
setActiveCategory('education');
setShowCategoryDropdown(false);
}}
>
Education
</li>
<li
className={`px-4 py-2 hover:bg-gray-50 cursor-pointer ${activeCategory === 'healthcare' ? 'bg-purple-50 text-purple-700' : ''}`}
onClick={() => {
setActiveCategory('healthcare');
setShowCategoryDropdown(false);
}}
>
Healthcare
</li>
<li
className={`px-4 py-2 hover:bg-gray-50 cursor-pointer ${activeCategory === 'water' ? 'bg-purple-50 text-purple-700' : ''}`}
onClick={() => {
setActiveCategory('water');
setShowCategoryDropdown(false);
}}
>
Water Access
</li>
<li
className={`px-4 py-2 hover:bg-gray-50 cursor-pointer ${activeCategory === 'economic' ? 'bg-purple-50 text-purple-700' : ''}`}
onClick={() => {
setActiveCategory('economic');
setShowCategoryDropdown(false);
}}
>
Economic Empowerment
</li>
</ul>
</div>
)}
</div>
{/* Location Filter */}
<div className="relative">
<button
onClick={() => setShowLocationDropdown(!showLocationDropdown)}
className="w-full flex items-center justify-between bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 cursor-pointer whitespace-nowrap !rounded-button"
>
<span>
<i className="fas fa-map-marker-alt text-purple-700 mr-2"></i>
{activeLocation === 'all' ? 'All Locations' : activeLocation}
</span>
<i className="fas fa-chevron-down text-gray-500"></i>
</button>
{showLocationDropdown && (
<div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
<ul>
<li
className={`px-4 py-2 hover:bg-gray-50 cursor-pointer ${activeLocation === 'all' ? 'bg-purple-50 text-purple-700' : ''}`}
onClick={() => {
setActiveLocation('all');
setShowLocationDropdown(false);
}}
>
All Locations
</li>
{locations.map(location => (
<li
key={location}
className={`px-4 py-2 hover:bg-gray-50 cursor-pointer ${activeLocation === location ? 'bg-purple-50 text-purple-700' : ''}`}
onClick={() => {
setActiveLocation(location);
setShowLocationDropdown(false);
}}
>
{location}
</li>
))}
</ul>
</div>
)}
</div>
{/* Status Filter */}
<div className="relative">
<button
onClick={() => setShowStatusDropdown(!showStatusDropdown)}
className="w-full flex items-center justify-between bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 cursor-pointer whitespace-nowrap !rounded-button"
>
<span>
<i className="fas fa-tasks text-purple-700 mr-2"></i>
{activeStatus === 'all' ? 'All Statuses' :
activeStatus.charAt(0).toUpperCase() + activeStatus.slice(1)}
</span>
<i className="fas fa-chevron-down text-gray-500"></i>
</button>
{showStatusDropdown && (
<div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
<ul>
<li
className={`px-4 py-2 hover:bg-gray-50 cursor-pointer ${activeStatus === 'all' ? 'bg-purple-50 text-purple-700' : ''}`}
onClick={() => {
setActiveStatus('all');
setShowStatusDropdown(false);
}}
>
All Statuses
</li>
<li
className={`px-4 py-2 hover:bg-gray-50 cursor-pointer ${activeStatus === 'active' ? 'bg-purple-50 text-purple-700' : ''}`}
onClick={() => {
setActiveStatus('active');
setShowStatusDropdown(false);
}}
>
Active
</li>
<li
className={`px-4 py-2 hover:bg-gray-50 cursor-pointer ${activeStatus === 'completed' ? 'bg-purple-50 text-purple-700' : ''}`}
onClick={() => {
setActiveStatus('completed');
setShowStatusDropdown(false);
}}
>
Completed
</li>
<li
className={`px-4 py-2 hover:bg-gray-50 cursor-pointer ${activeStatus === 'planned' ? 'bg-purple-50 text-purple-700' : ''}`}
onClick={() => {
setActiveStatus('planned');
setShowStatusDropdown(false);
}}
>
Planned
</li>
</ul>
</div>
)}
</div>
{/* Search */}
<div className="relative">
<div className="relative">
<input
type="text"
placeholder="Search projects..."
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
/>
<div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
<i className="fas fa-search"></i>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center mt-6">
<div className="text-gray-600 mb-4 md:mb-0">
Showing <span className="font-medium text-purple-700">{filteredProjects.length}</span> projects
</div>
<button
onClick={handleClearFilters}
className="text-purple-700 hover:text-purple-800 font-medium cursor-pointer whitespace-nowrap !rounded-button"
>
<i className="fas fa-times-circle mr-2"></i> Clear Filters
</button>
</div>
</div>
{/* Projects Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{filteredProjects.map(project => (
<div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 group">
<div className="relative h-48 overflow-hidden">
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
<h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
<span className={`text-xs font-medium py-1 px-2 rounded-full ${
project.status === 'active' ? 'bg-green-100 text-green-800' :
project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
'bg-yellow-100 text-yellow-800'
}`}>
{project.status.charAt(0).toUpperCase() + project.status.slice(1)}
</span>
</div>
<div className="flex items-center text-sm text-gray-500 mb-3">
<i className="fas fa-map-marker-alt text-purple-700 mr-2"></i>
{project.location}
</div>
<p className="text-gray-600 text-sm mb-4">{project.description}</p>
<div className="text-sm text-gray-700 mb-4">
<span className="font-medium">Impact:</span> {project.impact}
</div>
{project.status === 'active' && (
<div className="mb-4">
<div className="flex justify-between text-xs mb-1">
<span className="font-medium text-gray-800">Progress</span>
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
<button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 !rounded-button transition duration-300 cursor-pointer whitespace-nowrap">
View Details
</button>
</div>
</div>
))}
</div>
{filteredProjects.length === 0 && (
<div className="text-center py-12">
<div className="text-5xl text-gray-300 mb-4">
<i className="fas fa-search"></i>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-2">No projects found</h3>
<p className="text-gray-600">Try adjusting your filters or search criteria</p>
<button
onClick={handleClearFilters}
className="mt-4 bg-purple-700 text-white px-6 py-2 !rounded-button hover:bg-purple-800 transition duration-300 cursor-pointer whitespace-nowrap"
>
Clear All Filters
</button>
</div>
)}
</div>
</section>
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
<h3 className="text-4xl font-bold text-purple-700 mb-2">15,000+</h3>
<p className="text-gray-800 font-medium mb-2">Students Educated</p>
<p className="text-gray-600">Through our schools, scholarships, and educational programs.</p>
</div>
<div className="bg-blue-50 p-8 rounded-lg text-center hover:shadow-md transition duration-300">
<div className="inline-block p-4 rounded-full bg-blue-100 mb-6">
<i className="fas fa-heartbeat text-3xl text-blue-700"></i>
</div>
<h3 className="text-4xl font-bold text-blue-700 mb-2">22,500+</h3>
<p className="text-gray-800 font-medium mb-2">Patients Treated</p>
<p className="text-gray-600">Through our healthcare initiatives and mobile clinics.</p>
</div>
<div className="bg-cyan-50 p-8 rounded-lg text-center hover:shadow-md transition duration-300">
<div className="inline-block p-4 rounded-full bg-cyan-100 mb-6">
<i className="fas fa-tint text-3xl text-cyan-700"></i>
</div>
<h3 className="text-4xl font-bold text-cyan-700 mb-2">32,000+</h3>
<p className="text-gray-800 font-medium mb-2">Clean Water Access</p>
<p className="text-gray-600">People now have access to clean, safe drinking water.</p>
</div>
<div className="bg-green-50 p-8 rounded-lg text-center hover:shadow-md transition duration-300">
<div className="inline-block p-4 rounded-full bg-green-100 mb-6">
<i className="fas fa-seedling text-3xl text-green-700"></i>
</div>
<h3 className="text-4xl font-bold text-green-700 mb-2">5,200+</h3>
<p className="text-gray-800 font-medium mb-2">Businesses Supported</p>
<p className="text-gray-600">Through microloans, training, and economic initiatives.</p>
</div>
</div>
<div className="mt-16 text-center">
<a href="https://readdy.ai/home/c23ea3ce-3d5b-4114-80f9-5b95c12ad4aa/605ecc5b-e681-4d0b-beb3-20b9833b6d49" data-readdy="true" className="inline-block bg-purple-700 text-white px-8 py-3 !rounded-button hover:bg-purple-800 transition duration-300 font-medium cursor-pointer whitespace-nowrap">
View Impact Report
</a>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-purple-900 text-white pt-16 pb-8">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<div>
<h3 className="text-2xl font-bold mb-6">Kayode Philip Foundation</h3>
<p className="text-purple-200 mb-6">Empowering communities and transforming lives through sustainable development initiatives across Africa.</p>
<div className="flex space-x-4">
<a href="#" className="bg-purple-800 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="bg-purple-800 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="bg-purple-800 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="#" className="bg-purple-800 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer">
<i className="fab fa-linkedin-in"></i>
</a>
</div>
</div>
<div>
<h4 className="text-lg font-bold mb-6">Quick Links</h4>
<ul className="space-y-3">
<li><a href="https://readdy.ai/home/c23ea3ce-3d5b-4114-80f9-5b95c12ad4aa/0a5a6d29-9cc6-4601-81d7-21e65a1da9c7" data-readdy="true" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">Home</a></li>
<li><a href="https://readdy.ai/home/c23ea3ce-3d5b-4114-80f9-5b95c12ad4aa/c406457b-dec5-4f86-9dba-711b93911c5d" data-readdy="true" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">About Us</a></li>
<li><a href="#" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">Our Projects</a></li>
<li><a href="#" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">News & Updates</a></li>
<li><a href="#" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">Impact Reports</a></li>
<li><a href="#" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">Get Involved</a></li>
<li><a href="#" className="text-purple-200 hover:text-white transition duration-300 cursor-pointer">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-bold mb-6">Contact</h4>
<ul className="space-y-3">
<li className="flex items-start">
<i className="fas fa-map-marker-alt mt-1 mr-3 text-orange-400"></i>
<span className="text-purple-200">123 Foundation Street, Lagos, Nigeria</span>
</li>
<li className="flex items-center">
<i className="fas fa-phone-alt mr-3 text-orange-400"></i>
<span className="text-purple-200">+234 123 456 7890</span>
</li>
<li className="flex items-center">
<i className="fas fa-envelope mr-3 text-orange-400"></i>
<span className="text-purple-200">info@kayodephilipfoundation.org</span>
</li>
</ul>
</div>
<div>
<h4 className="text-lg font-bold mb-6">Support Us</h4>
<p className="text-purple-200 mb-4">Your donation makes a difference in the lives of communities across Africa.</p>
<a href="#" className="bg-orange-500 text-white px-6 py-3 !rounded-button hover:bg-orange-600 transition duration-300 inline-block font-medium cursor-pointer whitespace-nowrap">
Donate Now
</a>
<div className="mt-6">
<p className="text-sm text-purple-300 mb-2">Secure Payment Options</p>
<div className="flex space-x-3">
<i className="fab fa-cc-visa text-2xl text-gray-300"></i>
<i className="fab fa-cc-mastercard text-2xl text-gray-300"></i>
<i className="fab fa-cc-paypal text-2xl text-gray-300"></i>
<i className="fab fa-cc-apple-pay text-2xl text-gray-300"></i>
</div>
</div>
</div>
</div>
<div className="border-t border-purple-800 mt-12 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-purple-300 text-sm mb-4 md:mb-0">© 2025 Kayode Philip Foundation. All rights reserved.</p>
<div className="flex space-x-6">
<a href="#" className="text-purple-300 hover:text-white text-sm transition duration-300 cursor-pointer">Privacy Policy</a>
<a href="#" className="text-purple-300 hover:text-white text-sm transition duration-300 cursor-pointer">Terms of Service</a>
<a href="#" className="text-purple-300 hover:text-white text-sm transition duration-300 cursor-pointer">Cookie Policy</a>
</div>
</div>
</div>
</div>
</footer>
</div>
);
};
export default Project