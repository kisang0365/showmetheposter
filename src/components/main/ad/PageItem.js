import React from 'react';
import {Grid, Row, Col, ButtonToolbar, Button, ButtonGroup, Glyphicon} from 'react-bootstrap';
import {colCentered, pageView} from '../../../css';

class PageItem extends React.Component  {

    constructor(props) {
      super(props);

      var pages = new Array();
      for(var i=1; i<=props.pages; i++){
        pages.push(i);
      }
      this.state = {
        list:pages,
        range:1
      };
      this.showLeftPage = this.showLeftPage.bind(this);
      this.showRightPage = this.showRightPage.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
      if( this.props.pages != prevProps.pages){
        var pages = new Array();
        for(var i=1; i<=this.props.pages; i++){
          pages.push(i);
        }
        this.setState({list:pages});
      }
    }

     showRightPage = () => {
      var r = this.state.range + 1;
      if(this.state.list.length <= (r-1)*pageView) r=1;
      this.setState({range : r });
     }

     showLeftPage = () => {
       var r = this.state.range - 1;
       if( r < 1 && this.state.list.length % pageView == 0) { r = parseInt(this.state.list.length / pageView , 10) ;}
       else if (r < 1) { r = parseInt(this.state.list.length / pageView+1 , 10) ;}
       this.setState({range : r });
     }



    handleClick = (page) => () => {
      this.props.onPageClick(page);
    }

    render() {
	      return(
          <Grid>
            <Row style={colCentered}>
              <Col >
                <ButtonToolbar>
                  <ButtonGroup style={colCentered}>
                  <Button onClick={this.showLeftPage}><Glyphicon glyph="menu-left" /></Button>
                    {
                      this.state.list.slice( (this.state.range-1)*pageView, this.state.range*pageView ).map( page =>
                        <Button key={page} onClick={this.handleClick(page)}>{page}</Button>
                      )
                    }
                  <Button onClick={this.showRightPage}><Glyphicon glyph="menu-right" /></Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Col>
            </Row>
          </Grid>
        );
    }
}


export default PageItem;
