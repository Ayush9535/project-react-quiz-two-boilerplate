import React, { Component } from 'react';
import Data from "../resources/quizQuestion.js"

export default class Quiz extends Component{
    constructor(){
        super()
        this.state = {
            currQues : 0
        }
    }

    handleNext = () =>{
        if (this.state.currQues == Data.length - 1 ) {
            this.setState({
                currQues : 0
            })
        }else{
            this.setState({
                currQues : this.state.currQues + 1
            })
        }
    }
    handlePrev = () =>{
        if (this.state.currQues == 0) {
            this.setState({
                currQues : Data.length - 1
            })
        }else{
            this.setState({
                currQues : this.state.currQues - 1
            })
        }
    }

    handleQuit = () =>{
        window.confirm("Do you want to Quit?")
    }

    render(){
        console.log(Data[0])
        return (
            <div className='QuizSection flex-centered'>
                <div className='Quiz-container'>
                    <h2>Question</h2>
                    <div className='questionNumber'>
                        <p><span>{this.state.currQues + 1}</span> of 15</p>
                    </div>
                    <p>{Data[this.state.currQues].question}</p>
                    <div className='optionsDiv'>
                        <button className='option'>{Data[this.state.currQues].optionA}</button>
                        <button className='option'>{Data[this.state.currQues].optionB}</button>
                        <button className='option'>{Data[this.state.currQues].optionC}</button>
                        <button className='option'>{Data[this.state.currQues].optionD}</button>
                    </div>
                    <div className='navigationOptions'>
                        <button className='navibtn prev' onClick={this.handlePrev}>Previous</button>
                        <button className='navibtn next' onClick={this.handleNext}>Next</button>
                        <button className='navibtn quit' onClick={this.handleQuit}>Quit</button>
                    </div>
                </div>
            </div>
        )
    }
} 