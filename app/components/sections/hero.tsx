import React from 'react';
import {Button} from "@/app/components/ui/button";
import Image from "next/image";

function Hero() {
    return (
        <div className='px-8 md:px-20 py-4 mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='space-y-6 md:space-y-8'>
                <span className='text-primary uppercase text-xs md:text-sm tracking-wider'> Road Construction </span>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className='text-4xl md:text-6xl font-bold'> Building Tomorrow Together </h1>
                <div className='flex space-x-4 items-center'>
                    <div className='h-20 w-2 rounded-full bg-primary' />
                    <p className='text-muted-foreground'>
                        We possess the agility to assemble the right team to provide tailored construction solutions, a steadfast commitment to enhancing your business's bottom line, and the capacity to harness innovation to address evolving challenges and maintain your leading position in the industry.
                    </p>
                </div>

                <div className='space-y-4 md:space-x-4'>
                    <Button size='lg'> Get a Quote </Button>
                    <Button size='lg' variant='outline'> Browse our services </Button>
                </div>
            </div>


            <div className='h-full w-full relative '>
                <Image
                    src='https://images.unsplash.com/photo-1533153900060-648d6009083a?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJvYWQlMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D'
                    alt=''
                    fill
                    className='object-cover rounded-xl'
                />
            </div>
        </div>
    );
}

export default Hero;