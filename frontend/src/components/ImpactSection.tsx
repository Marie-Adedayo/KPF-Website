import React from "react";

const ImpactSection : React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Our Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                    <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
                        <i className="fas fa-hands-helping text-3xl text-purple-700"></i>
                    </div>
                    <h3 className="text-4xl font-bold text-purple-700 mb-2">10+</h3>
                    <p className="text-gray-600">Projects Completed</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                    <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
                        <i className="fas fa-users text-3xl text-purple-700"></i>
                    </div>
                    <h3 className="text-4xl font-bold text-purple-700 mb-2">15,000+</h3>
                    <p className="text-gray-600">Lives Impacted</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                    <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
                        <i className="fas fa-globe-africa text-3xl text-purple-700"></i>
                    </div>
                    <h3 className="text-4xl font-bold text-purple-700 mb-2">11+</h3>
                    <p className="text-gray-600">Communities Served</p>
                    </div>
                 {/*<div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                    <div className="inline-block p-4 rounded-full bg-purple-100 mb-6">
                        <i className="fas fa-school text-3xl text-purple-700"></i>
                    </div>
                    <h3 className="text-4xl font-bold text-purple-700 mb-2">75</h3>
                    <p className="text-gray-600">Schools Built</p>
                    </div> */}
                </div>
            </div>
      </section>

    )

}
export default ImpactSection;

