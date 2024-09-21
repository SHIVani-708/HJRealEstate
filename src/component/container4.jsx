import React, { useState } from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary, {
    accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';

import "./style.css";

const Container4 = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="container gray">
            <div className="subcontainer">
                <div className='header'>
                    <div className='head'>Floor Plan</div>
                    <div className="dort">
                        <div className='dot'></div>
                    </div>
                </div>
                <div className='desc'>
                    Bayz 102 offers a versatile selection of studio, 1-bedroom, 2-bedroom, and 3-bedroom apartments.
                    Each unit is thoughtfully designed to maximize space and enhance the luxury living experience.
                    Here’s a general breakdown of the floor plan types:
                </div>
                <div className=''>
                    <Accordion
                        expanded={index === 0}
                        onChange={() => setIndex(index === 0 ? null : 0)}
                    >
                        <AccordionSummary sx={{ fontSize: '1.5rem' , lineHeight: '2' }} >STUDIO - Apartment</AccordionSummary>
                        <AccordionDetails sx={{ fontSize: '1.2rem' }}>
                            <ul>
                                <li>Compact and efficient layouts, ideal for singles or professionals</li>
                                <li>Open-plan living spaces with integrated kitchen and bathroom areas.</li>
                                <li>Designed for modern, minimalist living while ensuring comfort and style</li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                        expanded={index === 1}
                        onChange={() => setIndex(index === 1 ? null : 1)}
                    >
                        <AccordionSummary sx={{ fontSize: '1.5rem' }}>FLEX STUDIO - Apartment</AccordionSummary>
                        <AccordionDetails sx={{ fontSize: '1.2rem' }}>
                            <ul>
                                <li>Compact and efficient layouts, ideal for singles or professionals</li>
                                <li>Open-plan living spaces with integrated kitchen and bathroom areas.</li>
                                <li>Designed for modern, minimalist living while ensuring comfort and style</li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={index === 2} onChange={() => setIndex(index === 2 ? null : 2)}>
                        <AccordionSummary  sx={{ fontSize: '1.5rem' }}>FLEX 1-BEDROOM - Apartment</AccordionSummary>
                        <AccordionDetails  sx={{ fontSize: '1.2rem' }}>
                            <ul>
                                <li>Compact and efficient layouts, ideal for singles or professionals</li>
                                <li>Open-plan living spaces with integrated kitchen and bathroom areas.</li>
                                <li>Designed for modern, minimalist living while ensuring comfort and style</li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={index === 3} onChange={() => setIndex(index === 3 ? null : 3)}>
                        <AccordionSummary  sx={{ fontSize: '1.5rem' }}>PRESIDENTIAL SUITES - Apartment</AccordionSummary>
                        <AccordionDetails  sx={{ fontSize: '1.2rem' }}>
                            <ul>
                                <li>Compact and efficient layouts, ideal for singles or professionals</li>
                                <li>Open-plan living spaces with integrated kitchen and bathroom areas.</li>
                                <li>Designed for modern, minimalist living while ensuring comfort and style</li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={index === 4} onChange={() => setIndex(index === 4 ? null : 4)}>
                        <AccordionSummary  sx={{ fontSize: '1.5rem' }}>2-BEDROOM - Apartment</AccordionSummary>
                        <AccordionDetails  sx={{ fontSize: '1.2rem' }}>
                            <ul>
                                <li>Compact and efficient layouts, ideal for singles or professionals</li>
                                <li>Open-plan living spaces with integrated kitchen and bathroom areas.</li>
                                <li>Designed for modern, minimalist living while ensuring comfort and style</li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default Container4;
