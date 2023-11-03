import React from 'react';

function AboutUs() {
    return (
        <div className='px-8 md:px-20 py-4 my-20 md:my-40 grid grid-cols-1 md:grid-cols-2 gap-8' id='about'>
            <div className='space-y-6 md:space-y-8'>
                <span className='text-primary uppercase text-xs md:text-sm tracking-wider'> ABOUT US </span>
                <h1 className='text-3xl md:text-5xl font-bold w-full md:w-[80%]'>
                    Collaborating With Organizations To Cultivate Thriving Communities
                </h1>
            </div>

            <div className='text-muted-foreground space-y-6 mt-4 md:mt-14'>
                <p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    It's clear that your organization is committed to providing comprehensive construction solutions. You emphasize the importance of mobilizing the right resources and experts to bring value and success to each project, regardless of location or scope. Your expertise in utilizing advanced technologies and sustainable construction practices sets you apart as an industry leader, and you prioritize helping clients and partners leave a lasting legacy. This holistic approach to construction is undoubtedly a valuable asset in today's dynamic industry landscape.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;