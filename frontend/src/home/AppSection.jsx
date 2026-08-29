export default function AppSection() {
  return (
    <section id="download-app" className="leaf-pattern-overlay">
      <div className="corner-pattern-overlay" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-5">
                <figure>
                  <img
                    src="src/assets/images/device.png"
                    alt="phone"
                    className="single-image"
                  />
                </figure>
              </div>
              <div className="col-md-7">
                <div className="app-info">
                  <h2 className="section-title divider">
                    Download our app now !
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sagittis sed ptibus liberolectus nonet psryroin. Amet sed
                    lorem posuere sit iaculis amet, ac urna. Adipiscing fames
                    semper erat ac in suspendisse iaculis.
                  </p>
                  <div className="google-app">
                    <img
                      src="src/assets/images/google-play.jpg"
                      alt="google play"
                    />
                    <img
                      src="src/assets/images/app-store.jpg"
                      alt="app store"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
