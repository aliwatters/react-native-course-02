# React Native Course 02

Running through course at: https://www.udemy.com/the-complete-react-native-and-redux-course/
Repo at https://github.com/StephenGrider/ReactNativeReduxCasts

## eslint and beautify setup

1. See package.json and .eslintrc for rules
2. Set grammar for file to be jsx (ctrl+shift+l)
3. beautify with ctrl+alt+b

Note: object-curly-spacing rallycoding eslint conflicts with style from beautify so turned it off.

## Running emulator and choosing avd

`action -> store [reducer -> state]`

```
$ emulator -list-avds
$ emulator @foo
```

## Redux

```
const reducer = (state=[], action) => {
	if (action.type === 'split_string') {
  	return action.payload.split('');
  }
  return state;
};

const store = Redux.createStore(reducer);

store.getState();

const action = {
  type: 'split_string',
  payload: 'hello'
};

store.dispatch(action);
store.getState();
```
