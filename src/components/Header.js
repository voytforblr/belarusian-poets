import React from 'react'
import i18n from '../../src/i18n';
import { useTranslation } from 'react-i18next'
import { Form } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


export default function Header() {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const { t } = useTranslation();

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><h3>{t("header.poets")}</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">{t("home.main")}</Nav.Link>
                    <Nav.Link href="/List">{t("home.list")}</Nav.Link>
                </Nav>
                <Form inline>
                    <Form>
                        <Form.Group>
                            <Form.Control as="select" id="selectLng" custom onChange={() => changeLanguage(document.getElementById("selectLng").value)}>
                                <option value="ru">{t("home.lng-ru")}</option>
                                <option value="en">{t("home.lng-en")}</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );

}