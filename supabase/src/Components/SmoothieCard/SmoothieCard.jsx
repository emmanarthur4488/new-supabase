import React from 'react'
import {Link} from "react-router-dom"
import {supabase} from "../Config/Clients"

const SmoothieCard = ({smoothie, onDelete}) => {

  const handleDelete = async () => {
    const {data, error} = await supabase
      .from('smoothies')
      .delete()
      .eq('id', smoothie.id)

      if (error) {
        console.log(error)
      }
      if (data) {
        console.log(data)
        onDelete(smoothie.id)
      }
  }

  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">
          {smoothie.rating}
      </div>
      <div className="buttons">
        <Link to={'/' + smoothie.id}>
          <i className="fa-solid fa-pen"></i>
        </Link>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  )
}

export default SmoothieCard
