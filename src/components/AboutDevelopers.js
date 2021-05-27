import React, { Component } from 'react'
import imageValera from '../img/Valera.jpg' // relative path to image
import imageIlya from '../img/Ilya.jpg' // relative path to image
import imageEgor from '../img/Egor.jpg' // relative path to image
import { useTranslation } from 'react-i18next'
import "../../src/i18n"
import { Container } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AboutDevelopers() {

    const { t } = useTranslation();
    return (
        <Jumbotron style={{ textAlign: "center" }} id="aboutDevelopers">
            <Container>
                <hr></hr>
                <h1 class="jumbotron-heading">{t("developers.team")}</h1>
                <p class="lead text-muted">{t("developers.about")}</p>
                <Row>
                    <Col md={4} lg={4}>
                        <h4>{t("developers.valera")}</h4>
                        <img src={imageValera} id="imgWriterDay" class="rounded-circle" id="img-develop"></img>
                        <Link to="https://github.com/Valeriy-01"><h5>Github: https://github.com/Valeriy-01</h5></Link>
                    </Col>
                    <Col md={4} lg={4}>
                        <h4>{t("developers.ilya")}</h4>
                        <img src={imageIlya} id="imgWriterDay" class="rounded-circle" id="img-develop"></img>
                        <Link to="https://github.com/labovichl333"><h5>Github: https://github.com/labovichl333</h5></Link>
                    </Col>
                    <Col md={4} lg={4}>
                        <h4>{t("developers.egor")}</h4>
                        <img src={imageEgor} id="imgWriterDay" class="rounded-circle" id="img-develop"></img>
                        <Link to="https://github.com/voytforblr"><h5>Github: https://github.com/voytforblr</h5></Link>
                    </Col>
                </Row>
            </Container>
        </Jumbotron >
    );

}