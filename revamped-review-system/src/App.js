import React from 'react';
import TheWholeReviewGig from './TheWholeReviewGig'
class App extends React.Component {

  render() {
    return (
      <div>
      <TheWholeReviewGig type='give'/>
      <TheWholeReviewGig type='show'/>
      </div>
    );
  }
}

export default App
