import React from 'react';
import {shallow} from 'enzyme';
import Congrats from './Congrats';

test('renders no errors', () => {
    let wrapper = shallow(<Congrats/>);
    let mainDiv = wrapper.find(".congrats-main");
    expect(mainDiv.length).toBe(1);
})

test('renders no message when "success" props is false', () => {
    let props = {success: false};
    let wrapper = shallow(<Congrats {...props}/>);
    let mainDiv = wrapper.find(".congrats-main");
    expect(mainDiv.text()).toBe('');
})

test('renders some text when "success" props is true', () => {
    let props = {success: true};
    let wrapper = shallow(<Congrats {...props}/>);
    let mainDiv = wrapper.find(".congrats-msg");
    expect(mainDiv.text().length).not.toBe(0);
})