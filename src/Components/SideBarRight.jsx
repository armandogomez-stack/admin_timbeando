import React from 'react'
import { Link } from 'react-router-dom'

function index(props){

  return (
  <div className="sidebar sidebar-right sidebar-animate">
  <div className="panel panel-primary card mb-0 rounded-0">
    <div className="tab-menu-heading card-header border-bottom">
      <div className="card-title mb-0">Notifications Of Orders</div>
    </div>
    <div className="">
      <div className="panel panel-primary">
        <div className=" tab-menu-heading">
          <div className="tabs-menu1 ">

            <ul className="nav panel-tabs main-nav-line">
              <li><a href="#orders" className="nav-link active" data-toggle="tab">Recent</a></li>
              <li><a href="#processing" className="nav-link" data-toggle="tab">Processing</a></li>
              <li><a href="#completed" className="nav-link" data-toggle="tab">Completed</a></li>
            </ul>
          </div>
        </div>
        <div className="panel-body tabs-menu-body main-content-body-right">
          <div className="tab-content">
            <div className="tab-pane active" id="orders">
              <label className="main-content-label tx-base mg-b-25">Recent Orders</label>
              <div className="main-media-list-activity">
                <div className="media">
                  <div className="media-icon bg-primary">
                    <i className="typcn typcn-shopping-cart"></i>
                  </div>
                  <div className="media-body">
                    <h6>Order Verification</h6><span>Product ID: #4521</span>
                  </div>
                  <div className="media-right">
                    2m ago
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-primary">
                    <i className="typcn typcn-shopping-cart"></i>
                  </div>
                  <div className="media-body">
                    <h6>Order Verification</h6><span>Product ID: #4547</span>
                  </div>
                  <div className="media-right">
                    45m ago
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-primary">
                    <i className="typcn typcn-shopping-cart"></i>
                  </div>
                  <div className="media-body">
                    <h6>Order Verification</h6><span>Product ID: #6354</span>
                  </div>
                  <div className="media-right">
                    1 hour ago
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-primary">
                    <i className="typcn typcn-shopping-cart"></i>
                  </div>
                  <div className="media-body">
                    <h6>Order Verification</h6><span>Product ID: #7485</span>
                  </div>
                  <div className="media-right">
                    2 hours ago
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-primary">
                    <i className="typcn typcn-shopping-cart"></i>
                  </div>
                  <div className="media-body">
                    <h6>Order Verification</h6><span>Product ID: #6547</span>
                  </div>
                  <div className="media-right">
                    4 hours ago
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-primary">
                    <i className="typcn typcn-shopping-cart"></i>
                  </div>
                  <div className="media-body">
                    <h6>Order Verification</h6><span>Product ID: #3654</span>
                  </div>
                  <div className="media-right">
                    5 hours ago
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-primary">
                    <i className="typcn typcn-shopping-cart"></i>
                  </div>
                  <div className="media-body">
                    <h6>Order Verification</h6><span>Product ID: #9874</span>
                  </div>
                  <div className="media-right">
                    7 hour ago
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="processing">
              <label className="main-content-label tx-base mg-b-25">Processing Orders</label>
              <div className="main-media-list-activity">
                <div className="media">
                  <div className="media-icon bg-pink">
                    <i className="typcn typcn-arrow-forward-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Orders For Shipment</h6><span>Cleared By: Agent #234</span>
                  </div>
                  <div className="media-right">
                    2m ago
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-pink">
                    <i className="typcn typcn-arrow-forward-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Orders For Shipment</h6><span>Cleared By: Agent #354</span>
                  </div>
                  <div className="media-right">
                    30m ago
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-pink">
                    <i className="typcn typcn-arrow-forward-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Orders For Shipment</h6><span>Cleared By: Agent #245</span>
                  </div>
                  <div className="media-right">
                    2 hours ago
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-pink">
                    <i className="typcn typcn-arrow-forward-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Orders For Shipment</h6><span>Cleared By: Agent #215</span>
                  </div>
                  <div className="media-right">
                    2 hours ago
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-pink">
                    <i className="typcn typcn-arrow-forward-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Orders For Shipment</h6><span>Cleared By: Agent #247</span>
                  </div>
                  <div className="media-right">
                    3 hours ago
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-pink">
                    <i className="typcn typcn-arrow-forward-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Orders For Shipment</h6><span>Cleared By: Agent #326</span>
                  </div>
                  <div className="media-right">
                    4 hours ago
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-pink">
                    <i className="typcn typcn-arrow-forward-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Orders For Shipment</h6><span>Cleared By: Agent #475</span>
                  </div>
                  <div className="media-right">
                    5 hours ago
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-pink">
                    <i className="typcn typcn-arrow-forward-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Orders For Shipment</h6><span>Cleared By: Agent #324</span>
                  </div>
                  <div className="media-right">
                    5 hours ago
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="completed">
              <label className="main-content-label tx-base mg-b-25">Completed Orders</label>
              <div className="main-media-list-activity">
                <div className="media">
                  <div className="media-icon bg-success">
                    <i className="typcn typcn-tick-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Successful Purchase</h6><span>Product ID: #3214</span>
                  </div>
                  <div className="media-right">
                    1 hour
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-success">
                    <i className="typcn typcn-tick-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Successful Purchase</h6><span>Product ID: #1245</span>
                  </div>
                  <div className="media-right">
                    2 hours
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-success">
                    <i className="typcn typcn-tick-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Successful Purchase</h6><span>Product ID: #4517</span>
                  </div>
                  <div className="media-right">
                    3 hours
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-success">
                    <i className="typcn typcn-tick-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Successful Purchase</h6><span>Product ID: #3254</span>
                  </div>
                  <div className="media-right">
                    3 hours
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-success">
                    <i className="typcn typcn-tick-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Successful Purchase</h6><span>Product ID: #1245</span>
                  </div>
                  <div className="media-right">
                    4 hours
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-success">
                    <i className="typcn typcn-tick-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Successful Purchase</h6><span>Product ID: #1457</span>
                  </div>
                  <div className="media-right">
                    4 hours
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-success">
                    <i className="typcn typcn-tick-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Successful Purchase</h6><span>Product ID: #4785</span>
                  </div>
                  <div className="media-right">
                    4 hours
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon bg-success">
                    <i className="typcn typcn-tick-outline"></i>
                  </div>
                  <div className="media-body">
                    <h6>Successful Purchase</h6><span>Product ID: #3245</span>
                  </div>
                  <div className="media-right">
                    5 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body border-top">
        <label className="main-content-label tx-base mg-b-25">Cancel Orders</label>
        <div className="main-media-list-activity mg-b-20">
          <div className="media">
            <div className="media-icon bg-danger">
              <i className="typcn typcn-times-outline"></i>
            </div>
            <div className="media-body">
              <h6>Purchase Cancellation</h6><span>Product ID: #3214</span>
            </div>
            <div className="media-right">
              20m ago
            </div>
          </div>
          <div className="media">
            <div className="media-icon bg-danger">
              <i className="typcn typcn-times-outline"></i>
            </div>
            <div className="media-body">
              <h6>Purchase Cancellation</h6><span>Product ID: #4125</span>
            </div>
            <div className="media-right">
              30m ago
            </div>
          </div>
          <div className="media">
            <div className="media-icon bg-danger">
              <i className="typcn typcn-times-outline"></i>
            </div>
            <div className="media-body">
              <h6>Purchase Cancellation</h6><span>Product ID: #7412</span>
            </div>
            <div className="media-right">
              6 hours ago
            </div>
          </div>
          <div className="media">
            <div className="media-icon bg-danger">
              <i className="typcn typcn-times-outline"></i>
            </div>
            <div className="media-body">
              <h6>Purchase Cancellation</h6><span>Product ID: #3241</span>
            </div>
            <div className="media-right">
              8 hours ago
            </div>
          </div>
          <div className="media">
            <div className="media-icon bg-danger">
              <i className="typcn typcn-times-outline"></i>
            </div>
            <div className="media-body">
              <h6>Purchase Cancellation</h6><span>Product ID: #3645</span>
            </div>
            <div className="media-right">
              12 hours ago
            </div>
          </div>
        </div>
        <Link className="btn btn-outline-primary btn-block" to="/">View All Notifications</Link>
      </div>
    </div>
  </div>
</div>)


}

export default index