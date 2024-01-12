import React, { Component } from 'react';

export default class Result extends Component{
    
    constructor(){
        super()
    }
    
    render(){
        return (
            <div className='result flex-centered'>
                <h2 style={{color:"green" , marginBottom:"30px" , marginTop:"100px"}}>Result</h2>

                <div className='resultSection'>
                    <h4>You need more practice!</h4>
                    <h2 style={{color:"blue" , marginTop:"30px" , fontSize:"35px"}}>Your Score is 20%</h2>
                    <div>
                        <div className='flex-centered resultOption'>
                            <p style={{fontWeight:"bold"}}>Total No of Questions</p>
                            <p>15</p>
                        </div>
                        <div className='flex-centered resultOption'>
                            <p style={{fontWeight:"bold"}}>Number of Attempted Questions</p>
                            <p>9</p>
                        </div>
                        <div className='flex-centered resultOption'>
                            <p style={{fontWeight:"bold"}}>Number of Correct Answers</p>
                            <p>3</p>
                        </div>
                        <div className='flex-centered resultOption'>
                            <p style={{fontWeight:"bold"}}>Number of Wrong Answers</p>
                            <p>6</p>
                        </div>
                        
                    </div>
                </div>

                <div className='buttons'>
                    <button className='playagain'>Play Again</button>
                    <button className='backtohome'>Back to Home</button>
                </div>
            </div>
        )
    }
}