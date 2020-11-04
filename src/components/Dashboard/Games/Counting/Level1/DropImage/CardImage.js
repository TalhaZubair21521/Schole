import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../../../../utils/types";

const CardImage = (props) => {
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => props.updateLocation(item.id, props.id),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    });

    return (
        <div style={{ opacity: isOver ? '0.3' : 1 }}>
            {
                !(typeof props.upperImage === 'undefined') ? (
                    <div style={{ backgroundImage: `url(${props.imageSrc})`, height: "100px", width: "100px", backgroundPosition: "center", backgroundRepeat: "no-repear", backgroundSize: "100% 100%", }}>
                        <img
                            style={{ marginTop: "13px", marginLeft: "15px" }}
                            ref={drop}
                            height="70px"
                            width="70px"
                            src={props.upperImage}
                            alt="card"
                        />
                    </div>
                ) : <img
                        ref={drop}
                        height="100px"
                        width="100px"
                        src={props.imageSrc}
                        alt="card"
                    />
            }
        </div>
    );
}

export default CardImage;