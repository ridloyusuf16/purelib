export default function TopContent(){
    return(
        <div className="top-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="social-links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-youtube-play" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-behance-square" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-element">
                <a href="#" className="user-account for-buy">
                  <i className="icon icon-user" />
                  <span>Account</span>
                </a>
                <a href="#" className="cart for-buy">
                  <i className="icon icon-clipboard" />
                  <span>Cart:(0 $)</span>
                </a>
                <div className="action-menu">
                  <div className="search-bar">
                    <a
                      href="#"
                      className="search-button search-toggle"
                      data-selector="#header-wrap"
                    >
                      <i className="icon icon-search" />
                    </a>
                    <form role="search" method="get" className="search-box">
                      <input
                        className="search-field text search-input"
                        placeholder="Search"
                        type="search"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}