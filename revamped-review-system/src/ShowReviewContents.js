import React from 'react';
import ReviewBox from './ReviewBox';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class ShowReviewContents extends React.Component {
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
    return (
      <section>
      <div id="quatSec-top">
      </div>
      <div id="unquatSec-bottom">
        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>

          <TabList>
            <Tab>Home</Tab>
            <Tab>Feature Tags</Tab>
            <Tab>Sorting</Tab>
          </TabList>

          <TabPanel>
            <div id="scrollableHalfSec-left">
              <div id="banner-p">Positive</div>
              <ReviewBox />
              <ReviewBox />
            </div>
            <div id="scrollableHalfSec-right">
            <div id="banner-n">Negative</div>
              <ReviewBox />
              <ReviewBox />
            </div>
          </TabPanel>

          <TabPanel>

          </TabPanel>

          <TabPanel>

          </TabPanel>

        </Tabs>
      </div>
      </section>
    );
  }
}

export default ShowReviewContents
