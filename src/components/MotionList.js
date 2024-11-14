import React from 'react';
import { useDrag } from 'react-dnd';
import './MotionList.css';

const MotionList = ({ motions }) => {
    return (
        <div className="motion-list-container">
            {motions.map((motion, index) => (
                <MotionItem key={index} motion={motion} />
            ))}
        </div>
    );
};

const MotionItem = ({ motion }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'MOTION',  // Ensure the type matches the 'accept' type in useDrop
        item: { motion },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className="motion-item"
            style={{ opacity: isDragging ? 0.5 : 1 }}
        >
            {motion}
        </div>
    );
};

export default MotionList;
