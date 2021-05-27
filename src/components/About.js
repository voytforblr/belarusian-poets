import React, { Component } from 'react'
import { useTranslation } from 'react-i18next'
import "../../src/i18n"
import { Container } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'


export default function About() {

    const { t } = useTranslation();

    return (
        <Jumbotron style={{textAlign: "center"}}>
            <Container>
                <h1 class="jumbotron-heading">{t("header.poets")}</h1>
                <p class="lead text-muted">{t("header.about")}</p>
            </Container>
        </Jumbotron>
    );
}