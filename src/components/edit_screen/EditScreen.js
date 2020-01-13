import React, { Component, useState, useEffect } from 'react';
import Konva from 'konva';
import InputOptions from './InputOptions';
import Canvas from './Canvas';
import Properties from './Properties';
import {Stage, Rect, Layer} from 'react-konva'
import {Layout, Icon, Button, Input} from 'antd/lib';




const EditScreen = () => {

    const [template, setTemplate] =  useState(null);
    const [backgroundColor, setBackgroundColor] = useState("black");
    const [borderColor, setBorderColor] = useState("black");
    const [fontColor, setFontColor] = useState("black");
    
    const [zoom, setZoom] = useState(1);

    const zoomingIn = () => {
        setZoom(zoom * 2);
    }

    const zoomingOut = () => {
        setZoom(zoom / 2);
    }


    useEffect(() => {

    }, [zoom])

    return(
        <Layout width = "100%">
            
            <div>   
                <Button  
                size="large" 
                className = "zoom-buttons" 
                onClick = {() => {zoomingIn()}}>
                    <Icon 
                    type="zoom-in" 
                    />
                
                </Button>

                <Button  
                size="large" 
                className = "zoom-buttons" 
                onClick = {() => {zoomingOut()}}>
                    <Icon 
                    type="zoom-out" 
                    />
                </Button>

                <Button  
                size="large" 
                className = "zoom-buttons">
                    Save
                </Button>

                <Button  
                size="large" 
                className = "zoom-buttons">
                    Close
                </Button>
            </div>

            <div>
                <div className = "width-option">
                    <span className = "weight-text">
                        Width:
                    </span>
                    
                    <input 
                    type = "text" 
                    id = "width-textfield">
                    </input>
                </div>

                <div className = "height-option">
                    <span 
                    className = "height-text">
                        Height:
                    </span>

                    <input 
                    type = "text" 
                    id = "height-textfield" >
                    </input>
                </div>

                <Button 
                size = "large" 
                className = "dimension-button"> 
                    Update
                </Button>
            </div>
          
            
          
            <Layout>

                <Layout.Sider 
                width = {300}
                height = "800"
                className = "sidebars"> 
                    <InputOptions
                    setTemplate = {setTemplate}/> 
                </Layout.Sider>


                <Layout.Content
                width = {800} 
                height = {800}
                className = "middle-screen"> 
                    <Canvas
                    setTemplate = {setTemplate}
                    template = {template}
                    borderColor = {borderColor}
                    fontColor = {fontColor}
                    backgroundColor = {backgroundColor}
                    setBackgroundColor = {setBackgroundColor}
                    setBorderColor = {setBorderColor}
                    setFontColor = {setFontColor} 
                    zoom = {zoom}
                    />
                </Layout.Content>


                <Layout.Sider 
                width = {300} 
                height = {800}
                className = "sidebars"> 
                    <Properties
                     borderColor = {borderColor}
                     fontColor = {fontColor}
                     backgroundColor = {backgroundColor}
                     setBackgroundColor = {setBackgroundColor}
                     setBorderColor = {setBorderColor}
                     setFontColor = {setFontColor} 
                     />
                </Layout.Sider>
                
            </Layout>
      </Layout>
    )

}


export default EditScreen;