
function Header() {
    return (
        <header>
        {/* Header Start */}
        <div className="header-area header-transparrent ">
          <div className="main-header header-sticky">
            <div className="container">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="col-xl-2 col-lg-2 col-md-2">
                  <div className="logo">
                    <a href="index.html"><img src="./landing/assets/img/logo/logo.png" alt="" /></a>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10">
                  {/* Main-menu */}
                  <div className="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">    
                        <li><a href="index.html"> Home</a></li>
                        {/* <li className="active"><a href="index.html"> Home</a></li> */}
                        <li><a href="feature.html">Feature</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="#">Pages</a>
                          <ul className="submenu">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="single-blog.html">Blog Details</a></li>
                            <li><a href="elements.html">Element</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* Mobile Menu */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
      </header>
    );
}
  
export default Header;