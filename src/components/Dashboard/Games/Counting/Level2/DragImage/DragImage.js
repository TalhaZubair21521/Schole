import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../../../../utils/types";

const BallonImage = (props) => {
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.CARD,
            id: props.id
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })
    return (
        <img
            ref={drag}
            style={{ opacity: isDragging ? '0.3' : 1 }}
            src={props.imageSrc}
            alt="ballon"
            width="70%"
            height="90%"
        />
    );
}

export default BallonImage;