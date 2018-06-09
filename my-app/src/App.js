import React, { Component } from 'react';
import './App.css';
import kitten from './kitten.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import CatCard from './components/CatCard'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        kitten: kitten,
        unselectedKitten: kitten
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectKitten = breed => {
        const findKitten = this.state.unselectedKitten.find(item => item.breed === breed);

        if(findKitten === undefined) {
            // failure to select a new cat
            this.setState({ 
                message: "You guessed incorrectly! TRY AGAIN",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                kitten: kitten,
                unselectedKitten: kitten
            });
        }
        else {
            // success to select a new cat
            const newKitten = this.state.unselectedKitten.filter(item => item.breed !== breed);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                kitten: kitten,
                unselectedKitten: newKitten
            });
        }

        this.shuffleArray(kitten);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.kitten.map(kitten => (
                        <CatCard
                            breed={kitten.breed}
                            image={kitten.image}
                            selectKitten={this.selectKitten} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;