import React from "react";
import { useDrag, DragPreviewImage } from "react-dnd";
import { ItemTypes } from "../../../../../../utils/types";

const BallonImage = (props) => {
    const [{ isDragging }, drag, preview] = useDrag({
        item: {
            type: ItemTypes.CARD,
            id: props.number
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    });
    return (
        <div>
            <DragPreviewImage connect={preview} src={props.imageSrc} />
            <img
                style={{ opacity: isDragging ? '0.3' : 1 }}
                ref={drag}
                src={props.imageSrc}
                alt="ballon"
            />
        </div>
    );
}

export default BallonImage;