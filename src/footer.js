import React from 'react';
import {Col, Row, Layout, Menu, Breadcrumb } from 'antd';



const { Header, Content, Footer } = Layout;

const style = { background: '#0092ff', padding: '8px 0' };

const style1={
        height:'10vh'
}

export default class Footer1 extends React.Component{
    constructor(){
        super()
        this.state={
            linkColor:'black'
        }
    }

    

    render(){
        return(
            <div>
                <Footer 
                    style={{ 
                        textAlign:'center',
                        width:'100%',
                        bottom:'0'
                    }}
                >
                    {/* <p className='bold'>Write to me </p>        */}
                    {/* <a href={'https://www.logodesign.net/'} target='_blank' style={{color:this.state.linkColor}} onMouseOut={()=>this.setState({linkColor:'black'})} onMouseOver={()=>this.setState({linkColor:'#1890ff'})}>Logo source Logodesign.net </a>              */}
                </Footer>  
            </div>
        )
    }
}