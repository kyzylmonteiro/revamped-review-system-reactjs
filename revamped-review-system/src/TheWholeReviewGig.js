import React from 'react'
import Modal from 'react-modal';
import GiveReviewContents from './GiveReviewContents'
import ShowReviewContents from './ShowReviewContents'
import ReviewBox from './ReviewBox';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '60%',
    height                : '80%'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class TheWholeReviewGig extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>{this.props.type=='give' ? "Give A Review?":"See reviews"}</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal Box"
        >
          <div id='closeModalBox' onClick={this.closeModal}>X</div>
          {this.props.type=='give' ? <GiveReviewContents closeit={this.closeModal}/>:<ShowReviewContents closeit={this.closeModal}/>}

        </Modal>
      </div>
    );
  }
}

export default TheWholeReviewGig
