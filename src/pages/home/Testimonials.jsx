import React from 'react';

const testimonials = [
    {
        name: 'Rahim & Ayesha',
        message: 'LifeBondz helped us find each other with complete trust and security. We are so grateful!',
        image: 'https://i.postimg.cc/T3ZJ0Mq6/groom-bride-pink-dress-hold-each-other-with-love-standing-room.jpg'
    },
    {
        name: 'Arif & Sumi',
        message: 'The AI matchmaking suggested perfect matches for us. Highly recommend LifeBondz!',
        image: 'https://i.postimg.cc/KcJ7Vgrr/affectionate-indian-couple-celebrating-propose-day-together.jpg'
    },
    {
        name: 'Rana & Farah',
        message: 'Professional and secure platform. Finding a life partner was never this smooth!',
        image: 'https://i.postimg.cc/LXmfQHJQ/wedding-walk-nature.jpg'
    },
];

const Testimonials = () => {
    return (
        <section className="w-full bg-rose-50 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
                    What Our Members Say
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Hear from couples who found their perfect match through LifeBondz.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300">
                            <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover mb-4" />
                            <p className="text-gray-700 text-center mb-2">"{testimonial.message}"</p>
                            <h4 className="text-lg font-semibold text-rose-600">{testimonial.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;