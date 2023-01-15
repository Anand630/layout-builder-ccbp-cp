import './index.css'

const Body = () => (
  <div className="body-container">
    <div className="left-navbar-container">
      <h3 className="menu-heading">Left Navbar Menu</h3>
      <ul className="left-navbar-menu-container">
        <li className="left-navbar-list-item">Item 1</li>
        <li className="left-navbar-list-item">Item 2</li>
        <li className="left-navbar-list-item">Item 3</li>
        <li className="left-navbar-list-item">Item 4</li>
      </ul>
    </div>
    <div className="center-content-container">
      <h3 className="menu-heading">Content</h3>
      <p className="content-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
    </div>
    <div className="right-navbar-container">
      <h3 className="menu-heading">Right Navbar</h3>
      <div className="all-ads-container">
        <div className="ad-container">
          <p className="ad-text">Ad 1</p>
        </div>
        <div className="ad-container">
          <p className="ad-text">Ad 1</p>
        </div>
      </div>
    </div>
  </div>
)

export default Body
