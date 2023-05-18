import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
    const formInitialDetails = {
        firtsName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("送信中...");
        window.setTimeout(function () {
            setButtonText("送信");
            setStatus({ succes: true, message: 'このお問い合わせフォームはサンプルです。連絡はSNSかメールからお願いします。' });
        }, 5000)
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('送信');
    const [status, setStatus] = useState({});

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img className="" src={contactImg} alt="Contact Us" />

                    </Col>
                    <Col size={12} md={6}>
                        <h2>お問合せ</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="苗字" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.lasttName} placeholder="名前" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="メールアドレス" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="電話番号" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea rows="6" value={formDetails.message} placeholder="お問合せ内容" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                            </Row>

                        </form>
                    </Col>
                </Row>
            </Container>
            {
                                    status.message &&
                                    
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                }
        </section>
    )
}