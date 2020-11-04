import React from "react";
import { useDrag, DragPreviewImage } from "react-dnd";
import { ItemTypes } from "../../../../../../utils/types";

const BallonImage = (props) => {
    const [{ isDragging }, drag, preview] = useDrag({
        item: {
            type: ItemTypes.CARD,
            id: props.id
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })
    return (
        <div>
            <DragPreviewImage connect={preview} src={props.imageSrc} />
            <img
                ref={drag}
                style={{ opacity: isDragging ? '0.3' : 1 }}
                src={props.imageSrc}
                alt="ballon"
                width="70%"
                height="90%"
            />
        </div>

    );
}

export default BallonImage;