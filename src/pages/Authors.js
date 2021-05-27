import React from 'react';
import Header from '../components/Header.js'
import {useTranslation} from 'react-i18next'
//import img from "./img"
import JSONDATA from '../MOCK_DATA.json'


//i18n
import "../../src/i18n"

import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';

export default function Authors(props) {

    let id=props.match.params.id;

    let test=JSONDATA.map(function (name){
            return name.name;
    });

    let imageWriterArray=JSONDATA.map(function (name){
        return name.imageWriter;
    });

    let imageBook1Array=JSONDATA.map(function (name){
        return name.imageBook1;
    });

    let imageBook2Array=JSONDATA.map(function (name){
        return name.imageBook2;
    });

    let mapArray=JSONDATA.map(function (name){
        return name.mapsLink;
    });

    let videoArray=JSONDATA.map(function (name){
        return name.youtubeLink;
    });

    const name = test[id] + ".name";
    const lifetime = test[id] + ".life-time";
    const description = test[id] + ".description";
    const date1description = test[id] + ".date1-description";
    const date2description = test[id] + ".date2-description";
    const date3description = test[id] + ".date3-description";

    const imageWriter = imageWriterArray[id];
    const imageBook1 = imageBook1Array[id];
    const imageBook2 =imageBook2Array[id];

    const video=videoArray[id];
    const map=mapArray[id];

    const {t} = useTranslation();

    return (
        <div>

            <Header/>
            <div class="container">

                <h1 class="jumbotron-heading">{t(name)}</h1>
                <div class="row">
                    <div class="col-sm">
                        <img alt={t(name)} src={process.env.PUBLIC_URL+imageWriter} id="imgWriterDay" class="img-fluid"/>
                    </div>
                    <div class="col-sm">
                        <p class="lead text-muted" id="description">
                            <strong>{t("t.name")}</strong> {t(name)}
                            <br/>
                            <strong>{t("t.years-life")}</strong> {t(lifetime)}
                            <br/>
                            <strong>{t("t.brief-description")}</strong>{t(description)}
                        </p>
                    </div>
                </div>
            </div>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText={t(test[id] + ".date1")}
                    dateInnerStyle={{background: '#76bb7f', color: 'white'}}
                    style={{color: '#76bb7f'}}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{color: '#76bb7f'}}>{t("t.birthday")}</h3>
                    <p style={{textAlign: 'justify'}}>
                        {t(date1description)}
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="1835 – 1880 "
                    dateInnerStyle={{background: '#61b8ff', color: 'white'}}
                    style={{color: '#61b8ff'}}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{color: '#61b8ff'}}>{t("t.activity")}</h3>
                    <p style={{textAlign: 'justify'}}>
                        {t(date2description)}
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText={t("t.awards")}
                    dateInnerStyle={{background: '#e86971'}}
                    style={{color: '#e86971'}}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{color: '#e86971'}}>{t("t.awards")}</h3>
                    <p>
                        {t(date3description)}
                    </p>
                </TimelineItem>
            </Timeline>
            <div class="container">
                <h1 class="jumbotron-heading">{t("t.gallery")}</h1>
                <div class="row">
                    <div class="col-sm">
                        <img alt="Якуб Колас" src={process.env.PUBLIC_URL+imageBook1} id="imgWriterDay" class="img-fluid"/>
                    </div>
                    <div class="col-sm">
                        <img alt="Якуб Колас" src={process.env.PUBLIC_URL+imageBook2} id="imgWriterDay" class="img-fluid"/>
                    </div>
                </div>

                <br/>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe width="560" height="315" src={video}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
            </div>
            <div class="container">
                <div class="map-responsive">
                    <iframe
                        src={map}
                        width="600" height="450" allowFullScreen="" loading="lazy"/>
                </div>
                <br/>
            </div>
        </div>
    );
}
