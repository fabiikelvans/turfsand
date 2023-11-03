import React from 'react';
import {Award, Gem, HeartHandshake, ShieldCheck} from "lucide-react";

function Values() {
    return (
        <div className='px-8 md:px-20 py-20 md:py-24 mt-6 md:mt-8'>
            <div className='pb-8 md:pb-14'>
                <span className='text-primary font-semibold uppercase text-xs md:text-sm tracking-wider flex justify-center'> Our Values </span>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 space-x-4'>
                <div className='flex flex-col items-center text-center space-y-3 md:space-y-4'>
                    <Award className='h-14 md:h-16 w-14 md:w-16 text-primary stroke-1'/>
                    <h3 className='text-lg font-bold'>Excellence</h3>
                    <p className='text-muted-foreground text-sm'>
                        Our goal is to cultivate strong, collaborative partnerships with every client, consistently prioritizing their complete satisfaction.
                    </p>
                </div>

                <div className='flex flex-col items-center text-center space-y-3 md:space-y-4'>
                    <Gem className='h-14 md:h-16 w-14 md:w-16 text-primary stroke-1'/>
                    <h3 className='text-lg font-bold'>Expertise</h3>
                    <p className='text-muted-foreground text-sm'>
                        We comprise a team of exceptionally proficient engineers and experts known for their reliability and ability to effectively complete projects
                    </p>
                </div>

                <div className='flex flex-col items-center text-center space-y-3 md:space-y-4'>
                    <HeartHandshake className='h-14 md:h-16 w-14 md:w-16 text-primary stroke-1'/>
                    <h3 className='text-lg font-bold'>Trusted</h3>
                    <p className='text-muted-foreground text-sm'>
                        Our objective is to establish strong, productive relationships with each of our clients, achieved through consistently ensuring their complete satisfaction.
                    </p>
                </div>

                <div className='flex flex-col items-center text-center space-y-3 md:space-y-4'>
                    <ShieldCheck className='h-14 md:h-16 w-14 md:w-16 text-primary stroke-1'/>
                    <h3 className='text-lg font-bold'>Certified</h3>
                    <p className='text-muted-foreground text-sm'>
                        We hold official registration and accreditation from the National Construction Authority, demonstrating our commitment to compliance with international standards.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Values;