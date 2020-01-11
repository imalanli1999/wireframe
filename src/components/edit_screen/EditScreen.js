import React, { Component, useState, useEffect } from 'react';
import Konva from 'konva';
import Input from './Input';
import Canvas from './Canvas';
import {Stage, Rect, Layer} from 'react-konva'
import {Layout} from 'antd/lib';




const EditScreen = () => {
    return(
        <Layout width = "100%">
            <br></br>
            <Layout>

                <Layout.Sider 
                width = {300}
                height = "800"
                className = "sidebars"> <Input/> 
                </Layout.Sider>


                <Layout.Content
                width = {800} 
                height = {800}> <Canvas/>
                </Layout.Content>


                <Layout.Sider 
                width = {300} 
                height = {800}> right sidebar
                </Layout.Sider>
                
            </Layout>
      </Layout>
    )

}


export default EditScreen;