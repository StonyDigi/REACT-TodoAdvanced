import React from 'react'

const Element = ({name, email, todo, date}) => {
  return (
    <div className='element-conatiner'>
        <h3>Név: {name}</h3>
        <p>
            <small>
                <strong>
                Email: <a href="#">{email}</a> | Dátum: {date}
                </strong>
            </small>
        </p>
        <h4>Feladat: {todo}</h4>
    </div>
  )
}

export default Element