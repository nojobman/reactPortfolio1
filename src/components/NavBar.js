import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logonikawa2.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { Link as Scroll } from 'react-scroll';
import TrackVisibility from 'react-on-screen';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    // マウントを解除、イベント削除
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Scroll to="home" smooth={true} className={activeLink === 'home' ? 'active navbar-link nav-link' : 'navbar-link nav-link'} onClick={() => onUpdateActiveLink('home')}>TOP</Scroll>
            <Scroll to="skills" smooth={true} className={activeLink === 'skill' ? 'active navbar-link nav-link' : 'navbar-link nav-link'} onClick={() => onUpdateActiveLink('skill')}>SKILL</Scroll>
            <Scroll to="project" smooth={true} className={activeLink === 'project' ? 'active navbar-link nav-link' : 'navbar-link nav-link'} onClick={() => onUpdateActiveLink('project')}>PROJECT</Scroll>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <button className="vvd"><span><Scroll to="contact" smooth={true} onClick={() => onUpdateActiveLink('')}>お問合せ</Scroll></span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar