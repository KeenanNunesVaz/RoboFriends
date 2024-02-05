import React from 'react';

const ScrollBox = (args) => {
    return (
        <div style={{ overflowY: 'scroll', height: '900px' }}>
            { args.children }
        </div>
    );
}

export default ScrollBox;