import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import MotionList from './MotionList';
import SelectedMotions from './SelectedMotions';
import CatPerformance from './CatPerformance';

const MainPage = () => {
    const motions = [
        'Move X by 50',
        'Move Y by 50',
        'Rotate 360',
        'Go to (0,0)',
        'Move X=50, Y=50',
        'Go to random position',
        'Say Hello',
        'Say Hello For 1 sec',
        'Increase Size',
        'Decrease Size',
        'Repeat'
    ];

    const [selectedMotions, setSelectedMotions] = useState([]);
    const [startPerformance, setStartPerformance] = useState(false);

    const handleDropMotion = (motion) => {
        if (!selectedMotions.includes(motion)) {
            setSelectedMotions((prevMotions) => [...prevMotions, motion]);
        }
    };

    const handleRemoveMotion = (index) => {
        const newSelectedMotions = selectedMotions.filter((_, i) => i !== index);
        setSelectedMotions(newSelectedMotions);
    };

    const handleStartPerformance = () => {
        setStartPerformance(true);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
                <div style={{ flex: 1 }}>
                    <h3>CODE</h3>
                    <MotionList motions={motions} />
                </div>
                <div style={{ flex: 1 }}>
                    <h3>ACTION</h3>
                    <SelectedMotions
                        selectedMotions={selectedMotions}
                        onDropMotion={handleDropMotion}
                        onRemoveMotion={handleRemoveMotion}
                    />
                    <button onClick={handleStartPerformance}>Start Performance</button>
                </div>
                <div style={{ flex: 1 }}>
                    <h3>PERFORMANCE</h3>
                    <CatPerformance
                        selectedMotions={selectedMotions}
                        startPerformance={startPerformance}
                        onEndPerformance={() => setStartPerformance(false)}
                    />
                </div>
            </div>
        </DndProvider>
    );
};

export default MainPage;
