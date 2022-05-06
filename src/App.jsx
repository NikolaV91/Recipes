import React from 'react'
import HomePage from './pages/HomePage/HomePage.jsx';
import SinglePage from './pages/SinglePage/SinglePage.jsx';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'
import{ useState, useEffect} from "react"
import { Route, Switch } from 'react-router-dom';

import './app.css'

const App =()=>{
  const [data, setData] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState("")
  const [isModalOpen, setModalToOpen] = useState(false)
  const [shouldUpdate, setUpdate] = useState(false)
  
  useEffect(()=>{
    fetch('https://cors-anywhere.herokuapp.com/https://6245a34b6b7ecf057c21c934.mockapi.io/recipes')
    .then((res)=>res.json())
    .then((data)=> setData(data))
  }, [shouldUpdate])
  
  const setShouldUpdate = ()=>{
    setUpdate(!shouldUpdate)
    }
    
    const setSelectedRecipe =(xxx)=>{
      setSelectedRecipeId(xxx)
  }

  const setModal = (modalState)=>{
    setModalToOpen(modalState)
  }

    return ( 
      <div className='appDiv'>
          {isModalOpen && <Modal setShouldUpdate={setShouldUpdate} setModal={setModal}/>}
          <Header setModalToOpen={setModal}/>
          <Switch>
            <Route path="/singlePage">
              <SinglePage setSelectedRecipe={setSelectedRecipe} recipe={data.find(e=>e.id===selectedRecipeId)}/>
            </Route>
            <Route path="/">
              <HomePage setShouldUpdate={setShouldUpdate} recipes={data} setSelectedRecipe={setSelectedRecipe}/>
            </Route>
          </Switch>
          <Footer/>
        </div>
     );
  }

export default App;