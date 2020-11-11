import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../components/CounterControl/CounterControl';
// import CounterOutput from '../components/CounterOutput/CounterOutput';
import CounterOutput from '../components/CounterOutput/TestItr';
const Counter = (props) => {
	return (
		<div>
			<CounterControl label="API" clicked={() => props.test()} />
			<CounterOutput value={props.ctr} />
			{/* <CounterControl label="Increment" clicked={() =>props.onIncrementCounter()} />
        <CounterControl label="Decrement" clicked={() => props.onDecrementCounter()}  /> */}
			{/* <CounterControl label="Add 5" clicked={() => props.onADD()}  />
        <CounterControl label="Subtract 5" clicked={() => props.onSUB()}  /> */}
        
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		ctr: state.counter
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
		onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
		onADD: () => dispatch({ type: 'ADD', payload: 5 }),
		onSUB: () => dispatch({ type: 'SUBSTRACT', payload: 5 }),
		test: () => {
			// let url = "https://jsonplaceholder.typicode.com/users"
			// let result = fetch(url).then((data) =>{
			//     data.json().then((datajson) => {
			//         console.log("In Action", datajson)
			//         return dispatch({
			//             type: "API",
			//             // payload:{
			//                 id: datajson.id,
			//                 name: datajson.name,
			//         })
			//     })
			// })
			Axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
				console.log(res.data);
				return dispatch({
					type: 'API',
					payload: res.data
				});
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
