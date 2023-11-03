"use client";

import React from 'react';
import Link from "next/link";
import {Facebook, Linkedin, Mail, MapPin, Phone, Twitter} from "lucide-react";

function Topbar() {
    return (
        <div className='px-4 md:px-20 py-4 hidden md:flex justify-between items-center border-b border-b-muted-foreground/30 -z-10'>
            <div className='flex justify-start md:justify-between flex-row  md:items-center space-x-4 md:space-x-6 '>
                <div className='flex justify-start md:justify-between items-center space-x-1.5'>
                    <Mail className='h-4 w-4 text-primary'/>
                    <span className='text-xs md:text-sm'>info@turfsand.co.ke</span>
                </div>
                <div className='flex justify-start md:justify-between items-center space-x-1.5'>
                    <Phone className='h-4 w-4 text-primary'/>
                    <span className='text-xs md:text-sm'>+254 721 159 492</span>
                </div>
                <div className='hidden md:flex justify-start md:justify-between items-center space-x-1.5'>
                    <MapPin className='h-4 w-4 text-primary'/>
                    <span className='text-xs md:text-sm'>23 Industrial Area, Nairobi</span>
                </div>
            </div>


            <div className='hidden md:flex justify-between items-center space-x-3 text-primary transition-colors duration-300'>
                <Link href='#' className='hover:text-secondary-foreground'><Facebook className='h-5 w-5 '/></Link>
                <Link href='#' className='hover:text-secondary-foreground'><Twitter/></Link>
                <Link href='#' className='hover:text-secondary-foreground'><Linkedin/></Link>
            </div>
        </div>
    );
}

export default Topbar;