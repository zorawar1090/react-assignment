import React from 'react'

export default function (props) {
  const { title, description, genres } = props

  if (description === "") {
    return <div className="loading">Loading...</div>
  }
  else {
    return (
      <div className="wrapper">
        <div className="box box1">
          <img className="boxart" src={`https://api-test.newzoo.com/v1.0/metadata/game/boxart?name=${title}`} alt=""></img>
        </div>
        <div className="box box2">
          <h1>{title}</h1>
          <p></p>
          <h3>Genres</h3>
          {genres.map(genre => {
            if (genre.name === genres[genres.length - 1].name) {
              return `${genre.name}`
            }
            else {
              return `${genre.name}, `
            }

          })}
          <p></p>
          <h3>Description</h3>
          {description}
        </div>
      </div>
    )
  }
}