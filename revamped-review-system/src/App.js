import React from "react";
import TheWholeReviewGig from "./TheWholeReviewGig";
import TheProjectIdea from "./TheProjectIdea";
class App extends React.Component {
  render() {
    return (
      <div id="homePg">
        <TheProjectIdea />
        <h4>Reviewpedia has 2 components:</h4>
        <TheWholeReviewGig type="give" />
        <TheWholeReviewGig type="show" />
      </div>
    );
  }
}

export default App;
