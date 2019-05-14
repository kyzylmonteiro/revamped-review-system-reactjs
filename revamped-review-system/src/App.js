import React from 'react';
import TheWholeReviewGig from './TheWholeReviewGig'
class App extends React.Component {

  render() {
    return (
      <div id="homePg">
      <h2>Reviewpedia has 2 components:</h2>
      <TheWholeReviewGig type='give'/>
      <TheWholeReviewGig type='show'/>
      </div>
    );
  }
}

export default App
