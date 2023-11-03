import React from 'react';
import TestimonialItem from "@/app/components/sections/testimonial-item";

function Testimonials() {
    return (
        <div className='px-8 md:px-20 py-20 md:py-24 mt-8' id='testimonials'>
            <div className='space-y-8 mb-12'>
                <span className='text-primary font-semibold uppercase text-xs md:text-sm tracking-wider flex justify-center'> Testimonials </span>

                <div className='w-full md:w-[50%] mx-auto text-center space-y-6'>
                    <h1 className='text-3xl md:text-4xl font-extrabold '>
                        What Our Clients Say
                    </h1>

                    <p className='text-center text-muted-foreground normal-case'>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Discover What Our Satisfied Clients Have to Say About Their Experience with TurfSand. From Vision to Reality, We're Committed to Delivering Excellence.
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <TestimonialItem
                    title='“Remarkable efficiency and precision were ”'
                    content="Choosing TurfSand was the best decision we made for our construction project. Their team's efficiency and precision were remarkable. They transformed our space into something beyond our imagination. We couldn't be happier with the outcome"
                    author="Eric Maina"
                    designation="Director"
                />

                <TestimonialItem
                    title='“Exceeded Our Expectations”'
                    content="Professionalism, expertise, and a commitment to excellence - that's what TurfSand brought to the table. From start to finish, they exceeded our expectations. The quality of their work speaks for itself. We highly recommend [Company Name] for any construction endeavor"
                    author="Michael Kosgei"
                    designation="Manager"
                />
            </div>

        </div>
    );
}

export default Testimonials;