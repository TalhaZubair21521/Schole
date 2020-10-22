import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../../../../utils/types";

const DropImage = (props) => {
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => props.updateBallonImages(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    });

    return (
        <div style={{ backgroundColor: isOver ? "" : "" }}>
            <img
                ref={drop}
                height="100px"
                width="auto"
                src={props.imageSrc}
                alt="card"
            />
        </div>
    );
}

export default DropImage;