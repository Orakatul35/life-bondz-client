import React from 'react';

const Subscriptions = () => {
    return (
        <section className="w-full bg-rose-50 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
                    Choose Your Subscription Plan
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Unlock premium features and connect with verified matches for a meaningful matrimonial journey.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {/* Basic Plan */}
                    <div className="border border-rose-200 rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300 bg-white">
                        <h3 className="text-xl font-semibold text-rose-600 mb-4">Basic</h3>
                        <p className="text-gray-700 mb-4">Access to limited profiles & basic matching features.</p>
                        <p className="text-2xl font-bold text-gray-900 mb-6">$9.99 / month</p>
                        <button className="btn bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-xl shadow-md transition-all duration-300 w-full">
                            Subscribe
                        </button>
                    </div>

                    {/* Standard Plan */}
                    <div className="border-2 border-rose-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                        <h3 className="text-xl font-semibold text-rose-700 mb-4">Standard</h3>
                        <p className="text-gray-700 mb-4">Full profile access, messaging & match suggestions.</p>
                        <p className="text-2xl font-bold text-gray-900 mb-6">$19.99 / month</p>
                        <button className="btn bg-gradient-to-r from-rose-600 to-pink-500 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full">
                            Subscribe
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="border border-rose-200 rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300 bg-white">
                        <h3 className="text-xl font-semibold text-rose-600 mb-4">Premium</h3>
                        <p className="text-gray-700 mb-4">All Standard features plus priority support and premium match alerts.</p>
                        <p className="text-2xl font-bold text-gray-900 mb-6">$29.99 / month</p>
                        <button className="btn bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-xl shadow-md transition-all duration-300 w-full">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscriptions;