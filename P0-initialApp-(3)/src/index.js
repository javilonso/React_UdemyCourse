// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
// const App = function() {
//     return <div>Hi there!</div>;
// };

// function getButtonText(){
//     return 'Click on me!';
// }

const App = () => {
    const buttonTexta = {text: 'Click mee'};
    //const buttonText = ['Click', 'me'];
    const buttonText = 'Click me';
    // const mystyle = {backgroundColor:'blue', color:'white'};

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:'white'}}>
                {buttonTexta.text}
                {/* {buttonText} */}
                </button>
        </div>
        );
     };

// Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);