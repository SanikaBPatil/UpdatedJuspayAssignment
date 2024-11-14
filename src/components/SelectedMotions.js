import React from 'react';
import { useDrop } from 'react-dnd';
import './SelectedMotions.css';

const SelectedMotions = ({ selectedMotions, onDropMotion, onRemoveMotion }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'MOTION',  // Must match type in useDrag
        drop: (item) => {
            console.log('Dropped item:', item);
            onDropMotion(item.motion);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            className="selected-motions-container"
            style={{ backgroundColor: isOver ? '#e0ffe0' : 'white' }}
        >
            {selectedMotions.map((motion, index) => (
                <div key={index} className="selected-motion-item">
                    {motion}
                    <button
                        className="delete-button"
                        onClick={() => onRemoveMotion(index)}
                    >
                        ✖
                    </button>
                </div>
            ))}
            <button className="go-to-next-page" onClick={() => alert('Selected Motions')}>
                Selected Motions
            </button>
        </div>
    );
};

export default SelectedMotions;
