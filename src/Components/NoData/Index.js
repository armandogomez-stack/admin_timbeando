import React from 'react'

function Index({ label, description, titleButton, children }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-lg-12 col-xl-12">
          <h1 className="mb-0">{label}</h1>
          <p>{description}</p>

          { children }

        </div>
      </div>
    </div>
  )
}


export default Index