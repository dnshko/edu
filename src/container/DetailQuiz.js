import React from 'react';
import {Card, Modal, Button, Skeleton, message} from 'antd'
import Questions from "../components/Quiz/Questions";
import Choices from "../components/Quiz/Choices";
import Counter from "../components/Quiz/Counter";
import {detailQuiz} from '../store/actions/quiz' 
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
 
class QuizDetail extends React.Component {
  state = {
    userAnswers: {},
    randomQuiz: [],
    modalVisible: false,
    submit: false,
  };

  componentDidMount() {
    this.props.detailQuiz(this.props.match.params.quizId)
  }
  UNSAFE_componentWillReceiveProps(newProps) {
    const { quizDetail } = newProps;
    if (this.props.quizDetail !== quizDetail) {
    const { randomQuiz } = this.state;
      const q = quizDetail.questions;
      for (let i = 0; i < q.length; i++) {
        let r = Math.floor(Math.random() * q.length);
        while (randomQuiz.includes(q[r])) {
          r = Math.floor(Math.random() * q.length);
        }
        randomQuiz.push(q[r]);
        this.setState({
          randomQuiz,
        });
      }
    }
  }
  onChange = (e, set, qId) => {
    const { userAnswers } = this.state;
    userAnswers[qId] = set === undefined ? e.target.value : set;
    this.setState({
      userAnswers,
    });
  };
  handleSubmit = () => {
    this.setState({ modalVisible: false });
    const {randomQuiz,userAnswers} =this.state;
    const {quizDetail} = this.props;
    let marksPerQ = quizDetail.total_marks/randomQuiz.length
    let marks = 0
    for(let i=0;i<randomQuiz.length;i++){
    if(userAnswers[randomQuiz[i].id]!==undefined)
      if(randomQuiz[i].answer===userAnswers[randomQuiz[i].id]) marks = marks + marksPerQ
    }
    if(marks>=quizDetail.total_marks/2)
      message.success(`You Got ${marks.toFixed(1)}/${quizDetail.total_marks}. That's Good`)
    else 
      message.error(`You Got ${marks.toFixed(1)}/${quizDetail.total_marks}. Not Well`)
    this.setState({submit:true})
    // console.log(answers);
  };
  render() {
    if(this.state.submit)
      return <Redirect to="/"/>
    const { userAnswers, randomQuiz } = this.state;
    const { quizDetail, loading } = this.props;
    return (
        <div className="container py-5">
          <div><Link to="/list"><Button type="dashed">Back</Button></Link></div>
          <h3>{quizDetail.title}</h3>
          
          {loading ? (
              <Skeleton active />
            ) : (
              Object.keys(quizDetail).length > 0 && randomQuiz? (
            <div>
          <Button
            onClick={() => {
              this.setState({ modalVisible: true });
            }}
          >
            preview quiz
          </Button>
              <Modal
                title={
                  <Counter onSubmit={this.handleSubmit} time={quizDetail.time} />
                }
                visible={this.state.modalVisible}
                footer={null}
                closable={false}
              >
                <Card title={quizDetail.title}>
                  <Questions
                    submit={this.handleSubmit}
                    questions={
                      randomQuiz &&
                      randomQuiz.map((q, i) => {
                        return (
                          <Card
                            type="inner"
                            key={i}
                            title={`${i + 1}. ${q.question}`}
                          >
                            <Choices
                              questionId={q.id}
                              choices={q.choices}
                              change={this.onChange}
                              userAnswer={userAnswers}
                            />
                          </Card>
                        );
                      })
                    }
                  />
                </Card>
              </Modal>
              </div>
            ): null
          ) }
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.quizes.loading,
    quizDetail: state.quizes.quizDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    detailQuiz: (id, courseId) => dispatch(detailQuiz(id, courseId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuizDetail);