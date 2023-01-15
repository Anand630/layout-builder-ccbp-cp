import './index.css'

const ConfigurationController = props => {
  const {a} = props
  return (
    <div className="config-controller-bg">
      <h1 className="layout-heading">Layout</h1>
      <div className="all-checkbox-and-label-container">
        <div className="checkbox-label-container">
          <input className="checkbox" type="checkbox" id="content" />
          <label htmlFor="content" className="label-text">
            Content
          </label>
        </div>
        <div className="checkbox-label-container">
          <input className="checkbox" type="checkbox" id="leftNavbar" />
          <label htmlFor="leftNavbar" className="label-text">
            Left Navbar
          </label>
        </div>
        <div className="checkbox-label-container">
          <input className="checkbox" type="checkbox" id="rightNavbar" />
          <label htmlFor="rightNavbar" className="label-text">
            Right Navbar
          </label>
        </div>
      </div>
    </div>
  )
}

export default ConfigurationController
