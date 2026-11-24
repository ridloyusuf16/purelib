export default function Footer() {
  return (
    <>
    <footer className="bg-brand-dark text-brand-light">
        <div className="flex px-20 py-15 gap-2">
          <div className="basis-4/12">
            <div className="footer-item">
              <div className="company-brand flex flex-col gap-5">
                {/* <img
                  src="src/assets/images/text-logo.png"
                  alt="logo"
                  className="footer-logo  max-w-fit"
                /> */}
                <h1 className="text-6xl font-medium">PureLib.</h1>
                <p>
                  Setiap perpustakaan memiliki ceritanya masing-masing.
                </p>
              </div>
              <p className="text-xs text-slate-600 mt-10">Copyright &copy; 2026 M. Yusuf Ridlo. All rights reserved.</p>
            </div>
          </div>
          <div className="basis-2/12">
            <div className="footer-menu">
              <h5 className="text-brand-primary text-lg font-medium">About Us</h5>
              <ul className="menu-list flex flex-col gap-2 pt-3">
                <li className="menu-item">
                  <a href="#">vision</a>
                </li>
                <li className="menu-item">
                  <a href="#">articles </a>
                </li>
                <li className="menu-item">
                  <a href="#">careers</a>
                </li>
                <li className="menu-item">
                  <a href="#">service terms</a>
                </li>
                <li className="menu-item">
                  <a href="#">donate</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-2/12">
            <div className="footer-menu">
              <h5 className="text-brand-primary text-lg font-medium">Discover</h5>
              <ul className="menu-list flex flex-col gap-2 pt-3">
                <li className="menu-item">
                  <a href="#">Home</a>
                </li>
                <li className="menu-item">
                  <a href="#">Books</a>
                </li>
                <li className="menu-item">
                  <a href="#">Authors</a>
                </li>
                <li className="menu-item">
                  <a href="#">Subjects</a>
                </li>
                <li className="menu-item">
                  <a href="#">Advanced Search</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-2/12">
            <div className="footer-menu">
              <h5 className="text-brand-primary text-lg font-medium">My Account</h5>
              <ul className="menu-list flex flex-col gap-2 pt-3">
                <li className="menu-item">
                  <a href="#">Sign In</a>
                </li>
                <li className="menu-item">
                  <a href="#">View Cart</a>
                </li>
                <li className="menu-item">
                  <a href="#">My Wishtlist</a>
                </li>
                <li className="menu-item">
                  <a href="#">Track My Order</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-2/12">
            <div className="footer-menu">
              <h5 className="text-brand-primary text-lg font-medium">Help</h5>
              <ul className="menu-list flex flex-col gap-2 pt-3">
                <li className="menu-item">
                  <a href="#">Help center</a>
                </li>
                <li className="menu-item">
                  <a href="#">Report a problem</a>
                </li>
                <li className="menu-item">
                  <a href="#">Suggesting edits</a>
                </li>
                <li className="menu-item">
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="flex align-middle justify-start bg-brand-dark px-20 py-5">
          <p className="text-sm text-slate-600">Copyright &copy;2026. Muhammad Yusuf Ridlo. All Right Reserved.</p>
        </div> */}
    </footer>
    </>
  )
}
