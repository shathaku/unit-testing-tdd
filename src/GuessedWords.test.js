import React from 'react';
import {shallow} from 'enzyme';
import GuessedWords from './GuessedWords';

let props = {
    guessedWords: [{
        word: 'trains',
        matches: 2
    }]
}

test('renders without errors', () => {
    let wrapper = shallow(<GuessedWords/>);
    let guessDiv = wrapper.find('.guess-main');
    expect(guessDiv.length).toBe(1);
})

test('renders message when no word is guessed', () => {
    let wrapper = shallow(<GuessedWords/>);
    let guessDiv = wrapper.find('.guess-msg');
    expect(guessDiv.text().length).not.toBe(0);
})

test('renders table when word is guessed', () => {
    let wrapper = shallow(<GuessedWords {...props} />);
    let guessDiv = wrapper.find('.guess-table');
    expect(guessDiv.length).toBe(1);
})

test('renders correct no. of words', () => {
    props = {
        guessedWords: [{
            word: 'trains',
            matches: 2
        },
        {
            word: 'agile',
            matches: 1
        },
        {
            word: 'party',
            matches: 5
        }]
    }
    let wrapper = shallow(<GuessedWords {...props} />);
    let guessDiv = wrapper.find('.guess-row');
    expect(guessDiv.length).toBe(props.guessedWords.length);
})