
import React from 'react';
import cookie from 'react-cookie';
import {Form, FormGroup, ControlLabel, FormControl, Col, Button} from 'react-bootstrap'
import {PageHeader} from 'react-bootstrap';

const headerTextStyle={
  textAlign:"center",
};

const colTextStyle={
  textAalign : "center",
  fontWeight : "bold",
};

const buttonStyle={
   leftMergin : "5 auto",
};

export default class OpinionForm extends React.Component  {

   constructor(props) {
    super(props);
    this.state = {title: '', content: ''};

    this.titleChange = this.titleChange.bind(this);
    this.contentChange = this.contentChange.bind(this);
    this.register = this.register.bind(this);
   }

  titleChange(event) {
    this.setState({title : event.target.value});
  }
  contentChange(event) {
    this.setState({content : event.target.value});
  }

   register(event){
    //e.preventDefault();
    var cookieValue = cookie.load('enemys');
    if(this.state.title == null || this.state.title == '')
       alert('제목을 입력해주세요.');
    else if(this.state.content == null || this.state.content == '')
       alert('내용을 입력해주세요.');
    else  if(cookieValue<=5 || cookieValue== null)
        alert('등록확인');
    else
        alert('등록오류');
  }

    render() {
        return(
            	<div>
            	  <PageHeader style={headerTextStyle}><small>고객 문의</small></PageHeader>
                      <Form horizontal action="/api/mail/opinionSendMail" method="post" onSubmit = {this.register}>
                        <FormGroup controlId="formHorizontalTitle">
                          <Col componentClass={ControlLabel} xsOffset={2} smOffset={3} mdOffset={3} lgOffset={3} xs={2} sm={2} md={2} lg={2} style = {colTextStyle}>
                            <b>제목</b>
                          </Col>
                          <Col xsOffset={0} smOffset={0} mdOffset={0} lgOffset={0} xs={7} sm={5} md={3} lg={3} >
                            <FormControl type="text" onChange = {this.titleChange} name = "title" placeholder="제목을 입력하세요" />
                          </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalContent">
                          <Col componentClass={ControlLabel} xsOffset={2} smOffset={0} mdOffset={3} lgOffset={3} xs={2} sm={4} md={2} lg={2}  style = {colTextStyle}>
                            내용
                          </Col>
                          <Col xsOffset={0} smOffset={0} mdOffset={0} lgOffset={0} xs={7} sm={5} md={3} lg={3} >
                            <FormControl componentClass="textarea" rows="5" onChange = {this.contentChange} name = "content" placeholder="내용을 작성해 주세요" />
                          </Col>
                        </FormGroup>
                        <FormGroup>
                          <Col xsOffset={5} smOffset={5} mdOffset={5} lgOffset={5} xs={5} sm={5} md={4} lg={4} style={buttonStyle}>
                            <Button type="submit">
                              문의하기
                            </Button>
                          </Col>
                        </FormGroup>
                      </Form>
              </div>
        );
    }
}
