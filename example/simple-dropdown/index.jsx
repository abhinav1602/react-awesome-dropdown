import React, { Component }    from 'react';
import ReactDOM                from 'react-dom';
import Dropdown                from '../../src/dropdown';

class Root extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedValue: ''
    };
  }

  render() {
    return (
      <Dropdown
        options={[
          { value: 'apple', text: 'Apple' },
          { value: 'banana', text: 'Banana' },
          { value: 'pineapple', text: 'Pineapple' }
        ]}
        selectedOption={this.state.selectedValue}
        onChange={(value) => this.setState({ selectedValue: value })}
      />
    );
  }
}


ReactDOM.render(<Root/>, document.getElementById('reactApplication'));
