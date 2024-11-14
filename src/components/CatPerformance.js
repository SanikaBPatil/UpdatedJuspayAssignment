import React, { useEffect, useState } from 'react';
import './CatPerformance.css';

const CatPerformance = ({ selectedMotions, startPerformance, onEndPerformance }) => {
    const [currentMotionIndex, setCurrentMotionIndex] = useState(-1);
    const [style, setStyle] = useState({ left: 0, top: 0, transform: 'rotate(0deg)' });

    useEffect(() => {
        if (startPerformance && selectedMotions.length > 0) {
            setCurrentMotionIndex(0);
        }
    }, [startPerformance, selectedMotions]);

    useEffect(() => {
        if (currentMotionIndex >= 0 && currentMotionIndex < selectedMotions.length) {
            const motion = selectedMotions[currentMotionIndex];
            performMotion(motion);
            const timer = setTimeout(() => {
                setCurrentMotionIndex((index) => index + 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (currentMotionIndex === selectedMotions.length) {
            onEndPerformance();
            setCurrentMotionIndex(-1);
        }
    }, [currentMotionIndex, selectedMotions, onEndPerformance]);

    const performMotion = (motion) => {
        switch (motion) {
            case 'Move X by 50':
                setStyle((prev) => ({ ...prev, left: prev.left + 50 }));
                break;
            case 'Move Y by 50':
                setStyle((prev) => ({ ...prev, top: prev.top + 50 }));
                break;
            case 'Rotate 360':
                setStyle((prev) => ({ ...prev, transform: 'rotate(360deg)' }));
                break;
            case 'Go to (0,0)':
                setStyle({ left: 0, top: 0, transform: 'rotate(0deg)' });
                break;
            case 'Move X=50, Y=50':
                setStyle({ left: 50, top: 50 });
                break;
            case 'Go to random position':
                setStyle({
                    left: Math.floor(Math.random() * 200),
                    top: Math.floor(Math.random() * 200),
                });
                break;
            case 'Say Hello':
                alert('Hello!');
                break;
            case 'Say Hello For 1 sec':
                setTimeout(() => alert('Hello for 1 second!'), 1000);
                break;
            case 'Increase Size':
                setStyle((prev) => ({ ...prev, transform: 'scale(1.5)' }));
                break;
            case 'Decrease Size':
                setStyle((prev) => ({ ...prev, transform: 'scale(0.5)' }));
                break;
            default:
                break;
        }
    };

    return (
        <div className="cat-container">
            <div className="cat" style={style}>
                🐱
            </div>
        </div>
    );
};

export default CatPerformance;
