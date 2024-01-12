import React, { Component } from 'react';

export default class Home extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className='HomeContainer flex-centered'>
                <h2>Quiz App</h2>
                <button>Play</button>
            </div>
        )
    }
} 