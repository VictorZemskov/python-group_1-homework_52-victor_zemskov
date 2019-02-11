import React from 'react';



function Title(props) {
	return (
		<h1 className="cinema">{props.title_header}</h1>
	);
}


function Navbar(props) {
    return (
        <ul className="navbar">
            <li><a href="#">{props.menu_name}</a></li>
        </ul>
    );
}

function Sidbar(props) {
	return (
		<p className="sidbar"><a href="#">{props.side_name}</a></p>
	);
}


function InfoContent(props) {
    return (
        <div className="content_info">
            <h5>{props.from}</h5>
			<h5>{props.to}</h5>
			<h5>{props.number}</h5>
			<h5>{props.price}</h5>
			<h5>{props.date}</h5>
			<h5><a href="#">{props.to_buy}</a></h5>
        </div>
    );
}


function Futer(props) {
    	return (
    		<div className="container">
    			<p>{props.name_futer} </p>
    		</div>
    	);
    }


export { Title }
export { Navbar }
export { Sidbar }
export { InfoContent }
export { Futer }

