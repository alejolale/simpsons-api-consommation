import React from 'react';
import './App.css';
import Quote from './components/Quote'
//il faut importer etinstaller => npm install axios
import axios from 'axios';

const initialQuote = {
  character: "Marge Simpson",
  characterDirection: "Right",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
  quote: "I'm sleeping in the bath tub.",
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: initialQuote
    };
    //binding not arrow function
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote = () => {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes?count=1')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      
      .then(data => {
        //verification of data components
        console.log(data);
        this.setState({
          quote: data[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <Quote character={this.state.quote} />
        <button className="App-button" type="button" onClick={this.getQuote}>Get Quote</button>
      </div>
    );
  }
}

export default App;
