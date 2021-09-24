import React from 'react';
import ReactDOM from 'react-dom';


// this should allow a modal to show up. We need ot mke sure the modal is rendered 
// directly on to our body elemnt
// you need to go into your index.html and add a modal root
// then add document.querySelector to the div in modal.js
// anytiem we render our modal ocmp rather than showing as a child itll be rendered in the div as modal
// modal is going to take the jsx and attempt to insert it as a child ot the id of modal

const Modal = props => {
    return ReactDOM.createPortal(
      <div onClick={props.onDismiss} className="ui dimmer modals visible active">
        <div
          onClick={e => e.stopPropagation()}
          className="ui standard modal visible active"
        >
          <div className="header">{props.title}</div>
          <div className="content">{props.content}</div>
          <div className="actions">{props.actions}</div>
        </div>
      </div>,
      document.querySelector('#modal')
    );
  };
  
  export default Modal;
  