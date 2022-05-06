import React from 'react'
import { Link } from 'react-router-dom';
import './single-page.css'




  const SinglePage = (props)=> { 
    return ( 
      <>
          <h1>{props.recipe.meal}</h1>
        <div className="single-page">
          <img className='cardImg' src={props.recipe.image} alt="meal" />
          <div className='detailsDiv'>
            <h2>Prep time : {props.recipe.prepTime}</h2>
            <h2>Level : {props.recipe.level}</h2>
            <h2>Country of origin : {props.recipe.countryOfOrigin}</h2>
            <ul>
               <h2>Ingredients: </h2>
              {props.recipe.ingredients.map(e => <li>{e}</li>)}
             </ul>
          </div>
        </div>
         <Link to={`/`}><button className='single-pageBtn' onClick={()=>props.setSelectedRecipe('')}>Back to home</button></Link> 
      </>
     );
  }
export default SinglePage;