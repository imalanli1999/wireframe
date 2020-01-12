import React, { Component, useState, useEffect } from 'react';
import Konva from 'konva';
import Input from './Input';
import Canvas from './Canvas';
import Properties from './Properties';
import {Stage, Rect, Layer} from 'react-konva'
import {Layout} from 'antd/lib';




const EditScreen = () => {

    const [template, setTemplate] =  useState(null);
    const [backgroundColor, setBackgroundColor] = useState("black");
    const [borderColor, setBorderColor] = useState("black");
    const [fontColor, setFontColor] = useState("black");
    

    return(
        <Layout width = "100%">
            <br></br>
            <Layout>

                <Layout.Sider 
                width = {300}
                height = "800"
                className = "sidebars"> 
                    <Input
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