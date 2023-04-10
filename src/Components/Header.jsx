import { useNavigate } from "react-router-dom";
import './Header.css'
const Header = () => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/calculator');
  }
  const clickHandlerPortfolio = (e) => {
    e.preventDefault();
    navigate('/');
  }
  const clickHandlerCartoon = (e) => {
    e.preventDefault();
    navigate('/Api');
  }

  return(
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          
          <div className="navbar">
            <form className="d-flex">
              <button className="btn btn-danger" onClick={clickHandler}>Calculator</button>
              <button className="btn btn-danger" onClick={clickHandlerPortfolio}>Portfolio</button>
              <button className="btn btn-danger" onClick={clickHandlerCartoon}>Cartoon</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;