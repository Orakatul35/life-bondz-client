import React from 'react';
import { User, Search, MessageCircle, Heart } from 'lucide-react';

const steps = [
    { icon: <User className="w-10 h-10 text-rose-600" />, title: 'Create Profile', description: 'Sign up and create your detailed profile to showcase your personality and preferences.' },
    { icon: <Search className="w-10 h-10 text-rose-600" />, title: 'Find Matches', description: 'Use our advanced search and AI matchmaking to find compatible matches.' },
    { icon: <MessageCircle className="w-10 h-10 text-rose-600" />, title: 'Connect & Communicate', description: 'Send messages and interact safely with your potential partners.' },
    { icon: <Heart className="w-10 h-10 text-rose-600" />, title: 'Meet Your Life Partner', description: 'Build meaningful connections leading to a lifelong relationship.' },
];

const HowItWorks = () => {
    return (
        <section className="w-full bg-rose-50 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
                    How LifeBondz Works
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Our platform is designed to simplify your journey to finding the perfect life partner with trusted, safe, and meaningful interactions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300">
                            {step.icon}
                            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">{step.title}</h3>
                            <p className="text-gray-600 text-center">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;