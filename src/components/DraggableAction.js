// src/components/DraggableAction.js
import React from 'react';

function DraggableAction({ action, onDragStart }) {
    return (
        <div
            draggable
            onDragStart={(e) => onDragStart(e, action)}
            className="draggable-action"
            style={{
                padding: '8px',
                margin: '4px',
                backgroundColor: '#90caf9',
                borderRadius: '4px',
                cursor: 'grab',
                textAlign: 'center',
            }}
        >
            {action}
        </div>
    );
}

export default DraggableAction;
