import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Console(props) {
  const [total, setTotal] = useState(0);
  const [popular, setPop] = useState([{id: 0, url: '', hits:0}]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:9090/console');
      setTotal(result.data.total);
      console.log(result.data.top.slice(0, 3));
      setPop(
	result.data.top
      );
    };
    fetchData();
  }, []);

  console.log("PRE");
  console.log(popular);
  console.log(popular[0]);
  console.log(popular[0].url);
  return (
    <div className="console">
      <h1>URL Console</h1>
      <p>Total brief links created: {total}</p>
      <p>{popular[0].url}</p>
      {popular.map((record) => {
	return (
	  <ul>
	    <li>{record.url}</li>
	    <li>{record.hit}</li>
	  </ul>
	);
      }
      )}
    </div>
  );
}

export default Console;
