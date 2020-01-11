import { Stage, Layer, Group, Rect, Transformer, Text } from 'react-konva';
import React from 'react';
import ReactDOM from "react-dom";

const CanvasElements = (params) => {
    const shapeRef = React.useRef();
    const trRef = React.useRef();
    const [shape, setShape] = React.useState(params.shapeProps);

    React.useEffect(() =>{
        if(params.isSelected) {
            trRef.current.setNode(shapeRef.current);
            trRef.current.getLayer().batchDraw();
        }
    }, [params.isSelected])

    return (
        <React.Fragment>
            <Group>
                <Group
                ref = {shapeRef}
                draggable
                onClick = {"true" ? params.onSelect : null}
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
                        width : Math.max(5, node.width() * scaleX),
                        height : Math.max(node.height() * scaleY)
                    }
                    setShape(item);
                }}
                >
                
                <Rect
                stroke = {"black"}
                width = {shape.width}
                height = {shape.height}
                strokeWidth = {1}
                strokeScaleEnabled = {false}
                fill = {"black"}
                >
                </Rect>

                </Group>

                {params.isSelected && <Transformer
                ref = {trRef}
                rotateAnchorOffset = {25}
                rotationSnaps = {0, 90, 180, 270}
                anchorSize = {10}
                padding = {2}
                />}
                
            </Group>
        </React.Fragment>
    )
}


export default CanvasElements;