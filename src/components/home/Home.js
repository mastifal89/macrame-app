import React from 'react';
import { CardContainer } from '../ui/CardContainer';
import { NavBar } from '../navbar/NavBar';
import CarouselUtil from '../ui/Carousel';

export const Home = () => {
    return (
        <div>
            <NavBar />
            <CarouselUtil />
            <CardContainer />
        </div>
    )
}
