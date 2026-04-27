import React from 'react'

const Course = () => {
    return (
    <>
            <h3 className='text-center text-danger mt-2 fw-bold ' >Courses</h3>
            <div className="container-fluid mt-4">

                {/* Row 1 → 2 Cards */}
                <div className="row mb-4">
                    <div className="col-md-6">
                        <div className="card shadow p-4">
                            <h5>Card 1</h5>
                            <p>Content here</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card shadow p-4">
                            <h5>Card 2</h5>
                            <p>Content here</p>
                        </div>
                    </div>
                </div>

                {/* Row 2 → 3 Cards */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow p-4">
                            <h5>Card 3</h5>
                            <p>Content here</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow p-4">
                            <h5>Card 4</h5>
                            <p>Content here</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow p-4">
                            <h5>Card 5</h5>
                            <p>Content here</p>
                        </div>
                    </div>
                </div>

                {/* 3rd roqw */}
                <div className="row mb-4 mt-3">
                    <div className="col-md-6">
                        <div className="card shadow p-4">
                            <h5>Card 1</h5>
                            <p>Content here</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card shadow p-4">
                            <h5>Card 2</h5>
                            <p>Content here</p>
                        </div>
                    </div>
                </div>

                {/* 4th row */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow p-4">
                            <h5>Card 3</h5>
                            <p>Content here</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow p-4">
                            <h5>Card 4</h5>
                            <p>Content here</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow p-4">
                            <h5>Card 5</h5>
                            <p>Content here</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
)
}

export default Course