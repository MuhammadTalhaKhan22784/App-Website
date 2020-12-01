import React from 'react'
import AddPatientsModal from './AddPatientsModal'

function PatientsTable() {
    return (
        <>
            <div className="container py-1 ">
                <div className="table-responsive" data-show-pagination-switch="true">
                    <table className="table table-striped table-bordered table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Last name</th>
                                <th>Blood type</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                                <td>ipsum</td>
                                <td className="bg-danger">ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary" data-toggle="modal" type="submit" data-target="#editPatient"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1,002</td>
                                <td>amet</td>
                                <td>consectetur</td>
                                <td>ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1,003</td>
                                <td>Integer</td>
                                <td>nec</td>
                                <td className="bg-warning">ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1,003</td>
                                <td>libero</td>
                                <td>Sed</td>
                                <td>ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1,004</td>
                                <td>dapibus</td>
                                <td>diam</td>
                                <td className="bg-warning">ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1,005</td>
                                <td>Nulla</td>
                                <td>quis</td>
                                <td>ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1,006</td>
                                <td>nibh</td>
                                <td>elementum</td>
                                <td>ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1,007</td>
                                <td>sagittis</td>
                                <td>ipsum</td>
                                <td>ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1,008</td>
                                <td>Fusce</td>
                                <td>nec</td>
                                <td>ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1,009</td>
                                <td>augue</td>
                                <td>semper</td>
                                <td>ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1,010</td>
                                <td>massa</td>
                                <td>Vestibulum</td>
                                <td>ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1,011</td>
                                <td>eget</td>
                                <td>nulla</td>
                                <td>ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1,012</td>
                                <td>taciti</td>
                                <td>sociosqu</td>
                                <td>ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1,013</td>
                                <td>torquent</td>
                                <td>per</td>
                                <td> ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1,014</td>
                                <td>per</td>
                                <td>inceptos</td>
                                <td className="bg-danger">ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1,015</td>
                                <td>sodales</td>
                                <td>ligula</td>
                                <td className="bg-danger">ABRh-</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-danger"><i className="fas fa-user-minus" /></button>
                                    <button className="btn btn-sm btn-primary"><i className="fas fa-user-edit" /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-danger btn-block" data-toggle="modal" data-target="#editPatient">
                        Add patient
          </button>
                </div>
                <AddPatientsModal />
            </div>


        </>
    )
}

export default PatientsTable
