import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Find} from '../Actions'

function Detail({ match, location }) {
    
    const data = useSelector((state) => state.new)
    
    const dis = data.find((id) => id.id == match.params.id)
    const res = useDispatch(Find(match.params.id))

    console.log(match.params.id)
    console.log(dis)

  return (
    <div>
      <h1> id Page {dis.name}</h1>
    </div>
  );
}

export default Detail;