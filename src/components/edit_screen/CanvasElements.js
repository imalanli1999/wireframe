import { Stage, Layer, Group, Rect, Transformer, Text } from 'react-konva';
import React from 'react';
import ReactDOM from "react-dom";


const CanvasElements = (params) => {
    const shapeRef = React.useRef();
    const trRef = React.useRef();

    const [shape, setShape] = React.useState(params.shapeProps);
    const [edit, setEdit] = React.useState(null);

    const [text, setText] = React.useState(params.shapeProps.text);
    const [fontSize, setFontSize] = React.useState(20);
    const [border, setBorder] = React.useState(1);
    const [borderRadius, setBorderRadius] = React.useState(1);

    const templateText = document.getElementById("right-textfield");
    const templateFontSize = document.getElementById("font-size-textfield");
    const templateBorderThickness = document.getElementById("border-thickness-textfield");
    const templateBorderRadius = document.getElementById("border-radius-textfield");


    templateText.addEventListener("keydown", function(e) {
        setTimeout(function() {
            setText(e.target.value)
        })
    }, 100)

    templateFontSize.addEventListener("keydown", function(e) {
        setTimeout(function() {
            setFontSize(e.target.value)
        })
    }, 100)

    templateBorderThickness.addEventListener("keydown", function(e) {
        setTimeout(function() {
            setBorder(e.target.value)
        })
    }, 100)

    templateBorderRadius.addEventListener("keydown", function(e) {
        setTimeout(function() {
            setBorderRadius(e.target.value)
        })
    }, 100)
    
    React.useEffect(() => {
        if(params.isSelected) {
            let item = {
                ...shape,
                stroke : params.borderColor,
                fill : params.backgroundColor,
                textColor : params.fontColor,
                strokeWdith : border,
                content : text,
                textSize : fontSize,
                cornerRadius : borderRadius

            }
            setShape(item);
        }
    }, [params.borderColor, params.backgroundColor, params.textColor, border, text, fontSize, borderRadius])

    React.useEffect(() => {
        if(params.isSelected) {
            trRef.current.setNode(shapeRef.current);
            trRef.current.getLayer().batchDraw();
        }
        else {
            setEdit(false);
            templateText.value = null;
            templateFontSize.value = null;
            templateBorderThickness.value = null;
            templateBorderRadius.value = null;

        }
    }, [params.isSelected])

    return (
        <React.Fragment>
            <Group
            onClick = {!params.onInputBar ?
            () => {
                templateText.value = shape.content;
                templateFontSize.value = shape.textSize;
                templateBorderThickness.value = shape.strokeWidth;
                templateBorderRadius.value = shape.cornerRadius;
            } : null}
            >

                <Group
                ref = {shapeRef}
                draggable = {params.onInputBar ? false : true}
                onClick = {!params.onInputBar ? params.onSelect : null}
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
                
                onTransform = {() => {
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
                fill = {shape.fill}
                >
                </Rect>

                {<Text
                height = {shape.height}
                width = {shape.width}
                text = {shape.content}
                align = {"center"}
                verticalAlign = {"middle"}
                />}

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