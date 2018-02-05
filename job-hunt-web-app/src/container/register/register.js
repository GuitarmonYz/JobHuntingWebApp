import React from 'react';
import Logo from '../../conponents/logo/logo';
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: 'boss'
        };
    }
    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <List>
                    <InputItem>Username</InputItem>
                    <WhiteSpace />
                    <InputItem>Password</InputItem>
                    <WhiteSpace />
                    <InputItem>Confirm Password</InputItem>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type==='genuis'}>Hacker</RadioItem>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type==='boss'}>Boss</RadioItem>
                    <WhiteSpace />
                </List>
                <WhiteSpace/>
                <Button type='primary'>Register</Button>
            </div>
        ); 
    }
}

export default Register;