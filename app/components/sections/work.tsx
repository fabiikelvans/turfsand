import React from 'react';
import Image from "next/image";
import {Button} from "@/app/components/ui/button";

function Work() {
    return (
        <div className='bg-foreground text-background grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-20 py-20 md:py-36'>

            <div className='space-y-8'>
                <span className='text-primary uppercase text-sm tracking-wider'>Our Work</span>
                <h1 className='text-4xl md:text-5xl font-bold w-full md:w-[80%]'>
                    Elevating Construction Excellence
                </h1>
                <p className='text-background/80 w-full md:w-[80%]'>
                    With a legacy built on integrity, craftsmanship, and a relentless pursuit of excellence, Turfsand stands as a trusted partner in construction. From concept to completion, we bring visions to life, creating spaces that inspire and endure. Experience the difference of working with true construction artisans.
                </p>

                <Button size='lg'>Get a Quote</Button>

            </div>

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
        </div>
    );
}

export default Work;