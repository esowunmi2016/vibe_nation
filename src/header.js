import React from 'react';
import { Layout, Menu, Tooltip } from 'antd';
import {InstagramOutlined, YoutubeOutlined, } from '@ant-design/icons';


const { Header, Content, Footer } = Layout;


export default class Header1 extends React.Component{
    constructor(){
        super()
        this.state = {
            igHover:false,
            ytHover:false,
						spotifyHover:false,

            bg: 'transparent',

            igLogo:'white',
            ytLogo:'white',
            spotifyLogo:'white',
						appleLogo:'white'
        }
    }
 

    scrollHandler=()=>{
        if(window.pageYOffset >= 400){
            this.setState({bg: 'rgba(47,79,79,0.2)'});
        }else{
            this.setState({bg: 'transparent'});
        }
    }

    onMouseOverLogo=(x)=>{
        if(x===1){
            this.setState({igLogo:'#bc2a8d'})
            this.setState({igHover:true})
        }else if(x===2){
            this.setState({ytLogo:'	#FF0000'})
            this.setState({ytHover:true})
        }else if(x===3){
					this.setState({spotifyLogo:'red'})
					this.setState({spotifyLogo:true})
				}
    }

    onMouseOutLogo=()=>{
        this.setState({igLogo:'white'})
        this.setState({igHover:false})

        this.setState({ytLogo:'white'})
        this.setState({ytHover:false})
       
				this.setState({spotifyLogo:'white'})
        this.setState({spotifyHover:false})
    }



    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler);
    }
    

    render(){
        return(
            <div>
                <Header 
                    style={{ 
                        position: 'fixed', 
                        zIndex: 1, 
                        width: '100%', 
                        backgroundColor: this.state.bg,
                    }} 
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" style={{backgroundColor: 'transparent'}}>
                            <a className='px-2' href='https://www.instagram.com/vibes_showemz/' target='_blank'>
                            <Tooltip title='Instagram' placement='bottom'>
                                <InstagramOutlined 
                                    style={{fontSize:'200%', color:this.state.igLogo}} 
                                    onMouseOver={()=>this.onMouseOverLogo(1)}
                                    onMouseOut={()=>this.onMouseOutLogo()}
                                />
                            </Tooltip>
                            </a>
                        
                            <a className='px-2' href='https://www.youtube.com/channel/UCulwe8AvUWFw8lHVqsH2g7Q' target='_blank'>
                            <Tooltip title='Youtube' placement='bottom'>
                                <YoutubeOutlined 
                                    style={{fontSize:'200%', color:this.state.ytLogo }}
                                    onMouseOver={()=>this.onMouseOverLogo(2)}
                                    onMouseOut={()=>this.onMouseOutLogo()}
                                />
                            </Tooltip>
                            </a>

                            <a className='px-2' href='https://open.spotify.com/user/esowunmi2016?si=8dd62ca11aff47ec' target='_blank' >
                            <Tooltip title='Spotify' placement='bottom'>
                                <i 
                                    className='fa fa-spotify'
                                    // onMouseOver={()=>this.onMouseOverLogo(3)}
                                    // onMouseOut={()=>this.onMouseOutLogo()}
                                    style={{
                                        fontSize:'200%', 
                                        color:this.state.spotifyLogo,
                                        verticalAlign:'middle'
                                        
                                    }}
                                />
                            </Tooltip>
                            </a>
                        
                            <a className='px-2' href='https://music.apple.com/us/artist/vibes-showemz/1529860475' target='_blank'>
                            <Tooltip title='iTunes' placement='bottom'>
                                <i 
                                    className='fa fa-apple'
                                    // onMouseOver={()=>this.onMouseOverLogo(4)}
                                    // onMouseOut={()=>this.onMouseOutLogo()}
                                    style={{
                                        fontSize:'200%', 
                                        color:this.state.appleLogo,
                                        verticalAlign:'middle'
                                        
                                    }}
                                />
                            </Tooltip>
                            </a>

                            <a className='px-2' href='https://soundcloud.com/excess_vibes' target='_blank'>
                            <Tooltip title='Sound Cloud' placement='bottom'>
                                <i 
                                    className='fa fa-soundcloud'
                                    // onMouseOver={()=>this.onMouseOverLogo(3)}
                                    // onMouseOut={()=>this.onMouseOutLogo()}
                                    style={{
                                        fontSize:'200%', 
                                        color:this.state.spotifyLogo,
                                        verticalAlign:'middle'
                                        
                                    }}
                                />
                            </Tooltip>
                            </a>
                    </Menu>
                </Header>
            </div>
            
        )
    }
}


