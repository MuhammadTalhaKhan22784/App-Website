import React from 'react'
import { Link } from 'react-router-dom'

function AddPatientsModal() {
    return (
        <>
            
            <div className="modal fade" id="editPatient" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Patient</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="needs-validation" noValidate>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label>Name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="" defaultValue required />
                                            <div className="invalid-feedback">
                                                Imię jest wymagane
                      </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="lastName">Last name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="" defaultValue required />
                                            <div className="invalid-feedback">
                                                Nazwisko jest wymagane
                      </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email">E-mail</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">@</span>
                                            </div>
                                            <input type="text" className="form-control" id="email" placeholder="adres@email.com" required />
                                            <div className="invalid-feedback" style={{ width: '100%' }}>
                                                Adres e-mail jest wymagany
                      </div>
                                        </div>
                                    </div>
                                    <hr className="mb-4" />
                                    <h5 className="mb-3">Address</h5>
                                    <div className="mb-3">
                                        <label htmlFor="street">Street</label>
                                        <input type="text" className="form-control" id="street" required />
                                        <div className="invalid-feedback">
                                            Wpisz prawidłowy adres
                    </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="state">State</label>
                                            <select className="custom-select d-block w-100" id="state" required>
                                                <option value>Wybierz województwo</option>
                                                <option>Mazowieckie</option>
                                                <option>Kujawsko-pomorskie</option>
                                                <option>Górnośląskie</option>
                                                <option>Małopolska</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Wybierz województwo
                      </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="postalcode">Post code</label>
                                            <input type="text" className="form-control" id="postalcode" placeholder="" required />
                                            <div className="invalid-feedback">
                                                Kod pocztowy jest wymagany
                      </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="city">City</label>
                                        <input type="text" className="form-control" id="city" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Wybierz miasto
                    </div>
                                    </div>
                                    <hr className="mb-4" />
                                    <h5 className="mb-3">Grupa krwi</h5>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="bloodtype">Grupa krwi</label>
                                            <select className="custom-select d-block w-100" id="bloodtype" required>
                                                <option value>Wybierz grupę krwi</option>
                                                <option>ABRh-</option>
                                                <option>ARh-</option>
                                                <option>BRh-</option>
                                                <option>ABRh+</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Wybierz grupę krwi
                      </div>
                                        </div>
                                        <div className="col-md-5 mb-3">
                                            <label htmlFor="amount">Ilość</label>
                                            <select className="custom-select d-block w-100" id="amount" required>
                                                <option value>Wybierz ilość</option>
                                                <option>300 ml</option>
                                                <option>600 ml</option>
                                                <option>1200 ml</option>
                                                <option>1500 ml</option>
                                                <option>1800 ml</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Wybierz ilość
                      </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <div className="row">
                                    <div className="col-6"> <Link to="/patients" className="btn btn-warning btn-block">
                                        <i className="fas fa-times" /></Link></div>
                                    <div className="col-6"> <Link id="submitPatient" to="/patients" className="btn btn-success">
                                        <i className="fas fa-check" /></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default AddPatientsModal
