import React from 'react'
import {Spin} from 'antd'

export default class Spinner extends React.Component{
    constructor(){
        super()
        this.state={
            loading:false
        }
    }

    trigger=()=>{
        if(this.state.loading === false){
            this.setState({loading:true})
        }else{
            this.setState({loading:false})
        }
    }

    render(){
        return(
            <div>
                <div class='center py-4'>
                    <Spin tip='loading...' spinning={this.state.loading} size='large'>
                        <p>words in a loader.</p>
                    </Spin>
                </div>
                <div class='center py-4'>
                    <button onClick={this.trigger}>
                        <p>Trigger</p>
                    </button>
                </div>
            </div>
        )
    }
}