import React, { Component } from 'react'
import imageWriterDay from '../img/Mazgo.jpg' // relative path to image
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-bootstrap';
import "../../src/i18n"
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import JSONDATA from '../MOCK_DATA.json'

export default function WriterDay() {
    const { t } = useTranslation();
    let test=JSONDATA.map(function (name){
        return name.name;
    });
    let imageWriterArray=JSONDATA.map(function (name){
        return name.imageWriter;
    });
    let length=test.length;
    let random=Math.floor(Math.random()*length);


    return (
        <Container>

            <h1 class="jumbotron-heading">{t("writerByDay.name")}</h1>
            <p class="lead text-muted">{t("writerByDay.about")}</p>
            <Row>
                <Col md={12} lg={6}>
                    <img alt="Author" src={imageWriterArray[random]} id="imgWriterDay" class="img-fluid"/>
                </Col>
                <Col md={12} lg={6}>
                    <p class="lead text-muted" id="description">
                        <strong>{t("t.name")}</strong> {t(test[random]+".name")}
                        <br></br>
                        <strong>{t("t.years-life")}</strong> {t(test[random]+".life-time")}
                        <br></br>
                        <strong>{t("t.brief-description")}</strong> {t(test[random]+".description")}
                    </p>
                    <Link to={"/List/"+random}><Button variant="outline-secondary">{t("home.more")}</Button></Link>
                </Col>
            </Row>
        </Container>
    );

}