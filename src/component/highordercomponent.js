import React from 'react'

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

export default Color = (WrappedComponent) => {

    const colorRandom = getRandomColor();
    return(
        <div style={{color: colorRandom}}>
            <WrappedComponent />
        </div>
    )
}