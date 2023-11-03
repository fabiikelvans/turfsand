import React from 'react';
import Image from "next/image";
import {Button} from "@/app/components/ui/button";
import {Mail, Phone} from "lucide-react";

function CTA() {
    return (
        <div id='contact' className='bg-primary relative text-background grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-20 py-20 md:py-36'>
            <div>
                <div className='h-full w-full md:w-[80%] relative '>
                    <Image
                        src='https://images.unsplash.com/photo-1533153900060-648d6009083a?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJvYWQlMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D'
                        alt=''
                        fill
                        className='object-cover rounded-xl'
                    />
                </div>
            </div>

            <div className='space-y-8'>
                <h1 className='text-4xl md:text-5xl font-bold w-full md:w-[80%]'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Let's Build Your Vision Together
                </h1>
                <p className='text-background/80'>
                    Explore Our Expert Construction Services and Begin Your Project Journey.
                </p>
                <p>Get Started Now!</p>

                <div className='flex items-center space-x-4'>
                    <Mail className='h-6 md:h-8 w-6 md:w-8'/>
                    <h3 className='text-xl md:text-2xl font-bold'>info@turfsand.co.ke</h3>
                </div>

                <div className='flex items-center space-x-4'>
                    <Phone className='h-6 md:h-8 w-6 md:w-8'/>
                    <h3 className='text-xl md:text-2xl font-bold'>+254 721 627 357</h3>
                </div>


            </div>
        </div>
    );
}

export default CTA;