import React from 'react'
import { Link } from 'react-router-dom';
import './single-page.css'




  const SinglePage = (props)=> { 
    return ( 
      <>
        <div className="single-page">
         <Link to={`/`}><button className='single-pageBtn' onClick={()=>props.setSelectedRecipe('')}>Back to home</button></Link> 
          <h3>{props.recipe.meal}</h3>
          <img className='cardImg' src={props.recipe.image} alt="meal" />
          <p>Prep time : {props.recipe.prepTime}</p>
          <p>Level : {props.recipe.level}</p>
          <ul>
            Ingredients: 
            {props.recipe.ingredients.map(e => <li>{e}</li>)}
          </ul>
          <p>Country of origin : {props.recipe.countryOfOrigin}</p>
        </div>
      </>
     );
  }
export default SinglePage;