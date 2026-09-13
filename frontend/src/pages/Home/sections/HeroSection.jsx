import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    // Pastikan jQuery dan Slick sudah siap
    if (window.$ && typeof window.$.fn.slick === "function") {
      const $slider = window.$(".main-slider");

      // Inisialisasi jika belum aktif
      if (!$slider.hasClass("slick-initialized")) {
        $slider.slick({
          autoplay: false,
          autoplaySpeed: 4000,
          fade: true,
          dots: true,
          prevArrow: window.$(".prev"),
          nextArrow: window.$(".next"),
        });
      }
    }

    // Cleanup saat berpindah halaman/unmount
    return () => {
      if (window.$ && window.$(".main-slider").hasClass("slick-initialized")) {
        window.$(".main-slider").slick("unslick");
      }
    };
  }, []);

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
              {/* slider-item */}
            </div>
            <button className="next slick-arrow">
              <i className="icon icon-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
