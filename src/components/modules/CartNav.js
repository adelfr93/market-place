import './Cart.css'

const CartNav = () => {

    function stepClick(e) {
        this.parentNode.querySelector('input[type=number]').stepDown();
    }

    return (
        <div className="card card-basket position-absolute d-none">
            <h5 className="mb-3"><a href="#!" className="text-body"><i className="fa fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">You have 4 items in your cart</p>
                </div>
                <div>
                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fa fa-angle-down mt-1"></i></a></p>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" className="img-fluid rounded-3" alt="Shopping item" />
                            </div>
                            <div className="ms-3">
                                <h5>Iphone 11 pro</h5>
                                <p className="small mb-0">256GB, Navy Blue</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <div >
                                <h5 className="fw-normal mb-0">2</h5>
                            </div>
                            <div >
                                <h5 className="mb-0">$900</h5>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}><i className="fa fa-trash-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp" className="img-fluid rounded-3" alt="Shopping item" />
                            </div>
                            <div className="ms-3">
                                <h5>Samsung galaxy Note 10 </h5>
                                <p className="small mb-0">256GB, Navy Blue</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <div >
                                <h5 className="fw-normal mb-0">2</h5>
                            </div>
                            <div >
                                <h5 className="mb-0">$900</h5>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}><i className="fa fa-trash-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CartNav;