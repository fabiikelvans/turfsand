import React from 'react';
import Image from "next/image";
import Link from "next/link";

function Partners() {
    return (
        <div className='px-8 md:px-20 py-20 md:py-24 mt-8'>
            <div className='space-y-8 mb-12'>
                <span className='text-primary font-semibold uppercase text-sm tracking-wider flex justify-center'> Partners </span>

                <div className='w-full md:w-[50%] mx-auto text-center space-y-6'>
                    <h1 className='text-3xl md:text-4xl font-extrabold '>
                        Trusted Companies
                    </h1>

                </div>

                <div className='flex flex-col md:flex-row justify-between items-center mx-auto w-[60%] space-y-4 mt-8'>
                    <Image src='/images/kenha.png' alt='Kenha' width={160} height={80} className='object-cover'/>
                    <Image src='/images/usaid.png' alt='Usaid' width={160} height={80} className='object-cover'/>
                    <Image src='/images/kura.png' alt='Kura' width={160} height={80} className='object-cover'/>
                </div>
            </div>

        </div>
    );
}

export default Partners;