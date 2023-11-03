import React from 'react';
import Link from "next/link";
import {Mail, MapPin, Phone} from "lucide-react";
import Image from "next/image";

function Footer() {
    return (
        <div>
            <div className='px-8 md:px-20 py-20 md:py-24 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                <div className='space-y-2'>
                    <div className="relative">
                        <Image src='/logo.svg' alt='logo' width={160} height={80} className='object-cover'/>
                    </div>
                    <br/>
                    <p className='text-sm'>
                        We are BBB accredited paving company with a mission to keep our road available. Join us and see the great work.
                    </p>
                    <p className='text-sm mt-4 font-semibold'>Open Monday to Saturday From 7 AM to 6 PM</p>
                </div>

                <div className='space-y-2'>
                    <h3 className='text-xl font-bold mb-4 md:mb-6'>Useful Links</h3>
                    <ul className='space-y-2 text-[15px] font-medium'>
                        <li><Link href='#home'>Home</Link></li>
                        <li><Link href='#about'>About Us</Link></li>
                        <li><Link href='#services'>Services</Link></li>
                        <li><Link href='#testimonials'>Testimonials</Link></li>
                    </ul>
                </div>

                <div className='space-y-2'>
                    <h3 className='text-xl font-bold mb-4 md:mb-6'>Contact Information</h3>
                    <div className='space-y-4'>
                        <div className='flex items-center space-x-2'>
                            <Mail className='h-4 w-4 text-primary'/>
                            <span>info@turfsand.co.ke</span>
                        </div>

                        <div className='flex items-center space-x-2'>
                            <Phone className='h-4 w-4 text-primary'/>
                            <span>+254 721 159 492</span>
                        </div>

                        <div className='flex items-start space-x-2'>
                            <MapPin className='h-5 w-5 text-primary mt-1'/>
                            <span>23 Industrial Area, Nairobi</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-foreground text-background py-4 md:py-6 flex justify-center'>
                <span className='text-xs md:text-sm text-muted-foreground'>© 2023 TurfSand | All Rights Reserved.</span>
            </div>
        </div>
    );
}

export default Footer;