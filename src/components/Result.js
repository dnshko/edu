import React from 'react';
import './Result.css';
function Result(props) {
    let questions = props.questions;
    questions.forEach(q => { q.isCorrect = q.options.every(x => x.selected === x.isAnswer); })

    return (
    
     <div class="card">
        <div className="result">
                    <div class="card-header" style={{backgroundColor : '#21234E', color : 'white' ,borderBottom: '5px solid #F05103', borderRadius: '12px 12px 0px 0px'}}>
                         <h2 className="text-center font-weight-normal">Result</h2>
                    </div>
                    <nav aria-label="breadcrumb" >
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item " >                                   
                                    <p>TEST NAME: Javascript Quiz</p>
                                </li>
                            </ol>
                        </nav>
                    
            {questions.map((q, index) =>
                <div key={q.id} className={`mb-2 alert ${q.isCorrect ? 'alert-success' : 'alert-danger'}`} role="alert" style={{
                    border: '2px solid',
                    padding: '10',
                    margin: '10px',
                    borderRadius: '20px'
                }}>
                    <div class="row">
                        <div class="col-lg-8 sm-8">
                    <div className="result-question" style={{backgroundColor : `${q.isCorrect ? 'alert-success' : 'alert-danger'}`}}>
                        <h5 style={{Color : `${q.isCorrect ? 'alert-success' : 'alert-danger'}`}}>  <span  className="numberBg">{index + 1}</span> {q.name}</h5>
                        <div className="row">
                            {
                                q.options.map(option =>
                                    <div key={option.id} className="col-6">
                                        <input id={option.id} type="checkbox" disabled="disabled" checked={(option.selected && option.isAnswer)}  className="option-input radio"  /> {option.name}
                                    </div>
                                )
                            }
                        </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 sm-4">
                                   
                                   <button className="btnResult btn-primary ">view steps</button>                                  
                                   <button className="btnResult btn-primary ">view video</button>
                       
               </div>
                    </div>
                        <div className={`m-1 p-1 text-bold ${q.isCorrect ? 'text-success' : 'text-danger'}`}>Your answer is {q.isCorrect ? 'Correct' : 'Wrong'}.</div>
                    
                
                </div>
            )}
        </div>
    </div>
    )
}

export default Result;