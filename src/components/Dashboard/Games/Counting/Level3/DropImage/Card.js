import React from "react";
import { useDrag, useDrop, DragPreviewImage } from "react-dnd";
import { ItemTypes } from "../../../../../../utils/types";

const BackgroundCard = (props) => {

    const [{ isDragging }, drag, preview] = useDrag({
        item: {
            type: ItemTypes.CARD,
            id: props.id
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    });

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => props.replaceImages(item.id, props.id),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    });
    return (
        <div>
            <DragPreviewImage connect={preview} src={props.imageSrc} />
            <div ref={drop} style={{ backgroundImage: `url(${props.backgroundSrc})`, height: "150px", width: "100px", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", marginTop: "10px", opacity: isOver ? '0.3' : 1 }}>
                <img
                    style={{ marginTop: "15px", marginLeft: "15px", opacity: isDragging ? '0.3' : 1 }}
                    alt="lollipop"
                    ref={drag}
                    height="120px"
                    width="60px"
                    src={props.imageSrc}
                />
            </div>
        </div>

    );
}

export default BackgroundCard;