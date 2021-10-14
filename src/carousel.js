import React from 'react';
import { Carousel } from 'antd';
import car_img1 from './img/img1.png';
import car_img2 from './img/img2.png';


const contentStyle = {
  height: '450px',
  color: '#fff',
  lineHeight: '450px',
  textAlign: 'center',
  background: 'black',
  
};

const img_center={
    display: 'block',
    margin: 'auto'
}


export default class Carousel1 extends React.Component{
    constructor(){
        super()
        this.state = {
            
        }
    }
    render(){
        return(
            <div class='container_fluid'>
               <Carousel effect="fade" autoplay={true} autoplaySpeed={5000} >
                    <div>
                        <h3 style={contentStyle}>
                            <img src={car_img1} style={img_center}></img>
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}><p>Afro-Trapping</p></h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                            
                            <img src={car_img2} style={img_center}></img>
                        </h3>
                    </div>
                </Carousel>
            </div>
        )
    }
}