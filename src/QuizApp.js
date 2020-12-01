import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import { connect } from 'react-redux';
import { ActionTypes } from './constants/actionTypes';

const mapStateToProps = state => { return { ...state.quiz } };

const mapDispatchToProps = dispatch => ({
  onQuizLoad: payload => dispatch({ type: ActionTypes.QuizLoad, payload }),
  onPagerUpdate: payload => dispatch({ type: ActionTypes.PagerUpdate, payload })
});

class QuizApp extends Component {
  state = {
    quizes: [
      { id: 'data/javascript.json', name: 'Javascript' },
      { id: 'data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ],
    quizId: 'data/javascript.json'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  }

  componentDidMount() {
    this.load(this.state.quizId);
  }

  load(quizId) {
    let url = quizId || this.props.quizId;
    console.log('url',url);
    fetch(`../${url}`).then(res => res.json()).then(res => {
      res.quiz.question_set.forEach(q => {
        q.answer_set.forEach(o => o.selected = false);
      });
      res.quiz.config = Object.assign(this.props.quiz.config || {}, res.quiz.config);
      // console.log(' quiz.config', quiz.config);

      this.pager.count = res.quiz.question_set.length / this.pager.size;
      this.props.onQuizLoad(res);
      this.props.onPagerUpdate(this.pager);
    });
  }

  onChange = (e) => {
    this.setState({ quizId: e.target.value });
    this.load(e.target.value);
  }

  render() {
    console.log('quix',this.state.quiz)
    return (
      <div className="container">
        <div class="card">
        <Quiz quiz={this.state.quiz} quizId={this.state.quizId} mode={this.state.mode} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizApp);
