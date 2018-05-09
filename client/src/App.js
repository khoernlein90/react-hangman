import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ["alpha", "bravo", "charlie"],
      pickedWord: null,
      placeholders: [],
      currentLetter: null
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress = event => {
    const currentLetter = event.key;
    for (var i = 0; i < this.state.pickedWord.length; i++) {
      if (currentLetter === this.state.pickedWord[i]) {
        const alteredArray = this.state.placeholders.splice(
          i,
          1,
          currentLetter
        );
      }
    }
    this.setState({ currentLetter });
  };

  componentWillMount() {
    let pickedWord = this.state.words[
      Math.floor(Math.random() * this.state.words.length)
    ];
    this.setState({ pickedWord });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
    let placeholders = [];
    for (let char of this.state.pickedWord) {
      placeholders.push("_");
    }
    this.setState({ placeholders });
  }
  render() {
    return <div>{this.state.placeholders.join(" ")}</div>;
  }
}

export default App;
