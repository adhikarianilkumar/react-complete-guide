import React from 'react';

// Approach ONE: Use it for wrapping purpose
// const WithClass = (props) => (
//     <div className={ props.classes}> { props.children} </div>
// );

// Approach TWO: Use it for Error handling, Google analytics etc..
const withClass = (WrapperComponet, className) => {
    return props => (
        <div className={className}>
            {/* <WrapperComponet props= {props} /> OR */}
            <WrapperComponet {...props} />
        </div>
    )
};

export default withClass;