import React from 'react'
import { Link } from 'react-router-dom'

function index(props){

  return (
    <div className="main-footer ht-40">
      <div className="container-fluid pd-t-0-f ht-100p">
        <span>Copyright © 2020 <Link to="/">MYWORKMONEY.COM</Link>  All rights reserved.</span>
      </div>
    </div>
  )


}

export default index
