import React from 'react'

function Index({label, icon, value }){

    return (
        <div className="ecommerce-card">
					<div className="card">
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<h4 className="card-title mg-b-15">{label}</h4>
							</div>
						<div className="row mb-3">
							<div className="col-md-4 col col-sm-4 col-xs-4">
								<div className="ht-50 wd-50 bg-primary-transparent brround text-center">
									<img src={ icon } className="ht-45 ht-45" alt="revenue" />
								</div>
							</div>
							<div className="col-md-8 col col-sm-8 col-xs-8 my-auto">
								<div className="float-right text-right tx-20 font-weight-bold my-auto">
								<span className="tx-20"></span>
								<h1>{ value } USD</h1>
								<i className=""></i></div>
							</div>
						</div>
						</div>
					</div>
				</div>
    )

}


export default Index