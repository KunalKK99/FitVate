import React,{Component} from 'react'

class Logo extends React.Component {
    render() {
        return (
            <img
                source={require('assets/logo.png')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}

export default Logo;