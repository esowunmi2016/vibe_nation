import React from 'react';
import { Card, Space, Spin, Alert, Switch } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import spotifyImg3 from './img/spotifyImg5.png';
import spotifyImg6 from './img/spotifyImg6.png';
import appleImg1 from './img/appleLogoSketchImg.png';
import appleImg2 from './img/appleLogoB&WImg.png';
import ytImg2 from './img/youtubeImg2.png';
import ytImg3 from './img/ytImg2.jpg';
import ytImg1 from './img/ytImg1.png';
import { getKeyThenIncreaseKey } from 'antd/lib/message';
 
const { Title } = Typography;


export default class MusicPlayer extends React.Component{
    constructor(){
        super()
        this.state = {
            spotify1: spotifyImg3,
            apple1: appleImg1,
            yt1: ytImg2,

            spotifyCardHeight: '18vh',
            appleCardHeight: '18vh',
            ytCardHeight: '18vh',

            spotifyOppacity:'1',
            appleOpacity:'1',
            ytOpacity:'1',

            spotifyBgRepeat:'no-repeat',
            spotifyBgColor:'white',
            appleBgColor: 'white',
            ytbg: 'white',
            
            

            loadding:true,
            clicked:'spotify',


            embededSource: "https://open.spotify.com/embed/playlist/6DruyprzBz6zovJrR29SsB"

        }
    }

    spotifyMouseOverHandler=()=>{
        this.setState({spotify1: spotifyImg6, spotifyCardHeight:'22vh', spotifyBgRepeat:'repeat-y', spotifyBgColor:'black' })
    }

    spotifyMouseOutHandler=()=>{
        this.setState({spotify1: spotifyImg3, spotifyCardHeight:'18vh', spotifyBgRepeat:'no-repeat', spotifyBgColor:'white'})
    }
    
    appleMouseOverHandler=()=>{
        this.setState({apple1: appleImg2, appleCardHeight:'22vh', appleBgColor:'black'})
    }

    appleMouseOutHandler=()=>{
        this.setState({apple1: appleImg1, appleCardHeight:'18vh', appleBgColor:'white'})
    }

    ytMouseOverHandler=()=>{
        this.setState({yt1: ytImg3, ytCardHeight: '22vh', ytbg:'black'})
    }

    ytMouseOutHandler=()=>{
        this.setState({yt1: ytImg2, ytCardHeight: '18vh', ytbg:'white'})
    }

    spotifyClick=()=>{
        if(this.state.clicked !== 'spotify'){
            this.setState({loadding:true})
        }
        this.setState({embededSource:'https://open.spotify.com/embed/playlist/6DruyprzBz6zovJrR29SsB'})
        this.setState({clicked:'spotify'})
    }

    appleClick=()=>{
        if(this.state.clicked !== 'apple'){
            this.setState({loadding:true})
        }
        this.setState({embededSource:'https://embed.music.apple.com/us/playlist/naija-hits/pl.59d18bb92273474dbb69bb6be0dcda3f'})
        this.setState({clicked:'apple'})
    }

    ytClick=()=>{
        if(this.state.clicked !== 'yt'){
            this.setState({loadding:true})
        }
        this.setState({embededSource:'https://www.youtube.com/embed/videoseries?list=PLFOQJDZ9n0Cz5mgC4EDn9i3Uu_DKFqzvx'})
        this.setState({clicked:'yt'})
    }

    trigger=()=>{
        this.setState({loadding:false})
    }

    render(){
        return(
            <div>
                <div class='stick-top'>
                    <div class='px-4' style={{marginBottom:'2vh'}}>
                        <Row gutter={16} align='middle' style={{height:'23vh'}}>
                            <Col span={8} >
                                <Card hoverable={true} bordered={false} style={{ backgroundImage: `url(${this.state.spotify1})`, height:this.state.spotifyCardHeight, backgroundRepeat:this.state.spotifyBgRepeat, backgroundColor:this.state.spotifyBgColor, backgroundPosition:'center', opacity:this.state.spotifyOppacity}} onMouseOver={this.spotifyMouseOverHandler} onMouseOut={this.spotifyMouseOutHandler} onClick={this.spotifyClick}> 
                                </Card>
                            </Col>
                            <Col span={8} >
                                <Card hoverable={true} bordered={false} style={{ backgroundImage: `url(${this.state.apple1})`, height:this.state.appleCardHeight, backgroundRepeat:'no-repeat', backgroundColor:this.state.appleBgColor,
                                backgroundPosition:'center',opacity:this.state.appleOpacity}} onMouseOver={this.appleMouseOverHandler} onMouseOut={this.appleMouseOutHandler} onClick={this.appleClick}>
                                </Card>
                            </Col>
                            <Col span={8} >
                                <Card hoverable={true} bordered={false} style={{ backgroundImage: `url(${this.state.yt1})`, height: this.state.ytCardHeight, backgroundRepeat:'no-repeat', backgroundColor:this.state.ytbg, backgroundPosition:'center' , opacity:this.state.ytOpacity}} onMouseOver={this.ytMouseOverHandler} onMouseOut={this.ytMouseOutHandler} onClick={this.ytClick}>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    
                    <div className='px-4'>
                        <div className='px-4'>
                            <Spin spinning={this.state.loadding} tip='Loading....' size='large'>
                                <iframe src={this.state.embededSource} frameborder="0" allowtransparency="true" allow="encrypted-media" style={{width:'100%', height:'70vh'}} onLoad={this.trigger}></iframe>
                            </Spin>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}