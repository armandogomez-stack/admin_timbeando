import React from 'react'


function index( props ){

   const { title, image, total1, label1, total2 } = props

  return (
    <div className="ecommerce-card">
									<div className="card">
										<div className="card-body">
											<div className="d-flex justify-content-between">
                        <h4 className="card-title mg-b-15">{title}</h4>
											</div>
											<div className="row mb-3">
												<div className="col-md-4 col col-sm-4 col-xs-4">
													<div className="ht-50 wd-50 bg-primary-transparent brround text-center">
														<img src={ image } className="ht-45 ht-45" alt="revenue" />
													</div>
												</div>
												<div className="col-md-8 col col-sm-8 col-xs-8 my-auto">
													<div className="float-right text-right tx-20 font-weight-bold my-auto"><span className="tx-20"></span>{total1}<i className=""></i></div>
												</div>
											</div>
											<div className="d-flex month">
                      <h5 className="float-left font-weight-normal text-muted tx-13"> {label1}</h5>

												<h3 className="badge badge-pill badge-primary ml-3 tx-13 float-right ml-auto" style={{fontSize : '1.3em'}}>{total2}</h3>
                        {/* <h5 className="tx-13 float-right ml-auto">{total2}</h5> */}
											</div>
											{/* <div className="clearfix"></div>
											<div className="d-flex lastmonth">
												<h5 className="mb-0 float-left font-weight-normal text-muted tx-13">{label2}</h5>
												<span className="dash-line"></span>
                        <h5 className=" mb-0 tx-13 float-right ml-auto">{porcentage}</h5>
											</div> */}
										</div>
									</div>
								</div>
  )
}

export default index