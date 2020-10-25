import React, { Component } from 'react';
import { ActionTypes } from '../constants/actionTypes';
import { connect } from 'react-redux';
import './Question.css';

const mapStateToProps = state => ({ ...state.quiz, ...state.mode, ...state.pager });

const mapDispatchToProps = dispatch => ({
    onAnswer: payload => dispatch({ type: ActionTypes.QuizAnswer, payload })
});

class Questions extends Component {

    state={
        
        curTime : new Date().toLocaleDateString(),
    }
    onAnswer(question, option) {
        let quiz = JSON.parse(JSON.stringify(this.props.quiz));
        let q = quiz.questions.find(x => x.id === question.id);
        if (q.questionTypeId === 1) {
            q.options.forEach((x) => { x.selected = false; });
        }
        q.options.find(x => x.id === option.id).selected = true;
        this.props.onAnswer(quiz);
    }

    render() {
        
        let questions = (this.props.quiz.questions) ?
            this.props.quiz.questions.slice(this.props.pager.index , this.props.pager.index  + this.props.pager.size ) : [];
        return (
        
            <div id="quiz">
                {/* <div class="card"> */}
                    <div class="card-header" style={{backgroundColor : '#21234E', color : 'white' ,borderBottom: '5px solid #F05103', borderRadius: '12px 12px 0px 0px'}}>
                         <h2 className="text-center font-weight-normal">{this.props.quiz.name}</h2>
                    </div>

                        <nav aria-label="breadcrumb" >
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item ">                                   
                                    <p>TEST NAME: {this.props.quiz.name}</p>
                                </li>
                                {/* <li class="breadcrumb-item " style={{marginLeft : '50px'}}>                                   
                                    <p>TEST DATE: {this.state.curTime}</p>
                                </li>                               
                                <li class="breadcrumb-item " style={{marginLeft : '50px'}}>                                   
                                    <p>Prep Test Name: {this.props.quiz.name}</p>
                                </li> */}
                            </ol>
                        </nav>
                    
      <div className="container">
         
         <div className="row" >
           <div className="col-8" style={{ marginLeft : '17%'}}>    
                    {questions.map(q =>
                        <div key={q.id}>
                            
                            <div className="font-weight-normal">
                                 <span  className="numberBg">
                                     <p>{this.props.pager.index + 1} </p>
                                 </span>    
                                  <span style={{marginLeft : '10px' , fontSize : '20px'}}>{q.name}</span></div>
                            <div className="row text-left options">
                                {
                                    q.options.map(option =>
                                        <div key={option.id} className="col-6">
                                            <div className="option">
                                                <label className="font-weight-normal" htmlFor={option.id}>
                                                    <input id={option.id} checked={option.selected} type="radio" onChange={() => this.onAnswer(q, option)} className="option-input radio" />
                                                    {option.name}
                                                </label>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )}
                    <hr />
                    <div className="text-center">
                        {/* {this.props.quiz.config.allowBack && <button id="first" className="btn btn-default" onClick={this.props.move}>First</button>} */}
                        {this.props.quiz.config.allowBack && <i id="prev" className=" fa fa-chevron-circle-left fa-2x btnRight" onClick={this.props.move} style={{color : '#034BB7' , marginRight : '10px'}}></i>}
                        
                                  <span style={{marginBottom: '10px'}}>  {this.props.pager.index + 1} of {this.props.pager.count} </span>
                        <i id="next" className=" fa fa-chevron-circle-right fa-2x btnLeft" onClick={this.props.move} style={{color : '#034BB7', marginLeft : '10px' }}></i>
                        
                        {/* <button id="last" className="btn btn-default" onClick={this.props.move}>Last</button> */}
                        </div></div>
                    </div>
                </div>
            {/* </div > */}
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);