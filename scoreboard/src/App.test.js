import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import App from './App';
import DashBoard from './components/dashboard';
import Display from './components/display';


test("fire event strike",() => {
  const {getByText} = render(<DashBoard/>)
  
  
  fireEvent.click(getByText('strike'), {target:{innerText:'strike'}});

  
  expect(getByText(/Strikes:/i)).toHaveTextContent('1')

})

test("display button strike", () => {
  const {getByText} = render(<DashBoard/>);
  expect(getByText('strike')).toHaveTextContent('strike');
})




// test('should pass string "strike"', async () => {
//   const {getByTestId} = render(<DashBoard />)
  
//   fireEvent.click(getByTestId('strike');


// })
  //test('it containes strike', () => {
  //   const {getAllByText} = render(<DashBoard/>);
  //   getAllByText(/strike/i)[1];

  // })
  // test('it containes title', () => {
  //   const {getByText} = render(<DashBoard/>);
  //   console.log(getByText(/Baseball counter/i));

  // })

  // test('DashBoard renders', () => {

  //     const dashBoard = render(<DashBoard/>);

  //     console.log(dashBoard.getByText('strike'));


  // })

  // test("strike is diplaying", () => {
  //   const {getAllByText,getByText} = render(<DashBoard/>)

  //   const button = getByText(/strike/i);

  //   fireEvent.click(button);

  // })
   
  test('renders learn react link', () => {
   render(<App />);
    
  });
