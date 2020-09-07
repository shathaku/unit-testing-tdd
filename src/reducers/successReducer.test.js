import {actionTypes} from '../actions';
import successReducer from './successReducer';

test('return default value of false when no action is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
})

test('return true when action of type CORRECT_GUESS is passed', () => {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
})