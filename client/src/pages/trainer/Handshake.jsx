import React from 'react'

const Handshake = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="table table-container table-responsive mt-5">
                    <h2 className='text-start p-3 fw-bolder text-primary'>Handshake</h2>
                    <table className="table table-bordered table-striped text-center align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>S.NO</th>
                                <th>Skills</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr >
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>

                                    {/* <button
                                        className="btn btn-sm btn-primary"

                                    >
                                        Delete
                                    </button> */}
                                </td>
                            </tr>
            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Handshake