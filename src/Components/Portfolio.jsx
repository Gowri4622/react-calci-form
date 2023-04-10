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