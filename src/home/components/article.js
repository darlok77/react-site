import React from 'react'

const Article = ({ data }) => (
  <div>
    {data.map(item => (
      <div key={item.id}>
        <img className="floatLeft" src={item.image} alt="img-event" height="40%" width="40%" />
        <p>
          {`titre: ${item.title}`}
        </p>
        <p>
          {`début: ${item.dateStart}`}
        </p>
        <p>
          {`fin: ${item.dateEnd}`}
        </p>
        <p>
          {`ville: ${item.city}`}
        </p>
        <p>
          {`adresse: ${item.address}`}
        </p>
        <p>
          {`description: ${item.description}`}
        </p>
      </div>
    ))}
  </div>
)

export default Article
