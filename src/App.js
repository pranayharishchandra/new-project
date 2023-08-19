import React from 'react';

import Header from './components/Header'
// import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



/** APIs AND DATA ARE MANAGED IN APP, not the components */

function App() {
    const [feedackArrOfObj, setFeedackArrOfObj] = useState(FeedbackData);

    function deleteFeedback(id) {
        setFeedackArrOfObj(feedackArrOfObj.filter((obj) => obj.id !== id))
    }

    function addFeedback(newFeedbackObj) {
        newFeedbackObj.id = uuidv4();
        setFeedackArrOfObj([newFeedbackObj, ...feedackArrOfObj]);

        // console.log("app", newFeedbackObj)
    }

    return (

        <Router>    
 {/* If you want your header to remain present on every page of your application, 
    you can achieve this by placing the <Header /> component 
    outside of the <Routes> component. 
    This will ensure that the header is rendered on every route within your       application.*/}
                <Header />  {/* This will render the header on every page */}
            <Routes>
                <Route path="/about" element={<AboutPage />} />

                <Route
                    path="/"
                    element={(
                        <>

                            <FeedbackForm addFeedback={addFeedback} />
                            <FeedbackStats arrOfObj={feedackArrOfObj} />
                            <div className="container">
                                <FeedbackList
                                    arrOfObj={feedackArrOfObj}
                                    handleDelete={(id) => deleteFeedback(id)}
                                />
                            </div>
                            <footer>
                                <a href='/about' style={{color:'white'}}>About</a>
                            </footer>
                        </>
                    )}
                />

            </Routes>
        </Router>

    )


    // return (
    //     <Router>
    //         <Routes>
    //             {/* 
    //                 FOLLOWING METHOD NOT WORKING IDK WHY
    //             <Route path='/about'>This is about</Route> */}
    //             {/* 
    //                 THIS WORKS, BUT WE DON'T NEED IT
    //             <Route path="/about" element={<div>This is about</div>} /> */}
    //             <Route exact path="/about" element={<AboutPage />} />
    //             {/* <Route exact path="/about" Component={AboutPage} /> */}


    //         </Routes>


    //         <Header />

    //         <Routes>
    //             <Route exact path='/' element={(
    //                 <>
    //                     {/* <FeedbackForm addFeedback={(newFeedbackObj) => addFeedback(newFeedbackObj)} /> */}

    //                     <FeedbackForm addFeedback={addFeedback} />
    //                     <FeedbackStats arrOfObj={feedackArrOfObj} />
    //                     <div className='container'>

    //                         <FeedbackList arrOfObj={feedackArrOfObj}
    //                             handleDelete={(id) => deleteFeedback(id)} />


    //                     </div>

    //                     {/* /* <Route path='/pages/AboutPage'>This is about</Route>  */}
    //                 </>
    //             )} />
    //         </Routes>

    //     </Router>
    // )
}

export default App;