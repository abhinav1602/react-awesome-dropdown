import React, { Component }    from 'react';
import ReactDOM                from 'react-dom';
import Dropdown                from '../../src/dropdown';

class Root extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstDropdown: '',
      secondDropdown: 'banana'
    };
  }

  render() {
    return (
      <div>
        <Dropdown
          options={[
            { value: 'apple', text: 'Apple' },
            { value: 'banana', text: 'Banana' },
            { value: 'pineapple', text: 'Pineapple' }
          ]}
          domRef='firstDropdown'
          value={this.state.firstDropdown}
          onChange={(value) => this.setState({ firstDropdown: value })}
        />
        <Dropdown
          options={[
            { value: 'apple', text: 'Apple' },
            { value: 'banana', text: 'Banana' },
            { value: 'pineapple', text: 'Pineapple' }
          ]}
          value={this.state.secondDropdown}
          onChange={(value) => this.setState({ secondDropdown: value })}
        />
      </div>
    );
  }
}


ReactDOM.render(<Root/>, document.getElementById('reactApplication'));
