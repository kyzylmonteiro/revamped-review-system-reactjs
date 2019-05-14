import React from 'react';
import ReviewBox from './ReviewBox';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./kyz-react-tabs.css";
const API_ALL = 'https://my-json-server.typicode.com/amanrehman/demobulk/data';
const API_POS = 'https://my-json-server.typicode.com/amanrehman/demopos/positive';
const API_NEG = 'https://my-json-server.typicode.com/amanrehman/demoneg/negative';
const API_QUAL = 'https://my-json-server.typicode.com/amanrehman/demoqual/quality';
const API_PACK = 'https://my-json-server.typicode.com/amanrehman/demopack/packaging';
const API_DEL = 'https://my-json-server.typicode.com/amanrehman/demodel/delivery';

class ShowReviewContents extends React.Component {
  constructor(props) {
      super();
      this.state = { tabIndex: 0,  hitsAll: [], hitsPos: [], hitsNeg: [], hitsQual: [], hitsPack: [], hitsDel: [] ,isLoading: false, error: null,};
  }
  componentDidMount() {
     this.setState({ isLoading: true });
    fetch(API_ALL)
    .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ hitsAll: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));

      fetch(API_POS)
      .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({ hitsPos: data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));

        fetch(API_NEG)
        .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong ...');
            }
          })
          .then(data => this.setState({ hitsNeg: data, isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));

          fetch(API_QUAL)
          .then(response => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error('Something went wrong ...');
              }
            })
            .then(data => this.setState({ hitsQual: data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));

            fetch(API_PACK)
            .then(response => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error('Something went wrong ...');
              }
            })
            .then(data => this.setState({ hitsPack: data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));

            fetch(API_DEL)
            .then(response => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error('Something went wrong ...');
                }
              })
            .then(data => this.setState({ hitsDel: data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));

            // fetch(API_PACK)
            // .then(response => {
            //     if (response.ok) {
            //       return response.json();
            //     } else {
            //     throw new Error('Something went wrong ...');
            //     }
            // })
            // .then(data => this.setState({ hitsNeg: data, isLoading: false }))
            // .catch(error => this.setState({ error, isLoading: false }));
            //
            // fetch(API_PACK)
            // .then(response => {
            //   if (response.ok) {
            //     return response.json();
            //   } else {
            //     throw new Error('Something went wrong ...');
            //   }
            // })
            // .then(data => this.setState({ hitsNeg: data, isLoading: false }))
            // .catch(error => this.setState({ error, isLoading: false }));

  }

  render() {
    const { hitsAll, hitsPos, hitsNeg, hitsQual, hitsPack, hitsDel,isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <section>
      <div id="quatSec-top">
        <img src='https://images-na.ssl-images-amazon.com/images/I/51mu3VMfgIL._SX450_.jpg' id='productImgs' alt='ImgMissing'/>
        <img src='rating.png' id='ratingImgs' alt='RatingMissing'/>
        <h5 style={{width:'70%'}}><a href="https://www.amazon.in/Lenovo-10400mAH-Lithium-ion-Power-PA10400/dp/B01CS3POVQ/ref=cm_cr_arp_d_product_top?ie=UTF8">
        Lenovo 10400mAH Lithium-ion Power Bank PA10400</a><br/>Rs 699</h5>
      </div>
      <div id="unquatSec-bottom">
        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>

          <TabList>
            <Tab>Overview</Tab>
            <Tab>Tags</Tab>
            <Tab>Sort by Helpfulness</Tab>
          </TabList>

          <TabPanel style={{border:'1px LightGrey solid'}}>
            <div id="scrollableHalfSec-left">
              <div id="banner-p">Positive</div>
                {hitsPos.map(hit => <ReviewBox reviewText={hit.review} title={hit.title} ratingNumber={hit.rating} />)}
            </div>
            <div id="scrollableHalfSec-right">
            <div id="banner-n">Negative</div>
              {hitsNeg.map(hit => <ReviewBox reviewText={hit.review} title={hit.title} ratingNumber={hit.rating}/>)}
            </div>
          </TabPanel>

          <TabPanel>
            <div style={{width:'100%', border:'1px LightGrey solid'}} id="scrollableHalfSec" >
              <details><summary>Quality</summary><p><div id="scrollableDiv">
                {hitsQual.map(hit => <ReviewBox reviewText={hit.review} title={hit.title} ratingNumber={hit.rating}/>)}
                </div></p>
              </details>
              <details><summary>Packaging</summary><p><div id="scrollableDiv">
                {hitsPack.map(hit => <ReviewBox reviewText={hit.review} title={hit.title} ratingNumber={hit.rating}/>)}
                </div></p>
              </details>
              <details><summary>Delivery</summary><p><div id="scrollableDiv">
                {hitsDel.map(hit => <ReviewBox reviewText={hit.review} title={hit.title} ratingNumber={hit.rating}/>)}
                </div></p>
              </details>
            </div>
          </TabPanel>

          <TabPanel>

            <div style={{width:'100%', border:'1px LightGrey solid'}} id="scrollableHalfSec" >
              {hitsAll.map(hit => <ReviewBox reviewText={hit.review} title={hit.title} ratingNumber={hit.rating}/>)}
            </div>
          </TabPanel>

        </Tabs>
      </div>
      </section>
    );
  }
}

export default ShowReviewContents
