import React from 'react';

function LocalContainer({children}) {
    return (
        <div style={{minHeight: "calc(calc(100vh - 64px) - 197.5px)", height: "auto"}}>
            {children}
        </div>
    );
}

export default LocalContainer;