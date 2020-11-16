import React from 'react'
import { Link } from 'react-router-dom'

function Index({ users }) {

    return (
        <div className="table-wrapper border contact-table">
            <div className="table-responsive">
                <table className="table mg-b-0 text-md-nowrap text-nowrap">
                    <thead>
                        <tr className="search-tr" >
                            <th className="wd-5p">Image</th>
                            <th>Nombre</th>
                            <th>Correo electronico</th>
                            <th>Paquete activo</th>
                            <th>Inversion</th>
                            <th>Telefono</th>
                        </tr>
                    </thead>
                    <tbody id="contact-table">
                        {
                            users.map((item, key) => {
                                return (<tr id="tr-1" className="search-tr" key={item._id}>
                                    <td className="wd-5p"><img alt="" src="../assets/img/faces/6.jpg" className="avatar avatar-md" /></td>
                                    <td><b>{item.firstName}</b></td>
                                    <td>{item.email}</td>
                                    <td>
                                        <span className="badge badge-pill badge-primary">
                                            {item.active_package}
                                        </span>
                                    </td>
                                    <td>{item.investment} USD</td>
                                    <td className="contact-num"><i className="las la-phone mr-2"></i>{item.phone}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
                <div className="text-center contact-table-msg  col-12">
                    <span id="errmsg" className="mx-auto pt-3 pb-4"></span>
                </div>
                <div className=" float-right mt-4">
                    <ul className="pagination pagination-radius contact-one justify-content-center pagination-sm">
                        <li className="page-item" id="previous-page">
                            <Link className="page-link" to="/">Prev</Link>
                        </li>
                        <li className="page-item current-page active">
                            <Link className="page-link" to="/">1</Link>
                        </li>
                        <li className="page-item current-page">
                            <Link className="page-link" to="/">2</Link>
                        </li>
                        <li className="page-item current-page">
                            <Link className="page-link" to="/">3</Link>
                        </li>
                        <li className="page-item" id="next-page">
                            <Link className="page-link" to="/">Next</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>)


}



export default Index