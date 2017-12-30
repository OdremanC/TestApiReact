// Dependencies
import React, { Component } from 'react';
//LINK sirve para crear enlaces
import { Link } from 'react-router-dom';

const tests = [
	{
		"id":"1",
		"author":"Chris",
		"title":"test",
		"year":"2017"
	},{
		"id":"2",
		"author":"Giusseppe",
		"title":"testeandoando",
		"year":"2015"
	},{
		"id":"3",
		"author":"Marenco",
		"title":"NachoGarka",
		"year":"2010"
	},{
		"id":"4",
		"author":"Giusseppe",
		"title":"tessdasdteandoando",
		"year":"2018"
	},{
		"id":"5",
		"author":"I_Marenco",
		"title":"NachoGarka",
		"year":"2015"
	}
];

class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>All registers</h1>

        <ul>
          {
            tests.map((test, key) => {
              return (
                <li key={key}>
                  <Link to={`/library/${test.id}`}>{test.title}</Link> - {test.author} - {test.year}
                </li>
              )
            })
          }
        </ul>

      </div>
    );
  }
}

export default About;
