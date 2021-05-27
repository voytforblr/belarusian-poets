import React from 'react';
import Header from '../components/Header.js'
// import imageBook1 from '../img/Kupale_1.jpg' // relative path to image 
// import imageBook2 from '../img/Kupale_2.jpg' // relative path to image 
import { useTranslation } from 'react-i18next'
import "../../src/i18n"
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

export default function WritePage(props) {
    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <Container>
                <h1 class="jumbotron-heading">{props.name}</h1>
                <Row>
                    <Col md={12} lg={6}><img alt={props.name} src={props.urlMainImage} id="imgWriterDay" class="img-fluid"></img></Col>
                    <Col md={12} lg={6}>
                        <p class="lead text-muted" id="description">
                            <strong>{t("t.name")}</strong>{props.name}
                            <br></br>
                            <strong>{t("t.years-life")}</strong>{props.lifeTime}
                            <br></br>
                            <strong>{t("t.brief-description")}</strong>{props.description}
                        </p>
                    </Col>
                </Row>
            </Container>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001" dateText={props.date1} dateInnerStyle={{ background: '#76bb7f', color: 'white' }} style={{ color: '#76bb7f' }}
                    bodyContainerStyle={{ background: '#ddd', padding: '20px', borderRadius: '8px', boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)', }}
                >
                    <h3 style={{ color: '#76bb7f' }}>{props.birthday}</h3>
                    <p style={{ textAlign: 'justify' }}>{props.descriptionDate1}</p>
                </TimelineItem>
                <TimelineItem
                    key="002" dateText={props.date2} dateInnerStyle={{ background: '#61b8ff', color: 'white' }} style={{ color: '#61b8ff' }}
                    bodyContainerStyle={{ background: '#ddd', padding: '20px', borderRadius: '8px', boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)', }}
                >
                    <h3 style={{ color: '#61b8ff' }}>{props.activity}</h3>
                    <p style={{ textAlign: 'justify' }}>{props.descriptionDate2}</p>
                </TimelineItem>
                <TimelineItem
                    key="004" dateText={props.date3} dateInnerStyle={{ background: '#e86971' }} style={{ color: '#e86971' }}
                    bodyContainerStyle={{ background: '#ddd', padding: '20px', borderRadius: '8px', boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)', }}
                >
                    <h3 style={{ color: '#e86971' }}>{props.death}</h3>
                    <p>{props.descriptionDate3}</p>
                </TimelineItem>
            </Timeline>
            <Container>
                <h1 class="jumbotron-heading">{t("t.gallery")}</h1>
                <Row>
                    <Col md={12} lg={6}><img alt={props.name} src={props.urlImageBook1} id="imgWriterDay" class="img-fluid"></img></Col>
                    <Col md={12} lg={6}><img alt={props.name} src={props.urlImageBook2} id="imgWriterDay" class="img-fluid"></img></Col>
                </Row>
                <br></br>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe width="1280" height="720" src={props.urlYouTube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Container>
            <Container>
                <div class="map-responsive"><iframe src={props.urlMap} width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe></div>
                <br></br>
            </Container>
        </div>
    );
}