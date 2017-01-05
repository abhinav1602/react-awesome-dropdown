import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

/**
 * Dropdown - params:
 * options: Array of { value: string, text: string }
 * selectedOption: value of selected option (string)
 * defaultOptionVisible: if true it will render a default option as the first option of the dropdown.
 * defaultOptionText: text of default option
 * onChange: function to be called when the user selects a new option of the dropdown.
*/
class Dropdown extends Component {
  constructor(props) {
    super(props);

    const { selectedOption, defaultOptionVisible } = this.props;

    const defaultOption =
      (defaultOptionVisible == undefined || defaultOptionVisible) &&
      (!selectedOption || selectedOption == '');


    this.state = {
      defaultOptionVisible: defaultOption
    };
  }
  _onChange(value) {
    this.setState({ defaultOptionVisible: false });
    this.props.onChange(value);
  }
  renderDefaultOption() {
    if (this.state.defaultOptionVisible) {
      return (
        <option value=''>{this.props.defaultOptionText || 'Select'}</option>
      );
    }
  }
  render() {
    const {
      options,
      selectedOption,
      xtraClassName = ''
    } = this.props;

    return (
      <select
        className={classnames(styles.dropdown, xtraClassName)}
        onChange={(event) => this._onChange(event.target.value)}
        value={selectedOption}
      >
        {this.renderDefaultOption()}
        {options.map((opt, index) => {
          return (
            <option value={opt.value} key={index}>{opt.text}</option>
          );
        })}
      </select>
    );
  }
}

Dropdown.propTypes = {
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    value: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  })).isRequired,
  xtraClassName: React.PropTypes.string,
  selectedOption: React.PropTypes.string,
  defaultOptionVisible: React.PropTypes.bool,
  defaultOptionText: React.PropTypes.string,
  onChange: React.PropTypes.func
};

export default Dropdown;
