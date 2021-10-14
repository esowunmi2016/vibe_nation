import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import Carousel1 from './carousel'
import Header1 from './header'
import MusicPlayer from './musicPlayer'
import Footer1 from './footer'
import Message from './maessageMe'
import Discography from './discography';


export default class Main extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }


    render(){
        return(
           <div class='margin-auto'>
               <Header1 />
               <Carousel1 />
               {/* <MusicPlayer /> */}
               <Message />
               <Discography />
               <Footer1 />
           </div>
        )
    }
}