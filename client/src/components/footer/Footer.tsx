import './Footer.css'

const Footer = () => {
    return (
        <footer className="text-white py-4 custom-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>About Us</h5>
                        <p>Some information about your company or website.</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Home</a></li>
                            <li><a href="#" className="text-white">About</a></li>
                            <li><a href="#" className="text-white">Services</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Contact</h5>
                        <p>Email: contact@yourdomain.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Social</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Facebook</a></li>
                            <li><a href="#" className="text-white">Twitter</a></li>
                            <li><a href="#" className="text-white">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer