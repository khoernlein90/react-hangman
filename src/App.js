import React, { Component } from "react";
import Letters from "./Letters";

class App extends Component {
  state = {
    arrayOfWords: [
      "horse",
      "cat",
      "dog",
      "gorilla",
      "giraffe",
      "crocodile",
      "goat",
      "chicken",
      "tiger",
      "lion",
      "racoon",
      "cheetah"
    ],
    alphabet: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ],
    pickedWord: ""
  };

  componentDidMount() {
    this.getNewWord();
  }

  getNewWord() {
    const pickedWord = this.state.arrayOfWords[
      Math.floor(Math.random() * this.state.arrayOfWords.length)
    ];
    this.setState({ pickedWord });
  }

  render() {
    console.log(this.state.pickedWord);
    return (
      <div>
        <h1>asdffas</h1>
        <Letters letters={this.state.alphabet} />
      </div>
    );
  }
}

export default App;
