import 'react-native';
import React from 'react';
import App from '../src/app/App';

// Note: test renderer must be required after react-native.
// eslint-disable-next-line import/first
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const tree = renderer.create(<App />);
});
