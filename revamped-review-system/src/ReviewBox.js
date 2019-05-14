import React from 'react';

class ReviewBox extends React.Component {
  constructor(props) {
      super();

      this.state={  };
  }
  render() {
    return (
      <div>

        <div id="reviewBox">
          <div id="profilePic">
            <img src='profilePicImg.jpeg' id="profilePicImg" alt='DP'/>
          </div>
          <div id={(this.props.ratingNumber>'2.5')?"ratingInRBGreen":"ratingInRBRed"}><span>{Math.trunc(this.props.ratingNumber)}/5</span></div>
            <b id='reviewTitle'>{this.props.title}</b>
            {this.props.reviewText}
        </div>

      </div>
    );
  }
}
export default ReviewBox
