import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./kyz-react-tabs.css";

class GiveReviewContents extends React.Component {
  constructor(props) {
      super();
      this.state = { tabIndex: 0, nextButtonText:'Next >' };
  }
  onNextClicked = (tabIndex)=> {
      if(this.state.tabIndex+1<2)
      {
        this.setState({ tabIndex:(this.state.tabIndex+1),  nextButtonText:this.state.nextButtonText})
      }
      else if(this.state.tabIndex+1==2){
        this.setState({ tabIndex:this.state.tabIndex+1, nextButtonText:'Submit'})
      }
      else {
        this.props.closeit();
      }
  }
  render() {
    // const { closeIt } = this.props;
    return (
      <section>
      <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>

        <TabList>
          <Tab>Quality</Tab>
          <Tab>Packaging</Tab>
          <Tab>Delivery</Tab>
        </TabList>

        <TabPanel>
          <div id='halfSec-left'>
            <img src='img1.jpg' id='reviewImgs' alt='Quality'/>
          </div>
          <div id='halfSec-right'>
            <div id='halfSec-right-top'></div>
            <div id='halfSec-right-bottom'>
              <textarea id="reviewTextarea" placeholder="Please give an honest feedback to help out a fellow customer."></textarea>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div id='halfSec-left'>
            <img src='img2.jpg' id='reviewImgs' alt='Packaging'/>
          </div>
          <div id='halfSec-right'>
            <div id='halfSec-right-top'></div>
            <div id='halfSec-right-bottom'>
              <textarea id="reviewTextarea" placeholder="Please give an honest feedback to help out a fellow customer."></textarea>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div id='halfSec-left'>
            <img src='img3.jpg' id='reviewImgs' alt='Delivery'/>
          </div>
          <div id='halfSec-right'>
            <div id='halfSec-right-top'></div>
            <div id='halfSec-right-bottom'>
              <textarea id="reviewTextarea" placeholder="Please give an honest feedback to help out a fellow customer."></textarea>
            </div>
          </div>
        </TabPanel>

      </Tabs>
      <button id='nextButton' onClick={this.onNextClicked}>{this.state.nextButtonText}</button>
      </section>
    );
  }
}

export default GiveReviewContents
