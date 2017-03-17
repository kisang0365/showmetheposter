import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { adInputData } from '../../actions';
import config from '../../config';
import { borderLine} from '../../css.js'


const form = reduxForm({
  form: 'adInputData'
});


class AdInput  extends React.Component  {
    handleFormSubmit(formProps) {
      this.props.adInputData(formProps);
    }


    render() {
        const { handleSubmit } = this.props;

	      return(
          <div>
              <div>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                  <div>
                    <label>제목(이름)</label>
                    <Field name="name" className="form-control" component="input" type="text" />
                  </div>
                  <div>
                    <label>url (클릭시 연결된 url)</label>
                    <Field name="url" className="form-control" component="input" type="text" />
                  </div>
                  <div>
                    <label>picUrl (사진 썸네일 url)</label>
                    <Field name="picUrl" className="form-control" component="input" type="text" />
                  </div>
                  <div>
                    <label>InputTime (yyyyMMdd 형식)</label>
                    <Field name="inputTime" className="form-control" component="input" type="text" />
                  </div>
                  <div>
                    <label>expired (yyyyMMdd 형식)</label>
                    <Field name="expired" className="form-control" component="input" type="text" />
                  </div>
                  <button type="submit" className="btn btn-primary">Input Data!</button>
                </form>
              </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, { adInputData })(form(AdInput));
