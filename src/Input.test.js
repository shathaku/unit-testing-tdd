import React from 'react';
import {shallow} from 'enzyme';
import {createStore, applyMiddleware} from 'redux'
import Input from './Input';
import rootReducer from './reducers';
import {middlewares} from './configureStore';

const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState);
}

describe('render', () => {  
    describe('when word is not guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {success: false}
            const store = storeFactory(initialState);
            wrapper = shallow(<Input store={store}/>).dive().dive();
        })
        test('render without errors', () => {
            expect(wrapper.length).toBe(1);
        })
        test('render input box', () => {
            const input = wrapper.find('.guess-input');
            expect(input.length).toBe(1);
        })
        test('render submit button', () => {
            const submit = wrapper.find('.guess-submit');
            expect(submit.length).toBe(1);
        })
    })
    describe('when word is guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {success: true}
            const store = storeFactory(initialState);
            wrapper = shallow(<Input store={store}/>).dive().dive();
        })
        test('render without errors', () => {
            expect(wrapper.length).toBe(1);
        })
        test('render input box', () => {
            const input = wrapper.find('.guess-input');
            expect(input.length).toBe(0);
        })
        test('render submit button', () => {
            const submit = wrapper.find('.guess-submit');
            expect(submit.length).toBe(0);
        })
    })
})

describe('update state', () => {

})