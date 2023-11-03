import React from 'react';
// @ts-ignore
import { Icon } from "lucide-react";
import {Card} from "@/app/components/ui/card";
import Image from "next/image";

interface ServiceCardProps {
    image: string;
    icon: Icon;
    title: string;
    description: string;
}

function ServiceCard({ image, icon: Icon, title, description }: ServiceCardProps) {
    return (
        <Card className='flex flex-col'>
            <div className='h-48 w-full relative '>
                <Image
                    src={image}
                    alt=''
                    fill
                    className='object-cover rounded-t-2xl'
                />
            </div>

            <div className='h-16 w-16 bg-primary rounded-full mx-auto flex justify-center items-center -mt-8 z-10'>
                <Icon className='h-8 w-8 text-white'/>
            </div>

            <div className='p-8 space-y-2'>
                <h2 className='text-xl font-bold'>{title}</h2>
                <p className='text-muted-foreground text-[15px]'>{description}</p>
            </div>

        </Card>
    );
}

export default ServiceCard;