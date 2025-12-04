import React from "react";
import { useState } from "react";

const Testimonials: React.FC = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
    {
      quote: "The Kayode Philip Foundation made sure my family received the medical care we needed, right when we needed it. Their team treated us with warmth and respect, and we felt truly supported.",
      name: "Grace Adekanbi",
      location: "Iroko, Ogun state",
      
    },
    {
      quote: "Thanks to the Foundation, my children have the chance to learn and grow. The school supplies and encouragement they gave us made a real difference in our lives.",
      name: "Samuel Adeyemi",
      location: "Lagos, Nigeria",
      
    },
    {
      quote: "When food was scarce, the relief package from Kayode Philip Foundation brought us hope and comfort. We are grateful for their care and generosity.",
      name: "Fatima Oyewole",
      location: "Eleyele, Oyo state",
     
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

