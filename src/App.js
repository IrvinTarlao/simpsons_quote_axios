import React from 'react';
import './App.css';
// import DisplayEmployee from './components/DisplayEmployee';
import DisplaySimpsonsQuote from './components/SimpsonsQuote';
import axios from 'axios';

// const sampleEmployee = {
//   gender: 'male',
//   name: {
//     first: 'Charlie',
//     last: 'Thompson',
//   },
//   location: {
//     street: {
//       number: 761,
//       name: 'Tay Street',
//     },
//     city: 'Timaru',
//     postcode: 76111,
//   },
//   email: 'charlie.thompson@example.com',
//   picture: {
//     medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
//   },
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsons: ""
    };
  }

  // getEmployee = () => {
  //   // Send the request
  //   axios.get('https://randomuser.me/api?nat=fr')
  //     // Extract the DATA from the received response
  //     .then(response => response.data)
  //     // Use this data to update the state
  //     .then(data => {
  //       this.setState({
  //         employee: data.results[0],
  //       });
  //   });
  // }

  getSimpsonsQuote = () => {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          simpsons: data[0],
        });
    });
  }


  render() {
    return (
      <div className="App">
        <DisplaySimpsonsQuote simpsons={this.state.simpsons} />
        <button type="button" onClick={this.getSimpsonsQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;
