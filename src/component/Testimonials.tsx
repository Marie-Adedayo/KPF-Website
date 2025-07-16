import React from "react";
import { useState } from "react";

const Testimonials: React.FC = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
    {
      quote: "The Kayode Philip Foundation transformed our community with clean water access. Their dedication to sustainable solutions has improved countless lives.",
      name: "Sarah Johnson",
      location: "Nairobi, Kenya",
      image: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20an%20African%20woman%20in%20her%2030s%20with%20short%20hair%20and%20a%20warm%20smile%20wearing%20professional%20attire%20against%20a%20neutral%20background%20with%20soft%20lighting%20and%20natural%20expression&width=100&height=100&seq=1&orientation=squarish"
    },
    {
      quote: "Thanks to the educational programs provided by the Foundation, my children now have access to quality education and resources they never had before.",
      name: "Michael Okafor",
      location: "Lagos, Nigeria",
      image: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20an%20African%20man%20in%20his%2040s%20with%20glasses%20and%20a%20friendly%20smile%20wearing%20a%20casual%20button-up%20shirt%20against%20a%20neutral%20background%20with%20soft%20lighting%20and%20authentic%20expression&width=100&height=100&seq=2&orientation=squarish"
    },
    {
      quote: "The healthcare initiative launched in our village has saved lives. The Foundation's commitment to sustainable development is truly inspiring.",
      name: "Amina Diallo",
      location: "Accra, Ghana",
      image: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20African%20woman%20with%20braided%20hair%20and%20a%20bright%20smile%20wearing%20colorful%20traditional%20clothing%20against%20a%20neutral%20background%20with%20soft%20lighting%20and%20genuine%20expression&width=100&height=100&seq=3&orientation=squarish"
    }
  ];
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

    return (
        <section className="py-20 bg-gradient-to-r from-yellow-400/20 to-orange-300/20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Voices of Impact</h2>
                <div className="max-w-4xl mx-auto relative">
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative z-10">
                        <div className="absolute top-0 left-10 transform -translate-y-1/2">
                            <div className="bg-purple-700 rounded-full p-4 shadow-lg">
                                <i className="fas fa-quote-right text-white text-xl"></i>
                            </div>
                        </div>
                        <div className="pt-6">
                            <p className="text-xl text-gray-700 italic mb-8">{testimonials[activeTestimonial].quote}</p>
                            <div className="flex items-center">
                                <img
                                    src={testimonials[activeTestimonial].image}
                                    alt={testimonials[activeTestimonial].name}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-800">{testimonials[activeTestimonial].name}</h4>
                                    <p className="text-gray-600">{testimonials[activeTestimonial].location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                    <button
            onClick={prevTestimonial}
            className="mx-2 bg-white text-purple-700 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-purple-50 transition duration-300 cursor-pointer whitespace-nowrap !rounded-button"
            >
            <i className="fas fa-chevron-left"></i>
            </button>
            {testimonials.map((_, index) => (
            <button
            key={index}
            onClick={() => setActiveTestimonial(index)}
            className={`mx-1 w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-purple-700' : 'bg-gray-300'} cursor-pointer whitespace-nowrap !rounded-button`}
            ></button>
            ))}
            <button
            onClick={nextTestimonial}
            className="mx-2 bg-white text-purple-700 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-purple-50 transition duration-300 cursor-pointer whitespace-nowrap !rounded-button"
            >
            <i className="fas fa-chevron-right"></i>
            </button>
            </div>
            </div>
            </div>
    </section>
    )
}
export default Testimonials;