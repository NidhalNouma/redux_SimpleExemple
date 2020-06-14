import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {New, Id, Name, Age} from '../Actions'
import {Link} from 'react-router-dom'


function List() {

  const dispatch = useDispatch()

  const data = useSelector(state => state.new)
  const name = useSelector(state => state.form.name)
  const age = useSelector(state => state.form.age)
  const id = useSelector(state => state.form.id)
    
  return (
    <div>
      <h1>List Page</h1>
      <form onSubmit={(e) => {
                       e.preventDefault()
                       dispatch(Id())
                       return dispatch(New({id: id,name: name, age: age}))
                    }}>
        <input type="text" placeholder="name" onChange={(t) => dispatch(Name(t.target.value))} value={name}/>
        <input type="text" placeholder="age"  onChange={(t) => dispatch(Age(t.target.value))} value={age}/>
        <input type="submit"/>
      </form>

      <ul>
        { data.map(item => (
          <li key={item.id}>
            <Link to={"/list/"+item.id}>{ item.name }  { item.age } </Link> 
          </li> )
          )
        }
      </ul>

    </div>
  );
}

export default List;