
import React from 'react';
import Image from "next/image";
import {Button} from "@/app/components/ui/button";

function Experience() {
    return (
        <div className='bg-foreground text-background grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-20 py-20 md:py-36'>
            <div>
                <div className='h-full w-[80%] relative '>
                    <Image
                        src='https://images.unsplash.com/photo-1533153900060-648d6009083a?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJvYWQlMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D'
                        alt=''
                        fill
                        className='object-cover rounded-xl'
                    />
                </div>
            </div>

            <div className='space-y-6 md:space-y-8'>
                <span className='text-primary uppercase text-xs md:text-sm tracking-wider'>Our Experience</span>
                <h1 className='text-3xl md:text-5xl font-bold w-full md:w-[80%]'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Let's Build the Future Together
                </h1>
                <p className='text-background/80'>
                    From the inception of our company, we have honed our skills in delivering a diverse range of projects, from intricate residential developments to expansive commercial complexes. Each endeavor is a testament to our meticulous planning, superior craftsmanship, and relentless pursuit of quality.                </p>

                <div className='flex space-x-6 md:space-x-12'>
                    <div className='flex flex-col items-center space-y-2'>
                        <h1 className='text-3xl md:text-4xl font-bold '>25<span className='text-primary'>+</span></h1>
                        <span className='text-xs md:text-sm text-background/80'>Year Experience</span>
                    </div>
                    <div className='flex flex-col items-center space-y-2'>
                        <h1 className='text-3xl md:text-4xl font-bold '>500<span className='text-primary'>+</span></h1>
                        <span className='text-xs md:text-sm text-background/80'>Happy Clients</span>
                    </div>
                    <div className='flex flex-col items-center space-y-2'>
                        <h1 className='text-3xl md:text-4xl font-bold '>20<span className='text-primary'>+</span></h1>
                        <span className='text-xs md:text-sm text-background/80'>Qualified Experts</span>
                    </div>
                </div>

                <Button size='lg'>Get a Quote</Button>

            </div>
        </div>
    );
}

export default Experience;