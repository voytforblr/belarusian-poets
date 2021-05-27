import React, { Component } from 'react'
import imageWriterDay from '../img/Mazgo.jpg' // relative path to image
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-bootstrap';
import "../../src/i18n"
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

export default function WriterDay() {
    const { t } = useTranslation();
    return (
        <Container>
            <h1 class="jumbotron-heading">{t("writerByDay.name")}</h1>
            <p class="lead text-muted">{t("writerByDay.about")}</p>
            <Row>
                <Col md={12} lg={6}>
                    <img alt="Владимир Мазго" src={imageWriterDay} id="imgWriterDay" class="img-fluid"></img>
                </Col>
                <Col md={12} lg={6}>
                    <p class="lead text-muted" id="description">
                        <strong>{t("t.name")}</strong> {t("Mazgo.name")}
                        <br></br>
                        <strong>{t("t.years-life")}</strong> {t("Mazgo.life-time")}
                        <br></br>
                        <strong>{t("t.brief-description")}</strong> {t("Mazgo.description")}
                    </p>
                    <Link to="/List/6"><Button variant="outline-secondary">{t("home.more")}</Button></Link>
                </Col>
            </Row>
        </Container>
    );

}