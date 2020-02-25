import React, {Component} from 'react';
import './App.css';
import  Checkbox  from './Checkbox';

const items = [
  'Toronto',
  'Ontario',
  'Canada',
];

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      city: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
 componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    let cityArr = [];
    for (const checkbox of this.selectedCheckboxes) {
      cityArr.push(checkbox);
     // this.setState({ city:cityArr });
      console.log(checkbox, 'is selected.');
      let obj = {'city': checkbox};
       //send data to server
      fetch('http://localhost:4000/city' , {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then((result) => result.json())
    .then((info) => { console.log(info); })
    
    }
    
   

    
  }

  createCheckbox = label => (
    <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )



  render(){ 
    return (
      <div className="App">
        <form method="post" onSubmit={this.handleFormSubmit}>
            {this.createCheckboxes()}
            <button type="submit">Save</button>
          </form>
      </div>
    );
   }
}

export default App;
