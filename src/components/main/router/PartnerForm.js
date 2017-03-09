import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Col, Button} from 'react-bootstrap'
import cookie from 'react-cookie';
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

export default class PartnerForm extends React.Component  {

    constructor(props) {
    super(props);
    this.state = {brand: '', email: '', number: ''};

    this.brandChange = this.brandChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.numberChange = this.numberChange.bind(this);
    this.register = this.register.bind(this);
   }

  brandChange(event) {
    this.setState({brand : event.target.value});
  }
  emailChange(event) {
    this.setState({email : event.target.value});
  }
  numberChange(event) {
    this.setState({number : event.target.value});
  }

   register(event){
    //e.preventDefault();
    var cookieValue = cookie.load('partners');
    if(this.state.brand == null || this.state.brand == '')
       alert('브랜드를 입력해주세요.');
    else if(this.state.email == null || this.state.email == '')
       alert('이메일을  입력해주세요.');
    else if(this.state.number == null || this.state.number == '')
       alert('연락처를  입력해주세요.');
    else  if(cookieValue<=5 || cookieValue== null)
        alert('등록확인');
    else
        alert('등록오류');
  }
    render() {
        return(
            	<div>
            	  <PageHeader style={headerTextStyle}><small>제휴 문의</small></PageHeader>
                      <Form horizontal name = "brandform" action="/api/mail/partnerSendMail" method="post" onSubmit = {this.register}>
                        <FormGroup controlId="formHorizontalBrand">
                          <Col componentClass={ControlLabel} xsOffset={2} smOffset={3} mdOffset={3} lgOffset={3} xs={2} sm={2} md={2} lg={2} style = {colTextStyle}>
                            <b>상호명</b>
                          </Col>
                          <Col xsOffset={0} smOffset={0} mdOffset={0} lgOffset={0} xs={7} sm={5} md={3} lg={3} >
                            <FormControl type="text" onChange={this.brandChange} name = "brand" placeholder="상호명을 입력하세요" required="" />
                          </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                          <Col componentClass={ControlLabel} xsOffset={2} smOffset={0} mdOffset={3} lgOffset={3} xs={2} sm={4} md={2} lg={2}  style = {colTextStyle}>
                            이메일
                          </Col>
                          <Col xsOffset={0} smOffset={0} mdOffset={0} lgOffset={0} xs={7} sm={5} md={3} lg={3} >
                            <FormControl type="email" onChange={this.emailChange}  name = "email" placeholder="이메일을 입력하세요" required=""/>
                          </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPhone"  style = {colTextStyle}>
                          <Col componentClass={ControlLabel} xsOffset={2} smOffset={3} mdOffset={3} lgOffset={3} xs={2} sm={2} md={2} lg={2} >
                            연락처
                          </Col>
                          <Col xsOffset={0} smOffset={0} mdOffset={0} lgOffset={0} xs={7} sm={5} md={3} lg={3} >
                            <FormControl type="text" onChange={this.numberChange} name = "number" placeholder="연락처를 입력하세요" required=""/>
                          </Col>
                        </FormGroup>
                        <FormGroup>
                          <Col xsOffset={5} smOffset={5} mdOffset={5} lgOffset={5} xs={5} sm={5} md={4} lg={4} style={buttonStyle}>
                            <Button type="submit" name = 'submit'>
                              신청
                            </Button>
                          </Col>
                        </FormGroup>
                      </Form>
                    </div>
        );
    }
}
