import React, { Component } from 'react';
import { Menu, Form, Card } from 'semantic-ui-react';

class OperationMenu extends Component {
  constructor(props){
    super(props);
    this.state = { };
    this.menuItems = [
      { key: 'add', name: 'Add', onClick: this.handleItemClick },
      { key: 'sub', name: 'Subtract', onClick: this.handleItemClick },
      { key: 'mult', name: 'Multiply', onClick: this.handleItemClick },
      { key: 'divide', name: 'Divide', onClick: this.handleItemClick }
    ]
  }

  handleItemClick = (e, { name }) => {
    let answer;
    switch(name){
      case 'Add': answer = this.state.secondItem + this.state.firstItem;
        break;
      case 'Subtract': answer = this.state.firstItem - this.state.secondItem;
        break;
      case 'Multiply': answer = this.state.firstItem * this.state.secondItem;
        break;
      case 'Divide': answer = this.state.firstItem / this.state.secondItem;
        break;
    }
    console.log(answer);
    this.setState({ activeItem: name, currentAnswer: answer }); 
  }

 handleFirstItemChange = (e) => {
  this.state.firstItem = parseInt(e.target.value);
  console.log(e.target.value)
 }

 handleSecondItemChange = (e) => {
  this.state.secondItem = parseInt(e.target.value);
  console.log(e.target.value)
 }

  render() {
    return (
      <div>
      <Menu items={this.menuItems} widths={4} size='massive' inverted />
      <Form>
        <Form.Field>
          <label>First Number</label>
          <input placeholder='Put a number here...' onChange={this.handleFirstItemChange}/>
        </Form.Field>
        <Form.Field>
          <label>Second Number </label>
          <input placeholder='Put another number here...' onChange={this.handleSecondItemChange} />
        </Form.Field>
      </Form>
      <Card>
        <Card.Content header='Answer' />
        <Card.Content description={this.state.currentAnswer} />
      </Card>
      </div>
    )
  }
}
export default OperationMenu;






