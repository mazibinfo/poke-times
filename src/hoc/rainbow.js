import React from 'react';

const Rainbow = (WrappedComponent) => {
    
    const color = [ 'red', 'green', 'blue', 'yellow', 'pink', 'orange' ];
    const randomColor = color[ Math.floor(Math.random() * 6) ];
    const className = randomColor + '-text';

    return(props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;