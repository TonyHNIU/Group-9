import React from 'react'

function Card (props) {
    return (
        <div
        id={props.id}
        className={props.className}
        draggable={props.draggable}
        onDragStart={""}
        onDragOver={""}
        >
            { props.children }
        </div>
    )
}

export default Card
