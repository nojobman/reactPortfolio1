import { Container, Row, Col } from "react-bootstrap"
import logo from '../assets/img/logonikawa2.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Log" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} /></a>
                            <a href=""><img src={navIcon2} /></a>
                            <a href=""><img src={navIcon3} /></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                        <p><a href="https://www.vecteezy.com/free-vector/dolphin">Dolphin Vectors by Vecteezy</a></p>
                        <p><a href="https://www.freepik.com/free-vector/tropical-landscape-with-sea-bay-night_12900265.htm#query=night%20sea&position=10&from_view=keyword&track=robertav1_2_sidr">Image by upklyak</a> on Freepik</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}