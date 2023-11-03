import React from 'react';
import Image from "next/image";
import {Phone} from "lucide-react";
import {Button} from "@/app/components/ui/button";

function Ready() {
    return (
        <div className='bg-primary relative text-background px-8 md:px-20 py-20 md:py-36 '>

            <div className='flex flex-col items-center text-center space-y-8 w-full md:w-[60%] mx-auto'>
                <h1 className='text-4xl md:text-5xl font-bold '>
                    Ready To Work Together
                </h1>
                <p className='text-background/80'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Embark on your construction journey with us. Whether it's a new project, renovation, or expansion, our experienced team is ready to bring your vision to life. Request a quote today and let's turn your ideas into reality!
                </p>

                <Button size='lg' className='bg-background font-semibold text-primary hover:bg-foreground hover:text-background'>Get Stared</Button>



            </div>
        </div>

    );
}

export default Ready;