import React from 'react';
import Banner from './Banner';
import SuccessStory from './SuccessStory';
import RecentProfiles from './RecentProfiles';
import WhyChooeseUse from './WhyChooseUs';
import HowItWorks from './HowItWorks';
import Subsciptions from './Subscriptions';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <SuccessStory/>
            <RecentProfiles/>
            <Subsciptions/>
            <WhyChooeseUse/>
            <HowItWorks/>
            <Testimonials/>
        </div>
    );
};

export default Home;