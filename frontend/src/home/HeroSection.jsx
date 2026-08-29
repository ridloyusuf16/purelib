export default function HeroSection() {
  return (
    <section id="billboard">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button className="prev slick-arrow">
              <i className="icon icon-arrow-left" />
            </button>
            <div className="main-slider pattern-overlay">
              <div className="slider-item">
                <div className="banner-content">
                  <h2 className="banner-title">Life of the Wild</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eu feugiat amet, libero ipsum enim pharetra hac. Urna
                    commodo, lacus ut magna velit eleifend. Amet, quis urna, a
                    eu.
                  </p>
                  <div className="btn-wrap">
                    <a
                      href="#"
                      className="btn btn-outline-accent btn-accent-arrow"
                    >
                      Read More
                      <i className="icon icon-ns-arrow-right" />
                    </a>
                  </div>
                </div>
                {/*banner-content*/}
                <img
                  src="src/assets/images/main-banner1.jpg"
                  alt="banner"
                  className="banner-image"
                />
              </div>
              {/*slider-item*/}
              <div className="slider-item">
                <div className="banner-content">
                  <h2 className="banner-title">Birds gonna be Happy</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eu feugiat amet, libero ipsum enim pharetra hac. Urna
                    commodo, lacus ut magna velit eleifend. Amet, quis urna, a
                    eu.
                  </p>
                  <div className="btn-wrap">
                    <a
                      href="#"
                      className="btn btn-outline-accent btn-accent-arrow"
                    >
                      Read More
                      <i className="icon icon-ns-arrow-right" />
                    </a>
                  </div>
                </div>
                {/*banner-content*/}
                <img
                  src="src/assets/images/main-banner2.jpg"
                  alt="banner"
                  className="banner-image"
                />
              </div>
              {/*slider-item*/}
            </div>
            {/*slider*/}
            <button className="next slick-arrow">
              <i className="icon icon-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
