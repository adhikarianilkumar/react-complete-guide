import React from 'react';

const ValidationComponent = (props) => {
    const textLength = props.textLength;

    if(textLength>0 && textLength<props.minTextLen) return <p>Text too short</p>;
    if(textLength>=props.minTextLen) return <p>Text long enough</p>;

    return null;
}

export default ValidationComponent;