import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import {supabase} from "../Config/Clients"


const MyCreate = () => {
  const navigate = useNavigate();

  const [title, setTile] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !method || !rating) {
      setFormError('please fill in all the field correctly')
      return
    }
    
    const { data, error} = await supabase
      .from('smoothies')
      .insert([{title, method, rating}])
      

      if (error) {
        console.log(error)
        setFormError('please fill in all the field correctly')
      }
      if (data) {
        console.log(data)
        setFormError(null)
        navigate('/')
      }
  }

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
         type="text"
         id="title"
         value={title}
         onChange={(e) => setTile(e.target.value)}
        />


        <label htmlFor="method">Method:</label>
        <textarea
         id="method"
         value={method}
         onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input
        type="number"
         id="rating"
         value={rating}
         onChange={(e) => setRating(e.target.value)}
        />

          <button>Create Smoothie Recipe</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default MyCreate
