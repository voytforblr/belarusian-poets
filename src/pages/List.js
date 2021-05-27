import React from 'react';
import Header from '../components/Header.js'
import {Link} from 'react-router-dom'
import JSONDATA from '../MOCK_DATA.json'
import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import "../../src/i18n"
import {Container} from 'react-bootstrap'
import {ListGroup} from 'react-bootstrap'
import Authors from "./Authors";


export default function List() {

    const [searchTerm, setSearchTerm] = useState('')
    const {t} = useTranslation();
    return (
        <div>
            <Header/>
            <Container>
                <div class="input-group rounded" id="search">
                    <input type="search" class="form-control rounded" placeholder={t("find.f")} aria-label="Search"
                           aria-describedby="search-addon"
                           onChange={event => {
                               setSearchTerm(event.target.value)
                           }}/>
                </div>
                <ListGroup>
                    {JSONDATA.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((val, key) => {
                        return <ListGroup.Item key={key}><Link
                            to={"/List/" + val.id}>{val.first_name} {val.last_name}</Link></ListGroup.Item>
                    })}
                </ListGroup>
            </Container>
        </div>
    );
}