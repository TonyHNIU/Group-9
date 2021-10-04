import React from 'react'

function Clone2 (props) {
    return (
        <div
        id={props.id}
        className={props.className}
        onDrop={''}
        onDragOver={''}
        >
            { props.children }
        </div>
    )
}

export default Clone2
