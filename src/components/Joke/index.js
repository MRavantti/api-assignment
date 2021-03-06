import React, { Component } from 'react'
import axios from 'axios';
import Button from '../Button';
import Image from '../Image';
import SpeakButton from '../SpeakButton';
import './Joke.css';

export class Joke extends Component {
  state = {
    joke: '',
    images: {
      1: require('../../Images/1.jpg'),
      2: require('../../Images/2.jpg'),
      3: require('../../Images/3.jpg'),
      4: require('../../Images/4.jpg'),
      5: require('../../Images/5.jpg'),
      6: require('../../Images/6.jpg'),
    },
    ranImage: '',
  }

  getJoke = () => {
    const { images } = this.state;

    this.setState({
      ranImage: images[Math.floor(Math.random() * 7)]
    });

    axios.get('https://api.chucknorris.io/jokes/random')
      .then(res => this.setState({
        joke: res.data
      }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getJoke()
  }

  render() {
    const { joke, ranImage } = this.state;

    return (
      <div className="joke-container">
        <Image image={ranImage} />
        <h3>{joke.value}</h3>
        <div>
          <Button text="New joke" onClick={() => this.getJoke()} />
          <SpeakButton text={joke.value} />
        </div>
      </div>
    )
  }
}

export default Joke
