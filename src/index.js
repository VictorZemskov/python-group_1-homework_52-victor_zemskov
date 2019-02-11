import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Navbar, Title, Sidbar, InfoContent, Futer} from "./TextComponent";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


const title_name = document.getElementById("title_name");
	ReactDOM.render(<p>
			<Title title_header="Booking Fly"/>
		</p>, title_name);

const menu_nav = document.getElementById("menu_nav");
    ReactDOM.render(<ul>
            <Navbar menu_name="Обратная связь"/>
            <Navbar menu_name="Новости компании"/>
            <Navbar menu_name="Контакты"/>
            <Navbar menu_name="Личный кабинет"/>
        </ul>, menu_nav);

const sidebar = document.getElementById("sidebar");
	ReactDOM.render(<p>
            <h3>Авиакомпании</h3>
			<Sidbar side_name="American Airlines"/>
            <Sidbar side_name="Delta Air Lines"/>
            <Sidbar side_name="United Airlines"/>
            <Sidbar side_name="Southwest Airlines"/>
            <Sidbar side_name="Ryanair"/>
            <Sidbar side_name="China Eastern Airlines"/>
            <Sidbar side_name="Lufthansa"/>
            <Sidbar side_name="LATAM Airlines"/>
            <Sidbar side_name="China Southern Airlines"/>
            <Sidbar side_name="easyJet"/>
		</p>, sidebar);

const content_id = document.getElementById("content_id");
    ReactDOM.render(<div className="list">
            <h3>Расписание рейсов</h3>
            <InfoContent from="Moscow" to="New York" number="#SQ1" price="$1567" date="01.02.2019" to_buy="Купить билет"/>
            <InfoContent from="Moscow" to="Amsterdam" number="#SQ2" price="$1867" date="02.02.2019" to_buy="Купить билет"/>
            <InfoContent from="Moscow" to="London" number="#SQ3" price="$1347" date="03.02.2019" to_buy="Купить билет"/>
            <InfoContent from="Moscow" to="Rio de Janeiro" number="#SQ4" price="$2567" date="04.02.2019" to_buy="Купить билет"/>
            <InfoContent from="Moscow" to="Singapore" number="#SQ5" price="$1500" date="05.02.2019" to_buy="Купить билет"/>
            <InfoContent from="Moscow" to="Sydney" number="#SQ6" price="$1598" date="06.02.2019" to_buy="Купить билет"/>
            <InfoContent from="Moscow" to="Antwerpen" number="#SQ7" price="$1167" date="07.02.2019" to_buy="Купить билет"/>
            <InfoContent from="Moscow" to="Tokyo" number="#SQ8" price="$1367" date="08.02.2019" to_buy="Купить билет"/>
            <InfoContent from="Moscow" to="Toronto" number="#SQ9" price="$1561" date="09.02.2019" to_buy="Купить билет"/>
            <InfoContent from="Moscow" to="Havana" number="#SQ10" price="$1247" date="10.02.2019" to_buy="Купить билет"/>

        </div>, content_id);


const futer_id = document.getElementById("futer_id");
    ReactDOM.render(<p>
    		<Futer name_futer="© Copyright 2014 Booking Fly.com"/>
    	</p>, futer_id);