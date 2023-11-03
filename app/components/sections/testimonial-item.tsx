import React from 'react';
import {Card} from "@/app/components/ui/card";

interface TestimonialItemProps {
    title: string;
    content: string;
    author: string;
    designation: string;
}

function TestimonialItem({ title, content, author, designation }: TestimonialItemProps) {
    return (
        <Card className='p-6 md:p-8 border-primary border-opacity-60 space-y-4 transition duration-300 hover:bg-primary hover:text-background group'>
            <h2 className='text-xl font-bold'>{title}</h2>
            <p className='text-sm text-muted-foreground group-hover:text-background'>{content}</p>

            <div className='space-y-2'>
                <h5 className='font-bold text-sm'>{author}</h5>
                <span className='text-sm text-muted-foreground group-hover:text-background'>{designation}</span>
            </div>
        </Card>
    );
}

export default TestimonialItem;