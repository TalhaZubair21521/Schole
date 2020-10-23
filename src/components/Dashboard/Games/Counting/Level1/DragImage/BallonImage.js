import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../../../../utils/types";

const BallonImage = (props) => {
    const [{ isDragging }, drag] = useDrag({
        
        item: {
            type: ItemTypes.CARD,
            id: props.number
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })
    return (
        <img
            style={{ opacity: isDragging ? '0.3' : 1 }}
            ref={drag}
            src={props.imageSrc}
            alt="ballon"
        />
    );
}

export default BallonImage;