import react from "react";
import {Form, Input, Checkbox, Button, message} from 'antd';
// import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';

const { TextArea } = Input;

const USER_ID = 'user_cfpJP8c2i9N3dtlNpLBji'    //userID
const TEMPLATE_ID = 'template_kn69dr'            //templateID



export default class Message extends react.Component{
    constructor(){
        super()
        this.state = {
            messageLoading:false,
        }
    }


    onFinish=(x)=>{
        this.setState({ messageLoading:true  });
        emailjs.send('service_3pak4ng','template_kn696dr', x, USER_ID)
        .then((response) => {
            // console.log('SUCCESS!', response.status, response.text);
            this.setState({ messageLoading:false  });
            var form = document.getElementById("myForm");
            form.reset();
            message.success('SENT')
        }, (err) => {
            // console.log('FAILED...', err);
            this.setState({ messageLoading:false  });
            message.error('FAILED')
        });
    }

    render(){
        return(
            <div className='px-4'> 
                <div className=''>
                    <h4>
                        Send a Message
                    </h4>
                </div>
                <Form onFinish={this.onFinish} id='myForm'>
                    <div className='container-fluid py-4 px-4'>
                        <div className='row'>
                            <div className='col-md-12 col-lg-6'>
                                <p className='strong'>Name:</p>
                            </div>
                            <div className='col-6'>
                                <Form.Item name='name' rules={[{required:true}]}>
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>
                        
                        <div className='row'>
                            <div className='col-md-12 col-lg-6'>
                                <p className='strong'>Email:</p>
                            </div>
                            <div className='col-6'>

                                <Form.Item name='email' rules={[{type:'email'}]}>
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>
                      
                        <div className='row'>
                            <div className='col-md-12 col-lg-6'>
                                <p className='strong'>Message:</p>
                            </div>
                            <div className='col-6'>

                                <Form.Item name='message' rules={[{required:true}]}>
                                    <TextArea 
                                        maxLength={200} 
                                        showCount
                                    />
                                </Form.Item>
                            </div>
                        </div>
                    
                        <div className='row'>
                            <div className='col'>
                                <Button
                                    htmlType='submit'
                                    loading={this.state.messageLoading}
                                    style={{
                                        width:'10%'
                                    }}
                                >
                                    {this.state.messageLoading === true ? 'Loading' : 'Send'}
                                </Button>
                            </div>
                        </div>
                                    
                    </div>
                </Form>
            </div>
        )
    }
}