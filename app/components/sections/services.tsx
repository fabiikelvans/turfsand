import React from 'react';
import ServiceCard from "@/app/components/sections/service-card";
import {Construction} from "lucide-react";

function Services() {
    return (
        <div className='px-8 md:px-20 py-20 md:py-24 mt-8' id='services'>
            <div className='space-y-8 mb-12'>
                <span className='text-primary font-semibold uppercase text-xs md:text-sm tracking-wider flex justify-center'> Our Services </span>

            <div className='w-full md:w-[50%] mx-auto text-center space-y-6'>
                <h1 className='text-3xl md:text-5xl font-extrabold '>
                    Dedicated To Turning Your Vision into Reality
                </h1>

                <p className='text-center text-muted-foreground'>
                    With a wealth of experience and a team of skilled professionals, we offer a wide range of construction services tailored to meet your specific needs. From concept to completion, we prioritize quality, safety, and client satisfaction.
                </p>
            </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                <ServiceCard
                    image='https://images.unsplash.com/photo-1533153900060-648d6009083a?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJvYWQlMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D'
                    icon={Construction}
                    title='Road Works'
                    description='We excel in road construction services for clients nationwide, leveraging our extensive expertise in roadworks. We take great pride in delivering an unmatched level of quality in our road construction projects.'
                />
                <ServiceCard
                    image='https://images.unsplash.com/photo-1621511075938-f03482369feb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    icon={Construction}
                    title='Builing Works'
                    description='is a globally renowned construction services company that holds a prominent position as a premier builder in a wide range of market segments. The company has garnered acclaim for its successful execution of substantial and intricate projects, its commitment to innovation, adoption of cutting-edge technologies, and its positive impact on clients, employees, and the community at large.'
                />
                <ServiceCard
                    image='https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    icon={Construction}
                    title='Water Works'
                    description='The water domain is undergoing significant transformation driven by technological innovation and the increasing importance of addressing environmental and societal concerns. Our Water Engineering department is at the forefront of this evolution, providing a diverse and expanding array of state-of-the-art solutions for drinking water services and infrastructure.'
                />
            </div>
        </div>
    );
}

export default Services;