import { Link } from 'react-router-dom';
import './index.css'

const Navbar = () => {
  return (
    <div className="navbar">
  <a className="nav-link" href="#home">Home</a>
  <a className="nav-link" href="#about">About</a>
  <a className="nav-link" href="#portfolio">Portfolio</a>
  <a className="nav-link" href="#contact">Contact</a>
</div>
  );
};

export default Navbar;
