import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import TrashIcon from '../trash.svg';

class Trash extends Component {
  static propTypes = {
    isTrashVisible: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    onTrashClicked: PropTypes.func
  }

  isVisible = () => {
    return this.props.isTrashVisible ? '' : 'hidden';
  };

  onVisibleTrashClick = () => {
    console.log(this.index);
    this.props.onTrashClicked(this.props.index);
  }

  render() {
    return (
      <div className="bin">
        <img
        src={TrashIcon}
        alt="Trash"
        className={`trash ${this.isVisible()}`}
        onClick={ this.onVisibleTrashClick}>
        </img>
      </div>
    );
  }
}

export default Trash;
