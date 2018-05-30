import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import TrashIcon from '../trash.svg';

class Trash extends Component {
  static propTypes = {
    isTrashVisible: PropTypes.bool.isRequired
  }

  isVisible = () => {
    return this.props.isTrashVisible ? '' : 'hidden';
  };
  render() {
    return (
      <div className="bin">
        <img src={ TrashIcon } alt="Trash" className={`trash ${this.isVisible()}`}></img>
      </div>
    );
  }
}

export default Trash;
