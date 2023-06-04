### EX NO: 01

# <p align="center"> Create a multipage React Application</P>

## Aim:
To create a multipage React Application

## Algorithm:

Step-1: Create a new React project using Create React App or any other
boilerplate.

Step-2: Set up the necessary dependencies and tools like React Router for
handling routing in your application. You can install React Router using the
following command
``
npm install react-router-dom
``

Step-3:Create a file to define your routes, such as Routes.js. In this file,
import the necessary components for each page and set up the routes using
React Router.

Step-4:Create individual components for each page or view in your
application. For example, create HomePage.js, AboutPage.js, and
ContactPage.js.

Step-5:Implement the necessary UI and logic within each component. These
components will be rendered when the corresponding route is matched.

Step-6:Create a navigation component or include navigation within your
layout component.

Step-7:Use React Router's Link component to create links to your different
pages.

Step-8:In your main App.js or index.js file, import the Routes component you
created earlier.

Step-9:Render the Routes component to define the routing structure of your
application.

Step-10:Start your React development server using the npm start command.

## Program

### app.js
```javascript
import React from 'react'
import './App.css';
import Calculator from './Components/Calculator';
import Portfolio from './Components/Portfolio';
import Api from './Components/Api'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';



function App() {
  return (
    <React.Fragment>
      
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Header/>
            <Portfolio/>
            </React.Fragment>
          }/>
          <Route path="/calculator" element={
            <React.Fragment>
              <Header/>
             <Calculator/> 
            </React.Fragment>
          }/>
          <Route path="/Api" element={
            <React.Fragment>
              <Header/>
              <div className='title'>
                <h1>The Rick and Morty</h1>
              </div>
              
              <Api/>
            </React.Fragment>
          }/>
          
        </Routes>
      </Router>
    </React.Fragment>
    
     
    
  );
}

export default App;

```

### axios.js
```javascript
import React, { Component } from 'react'
import axios from 'axios'
import './Api.css'

export class Api extends Component {
constructor(props){
    super(props)
    this.state={
        characters : [],
        errorMessage: ''
    }
}
 componentDidMount(){
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then(response => {
        console.log(response)
     this.setState({characters:response.data.results})
    })
    .catch(error =>{
        console.log(error)
        this.setState({errorMessage: 'Error retrieving data'})
    })
 }

 
  render() {
    
    const {characters, errorMessage}=this.state

    return (
      <React.Fragment>  
       
      <div className='results'>
        {characters.length ? characters.map (character => <div>
    
            <img src={character.image} alt={character.name}/>
            <div className='details'>
            
                <h1>{character.name}</h1>
                <h3>{character.status} : {character.species}</h3>
            
            </div>
            </div>) : null}
        {errorMessage ? <div>{errorMessage}</div> : null}
        </div>
        
        
        </React.Fragment>
     
       
     
    )
  }
}

export default Api
```

### Calculator.jsx
```javascript
import React, { useState } from 'react';
import './Calculator.css'


function CalculatorBox() {
  const [inputValue, setInputValue] = useState('');

  const handleNumberClick = (number) => {
    setInputValue(inputValue + number);
  };

  const handleClearClick = () => {
    setInputValue('');
  };

  const handleCalculateClick = () => {
    try {
      const result = eval(inputValue); // Use eval with caution!
      setInputValue(result.toString());
    } catch (error) {
      setInputValue('Error');
    }
  };

  return (
    <React.Fragment>
    <h1 className='title'>My Calculator</h1>
    <div className='calculator-box'>
    
      <input type="text" value={inputValue} readOnly />

      <div>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleNumberClick('+')}>+</button>
      </div>

      <div>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleNumberClick('-')}>-</button>
      </div>

      <div>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleNumberClick('*')}>*</button>
      </div>

      <div>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button onClick={() => handleCalculateClick()}>=</button>
        <button onClick={() => handleNumberClick('/')}>/</button>
      </div>

      <div>
        <button onClick={() => handleClearClick()}>Clear</button>
      </div>
    </div>
    </React.Fragment>
  );
}

export default CalculatorBox;

```

### Portfolio.jsx
```javascript
import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <div id="page">
    <div className='photo-and-name'>
        
        <div className='contact-info-box'>
            <h1 className='name'>Gowri M</h1>
            <br/>
            <h3 className='job-title'>Innovator | Problem Solver | Quick Learner</h3>
            <p className='contact-details'>Email : gowri.manimaran.2002@gmail.com Phone : 8925757455</p>
            
        </div>
    </div>
    <div id="objective">
        <h3>Objective</h3>
        <p>
            To take a challenging and managerial role in the field of Computer programming and implement the expertise and experience gained in this field to develop complex project with efficiency and quality. 
        </p> 
    </div>
    <div id="education">
        <h3>Education</h3>
        <table>
            <tr className='school-1'>
                <td rowspan="2">2020 - 2024</td>
                <td><b>Saveetha Engineering College</b></td>
            </tr>
            <tr className='school-2'>
                <td>3rd year - CGPA : 9.21</td>
            </tr>
            
            <tr className='school-1'>
                <td rowspan="2">2019 - 2020</td>
                <td><b>Sir Ramaswami HR SEC School</b></td>
            </tr>
            <tr className='school-2'>
                <td>12th - 71.8%</td>
            </tr>
            
            <tr className='school-1'>
                <td rowspan="2">2017 - 2018</td>
                <td><b>Britannia High School</b></td>
            </tr>
            <tr className='school-2'>
                <td>10th - 87.2%</td>
            </tr>
        </table>
    </div>
    <div id="skills">
        <h3>Skills</h3>
    </div>
        <div className='container'>
            <ul className='myUL' >
                <li>Programming languages - C, Python, HTML, CSS, Java</li>
                <li>Mobile App Development</li>
                <li>Solid knowledge of Web Technology</li>
                <li>Practical knowledge of Machine Learning</li>
                <li>Interpersonal communication skill and Teamwork</li>
              </ul>
        </div>
        
    <div id="project">
        <h3>Projects</h3>
        <div className='projects'>
        <h4>1 . The Women Safety Android App</h4>
        <p>This app was build with the help of Java and XML in Android Studio.tracking the GPS
            location constantly and adding emergency numbers along with concise location through
            one-touch alert message service and can also be can be triggered just by shaking the
            android device in which the app is installed.</p>
        </div>
        <div className='projects'>
            <h4>2 . Emotion Based Music Recommendation</h4>
            <p>The project emotion based music built by using mediapipe and keras. Also opencv and
                streamlit is used to create a webapp for capturing the webcam in the browser with the
                use of streamlit-webrtc module.</p>
        </div>
        <div className='projects'>
            <h4>3 . Digitizing Handwritten Data</h4>
            <p>It was done with the help of Convolutional deep neural network and Deep
                learning. Build a convolutional neural network model that is able to classify to it's
                appropriate numerical value.
                </p>
        </div>
    </div>
    <div id="education">
        <h3>Certifications</h3>
        <table>
            <tr className='school-1'>
                <td rowspan="2">March 2021</td>
                <td><b>Certification of Completion in Java Programming</b></td>
            </tr>
            <tr className='school-2'>
                <td>GreatLearning</td>
            </tr>
            
            <tr className='school-1'>
                <td rowspan="2">September 2021</td>
                <td><b>Certification of Completion in Django</b></td>
            </tr>
            <tr className='school-2'>
                <td>Udemy</td>
            </tr>
            
            <tr className='school-1'>
                <td rowspan="2">February 2022</td>
                <td><b>Certification of Assessment in SQL</b></td>
            </tr>
            <tr className='school-2'>
                <td>HackerRank</td>
            </tr>
            <tr className='school-1'>
                <td rowspan="2">May 2022</td>
                <td><b>Certification of Completion in Deep Learning</b></td>
            </tr>
            <tr className='school-2'>
                <td>Infosys</td>
            </tr>
        </table>
        
    </div>
    <div id="skills">
        <h3>Area of Interests</h3>
    </div>
        <div className='container'>
            <ul className='myUL'  >
                <li>Debugging errors</li>
                <li>Learning languages</li>
                <li>Travel</li>
                <li>Listening music</li>
              </ul>
        </div>
        <div id="objective">
            <h3>declaration</h3>
            <p>
                I hereby declare that all the details provided above are true to the best of my knowledge. I hereby confirm that all the facts stated above are accurate to the best of my belief.
            </p>
        </div>
    

</div>
  )
}

export default Portfolio
```

## Output

![Screenshot 2023-06-04 110726](https://github.com/Gowri4622/react-calci-form/assets/75235455/5fc0addf-8beb-4a09-80eb-1e5a2878c244)

![Screenshot 2023-06-04 110742](https://github.com/Gowri4622/react-calci-form/assets/75235455/9a69c7b2-296f-47e1-ab44-de9219cb77fa)

![Screenshot 2023-06-04 110753](https://github.com/Gowri4622/react-calci-form/assets/75235455/3776253a-87fe-4865-bd0a-a25ea8a5a072)
![Screenshot 2023-06-04 110812](https://github.com/Gowri4622/react-calci-form/assets/75235455/7ac1397f-b05d-4573-9bcb-0b4ce089f71d)


## Result
Thus, to create a multipage React Application is successfully
implemented
