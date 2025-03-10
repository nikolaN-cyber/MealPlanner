import './Home.css'

const Home = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-8">
          <h1 className='textFont'>Welcome</h1>
          <h3 className='textFont'>Register and make your own meal plans, look at some of the best recipes, and make your favourite meals!</h3>
        </div>
        <div className="col-md-4">
          <h1 className='textFont'>About us</h1>
          <h3 className='textFont'>This is a side section with some additional information.</h3>
        </div>
      </div>
      <hr/>
      <div className="row mt-4">
        <div className="col-md-5 d-flex ms-0 me-auto">
          <h3>Learn recipes for some of this food</h3>
        </div>
      </div>
      <hr/>
      <div className="row mt-4">
        <div className="col-md-12 d-flex justify-content-center mx-auto">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/images/vegetables.jpg" className="d-block w-100" alt="Food 1" />
              </div>
              <div className="carousel-item">
                <img src="/images/burgers.jpg" className="d-block w-100" alt="Food 2" />
              </div>
              <div className="carousel-item">
                <img src="/images/fruits.jpg" className="d-block w-100" alt="Food 3" />
              </div>
              <div className="carousel-item">
                <img src="/images/pasta.jpg" className="d-block w-100" alt="Food 4" />
              </div>
              <div className="carousel-item">
                <img src="/images/pancakes.jpg" className="d-block w-100" alt="Food 5" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Home