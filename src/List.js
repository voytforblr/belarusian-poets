import React from 'react';
import Header from 'components/Header'
import {Link, Route} from 'react-router-dom'
import JSONDATA from 'MOCK_DATA.json'
import { useState } from 'react'

// Купала
import imageWriterKupale from '../src/img/Kupale.jpg'
import imageBook_Kupale_1 from '../src/img/Kupale_1.jpg'
import imageBook_Kupale_2 from '../src/img/Kupale_2.jpg'

// Колас
import imageWriterKolas from '../src/img/Kolas.jpg'
import imageBook_Kolas_1 from '../src/img/Kolas_1.jpg'
import imageBook_Kolas_2 from '../src/img/Kolas_2.jpg'

// Рыгор
import imageWriterRyhor from '../src/img/Ryhor.jpg'
import imageBook_Ryhor_1 from '../src/img/Rygor_1.jpeg'
import imageBook_Ryhor_2 from '../src/img/Rygor_2.jpeg'

//Кулешов
import imageWriterKuleshov from '../src/img/Kuleshov.jpg'
import imageBook_Kuleshov_1 from '../src/img/Kuleshov_1.jpg'
import imageBook_Kuleshov_2 from '../src/img/Kuleshov_2.jpg'

// Дунин
import imageWriterDunin from '../src/img/Dunin.jpeg'
import imageBook_Dunin_1 from '../src/img/Dunin_1.jpg'
import imageBook_Dunin_2 from '../src/img/Dunin_2.jpg'

// Зуёнок
import imageWriterZuenok from '../src/img/Zuenok.jpg'
import imageBook_Zuenok_1 from '../src/img/Zuenok_1.jpg'
import imageBook_Zuenok_2 from '../src/img/Zuenok_2.jpg'

//Яговдик
import imageWriterYagoudik from '../src/img/Yagoudik.jpg'
import imageBook_Yagoudik_1 from '../src/img/Yagoudik_1.jpg'
import imageBook_Yagoudik_2 from '../src/img/Yagoudik_2.jpg'

//Сваяк
import imageWriterSvayak from '../src/img/Svayak.jpg'
import imageBook_Svayak_1 from '../src/img/Svayak_1.jpg'
import imageBook_Svayak_2 from '../src/img/Svayak_2.jpg'

//Мазго
import imageWriterMazgo from '../src/img/Mazgo.jpg'
import imageBook_Mazgo_1 from '../src/img/Mazgo_1.jpg'
import imageBook_Mazgo_2 from '../src/img/Mazgo_2.jpg'

import Authors from "./pages/Authors";

export default function List() {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div>
            <Header />
            <div class="container">
                <div class="input-group rounded" id="search">
                    <input type="search" class="form-control rounded" placeholder="Поиск" aria-label="Search"
                        aria-describedby="search-addon"
                        onChange={event => { setSearchTerm(event.target.value) }} />
                    <span class="input-group-text border-0" id="search-addon">
                        <button type="submit" id="btn-search">
                            <i class="fas fa-search"></i>
                        </button>
                    </span>
                </div>
                <ul class="list-group">
                    {JSONDATA.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((val, key) => {
                        return /*<li class="list-group-item" key={}><a><Link to={val.link}>{} {} {}</Link></a></li>*/
                    })}
                </ul>
            </div>
        </div>
    );
}