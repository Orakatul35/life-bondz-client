import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        { title: 'Verified Profiles', description: 'All members are verified to ensure genuine connections.' },
        { title: 'AI Matchmaking', description: 'Smart algorithms suggest the most compatible matches for you.' },
        { title: 'Privacy & Security', description: 'Your personal information is protected with top security standards.' },
        { title: '24/7 Support', description: 'Our dedicated team is available around the clock for assistance.' },
        { title: 'Community Focused', description: 'Matches filtered based on religion, caste, and interests.' },
        { title: 'Success Stories', description: 'Many happy couples have found their life partners through us.' },
    ];

    return (
        <section className="w-full bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
                    Why Choose LifeBondz?
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    LifeBondz offers a secure, trusted and professional platform to help you find
                    a meaningful and compatible life partner with ease.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 bg-rose-50">
                            <CheckCircle className="text-rose-600 w-8 h-8 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;