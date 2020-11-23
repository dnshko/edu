import React, { Component } from 'react'
import MathJax from 'react-mathjax'
import './Examplequiz.css'

const q1opt1 = `\\phi\\subseteq\\left\\{a,b\\right\\}`
const q1opt2 = `\\phi\\epsilon\\left\\{a,b\\right\\}`
const q1opt3 = `\\left\\{a\\right\\} \\epsilon\\left\\{a,b\\right\\}`
const q1opt4 = `a\\subseteq\\left\\{a,b\\right\\}`


class Exquiz extends Component {  
  render() {
    
    return (
         <MathJax.Provider input='tex'>
                 <div className="options">
               <h5> 1. Which of the following is correct</h5>
               
              <input className = "ques" type="radio" name="question"/>
              <MathJax.Node formula={q1opt1}/>
                
                <input className = "ques" type="radio" name="question"/>
                <MathJax.Node formula={q1opt2}/>
                
                <input className = "ques" type="radio" name="question"/>
                <MathJax.Node formula={q1opt3}/>
                
                <input className = "ques" type="radio" name="question"/>
                <MathJax.Node formula={q1opt4}/>
                </div>
                <hr/>
                
                <div className="options">
               <h5> 2.The mass-energy equivalence is described by the famous equation</h5>
               
               <input className = "ques" type="radio" name="question1"/>
                <MathJax.Node formula="E=mc^2"/>
                
                <input className = "ques" type="radio" name="question1"/>
                <MathJax.Node formula="E=mc2"/>
                
                <input className = "ques" type="radio" name="question1"/>
                <MathJax.Node formula="E=mc^3"/>
                
                <input className = "ques" type="radio" name="question1"/>
                <MathJax.Node formula="E=mc3"/>
                </div>
                <hr/>
               
                <div  className="options">
                <h5>  3. Formula for Distance Calculation</h5>
                
                <input className="q3" type="radio" name="question2"/>
                <MathJax.Node formula="\sqrt{(X_{1}-X_{2})^{2}+(Y_{1}-Y_{2})^{2}}"/>
                
                <input className="q3" type="radio" name="question2"/>
                <MathJax.Node formula="\sqrt{(X_{1}-Y_{1})^{2}+(X_{2}-Y_{2})^{2}}"/>
                
                <input className="q3" type="radio" name="question2"/>
                <MathJax.Node formula="\sqrt{(Y_{1}-Y_{2})^{2}+(X_{1}-X_{2})^{2}}"/>
                
                <input className="q3" type="radio" name="question2"/>
                <MathJax.Node formula="\sqrt{(X_{1}-Y_{2})^{2}+(Y_{1}-X_{2})^{2}}"/>
                </div>
                <hr/>
                
                <div  className="options">
                  <h5>4. Pythagorean Theorem</h5>
                  
                  <input className = "ques"type="radio" name="question3"/>
                  <MathJax.Node formula="a^{2}-b^{2}=c^{2}"/>
                  
                  <input className ="ques" type="radio" name="question3"/>
                  <MathJax.Node formula="a^{2}*b^{2}=c^{2}"/>
                  
                  <input className = "ques" type="radio" name="question3"/>
                  <MathJax.Node formula="a^{2}+b^{2}=c^{2}"/>
                  
                  <input className = "ques" type="radio" name="question3"/>
                  <MathJax.Node formula="a^{2}/b^{2}=c^{2}"/>
                </div>
                <hr/>
                <div className="options">
                  <h5>5. Area of Circle</h5>
                  
                  <input className = "ques" type="radio" name="question4"/>
                  <MathJax.Node formula="\pi*r^{2}"/>
                  
                  <input className = "ques" type="radio" name="question4"/>
                  <MathJax.Node formula="\pi*r^{3}"/>
                  
                  <input className = "ques" type="radio" name="question4"/>
                  <MathJax.Node formula="2\pi*r^{2}"/>
                  
                  <input className = "ques" type="radio" name="question4"/>
                  <MathJax.Node formula="2\pi*r"/>
                </div>
          </MathJax.Provider>
    )
  }
}
export default Exquiz