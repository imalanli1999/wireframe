import { Stage, Layer, Group, Rect, Transformer, Text } from 'react-konva';
import React, {useState} from 'react';
import ReactDOM from "react-dom";

const CanvasElements = (params) => {
    const shapeRef = React.useRef();
    const trRef = React.useRef();
    const [shape, setShape] = React.useState(params.shapeProps);

    return (
        <React.Fragment>
            <Group>
                <Group
                ref = {shapeRef}
                {...shape}

                onDragMove = {(e) => {
                    params.onSelect();
                    let item = {
                        ...shape,
                        x : e.target.x(),
                        y : e.target.y()
                    }
                    setShape(item);
                }}
                
                onTransform = {(e) => {
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();
                    node.scaleX(1);
                    node.scaleY(1);
                    let item = {
                        ...shape,
                        x : node.x(),
                        y : node.y(),
                        width : Math.max(5, node.weight() * scaleX),
                        height : Math.max(node.height() * scaleY)
                    }
                    setShape(item);
                }}
                >
                
                <Rect
                stroke = {"black"}
                width = {250}
                height = {50}
                strokeWidth = {1}
                strokeScaleEnabled = {false}
                fill = {"black"}
                >
                    
                </Rect>


                </Group>
            </Group>
        </React.Fragment>
    )
}


export default CanvasElements;