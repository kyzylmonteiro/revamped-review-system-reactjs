import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./kyz-react-tabs.css";
import StarRatingComponent from "react-star-rating-component";

class GiveReviewContents extends React.Component {
  constructor(props) {
    super();
    this.state = { tabIndex: 0, nextButtonText: "Next >", rating: 1 };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  onNextClicked = tabIndex => {
    if (this.state.tabIndex + 1 < 2) {
      this.setState({
        tabIndex: this.state.tabIndex + 1,
        nextButtonText: this.state.nextButtonText
      });
    } else if (this.state.tabIndex + 1 === 2) {
      this.setState({
        tabIndex: this.state.tabIndex + 1,
        nextButtonText: "Submit"
      });
    } else {
      this.props.closeit();
    }
  };
  render() {
    const { rating } = this.state.rating;
    // const { closeIt } = this.props;
    return (
      <section>
        <Tabs
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.setState({ tabIndex })}
        >
          <TabList>
            <Tab>Quality</Tab>
            <Tab>Packaging</Tab>
            <Tab>Delivery</Tab>
          </TabList>

          <TabPanel>
            <div id="halfSec-left">
              <img src="Quality.gif" id="reviewImgs" alt="Quality" />
            </div>
            <div id="halfSec-right">
              <div id="halfSec-right-top">
                <div className="rating-stars">
                  <h5>
                    <center>Rate Quality: {rating}</center>
                  </h5>
                  <div id="ratingContainer">
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={rating}
                      emptyStarColor={`#bfbfbf`}
                      onStarClick={this.onStarClick.bind(this)}
                    />
                  </div>
                </div>
              </div>

              <div id="halfSec-right-bottom">
                <textarea
                  id="reviewTextarea"
                  placeholder="Please write an honest review to help out a fellow customer."
                ></textarea>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div id="halfSec-left">
              <img src="packaging.gif" id="reviewImgs" alt="Packaging" />
            </div>
            <div id="halfSec-right">
              <div id="halfSec-right-top">
                <div className="rating-stars">
                  <h5>
                    <center>Rate Packaging: {rating}</center>
                  </h5>
                  <div id="ratingContainer">
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={rating}
                      emptyStarColor={`#bfbfbf`}
                      onStarClick={this.onStarClick.bind(this)}
                    />
                  </div>
                </div>
              </div>

              <div id="halfSec-right-bottom">
                <textarea
                  id="reviewTextarea"
                  placeholder="Please write an honest review to help out a fellow customer."
                ></textarea>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div id="halfSec-left">
              <img src="delivery.gif" id="reviewImgs" alt="Delivery" />
            </div>
            <div id="halfSec-right">
              <div id="halfSec-right-top">
                <div className="rating-stars">
                  <h5>
                    <center>Rate Delivery: {rating}</center>
                  </h5>
                  <div id="ratingContainer">
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={rating}
                      emptyStarColor={`#bfbfbf`}
                      onStarClick={this.onStarClick.bind(this)}
                    />
                  </div>
                </div>
              </div>
              <div id="halfSec-right-bottom">
                <textarea
                  id="reviewTextarea"
                  placeholder="Please write an honest review to help out a fellow customer."
                ></textarea>
              </div>
            </div>
          </TabPanel>
        </Tabs>
        <button id="nextButton" onClick={this.onNextClicked}>
          {this.state.nextButtonText}
        </button>
      </section>
    );
  }
}

export default GiveReviewContents;
