import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./images/logo2.png";
import image2 from "./images/logo1.png";
import image3 from "./images/Group1.png";

function App() {
  return (
    <>
      <div>
        <img className="logoImage" src={image2} alt="logo2" />
        {/* <img src={image3} alt="logo" className="imageLogo1" /> */}
        <div className="App d-flex backgroundColor">
          <div className="formContainer">
            <div className="container d-flex justify-content-center align-items-center flex-column">
              <img src={image1} alt="logo" />
              <h4 className="w-75 text-center mt-3 headingText mb-3">
                It’s a delight to have you onboard
              </h4>
              <p className="m-0 subheadingText">Help us know you better.</p>
              <p className="subheadingText ">
                {" "}
                (This is how we optimize Wobot as per your business needs)
              </p>
            </div>
            <div className="container formBox mt-3">
              <form>
                <label htmlFor="CompanyName">Company Name</label>
                <input type="text" placeholder="Ex. Company Name" />
                <label htmlFor="Industry" className="mt-2">
                  Industry
                </label>
                <select name="industry" id="industry">
                  <option value="select" disabled>
                    Select
                  </option>
                  <option value="select">Product</option>
                  <option value="select">Hacking</option>
                  <option value="select">Service</option>
                </select>
                <label htmlFor="CompanySize" className="mt-2">
                  Company Size
                </label>
                <div className="navBoxContainer mt-3 p-0">
                  <div className="navBox ">
                    <p className="m-0 p-0">1-20</p>
                  </div>
                  <div className="navBox1">
                    <p className="m-0 p-0">21-50</p>
                  </div>
                  <div className="navBox">
                    <p className="m-0 p-0">51-200</p>
                  </div>
                  <div className="navBox">
                    <p className="m-0 p-0">201-500</p>
                  </div>
                  <div className="navBox">
                    <p className="m-0 p-0">500+</p>
                  </div>
                </div>
                <button className="getStartedButton">Get Started</button>
              </form>
            </div>
          </div>
        </div>
        <footer>Terms of use | Privacy policy </footer>
      </div>
    </>
  );
}

export default App;
