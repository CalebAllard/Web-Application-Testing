import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import DashBoard from './components/dashboard';


test('should increment', () => {
  render(<DashBoard />)
  fireEvent.click('strike');
  expect(values.strikes).toBe(1);

})
  
  
  test('renders learn react link', () => {
  const { getByText } = render(<App />);
  
});
