import React, { useState, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';


function MyComponent() {
    const [progress, setProgress] = useState(50);
    const loadingBar = useRef(null);

    // Update the loading bar's progress when needed
    const updateProgress = (newProgress) => {
        setProgress(newProgress);
        loadingBar.current.continuousStart();
    };

    return (
        <div>
            <LoadingBar color="your choice color" ref={loadingBar} />
            {/* Your component content */}
        </div>
    );
}

export default MyComponent;
