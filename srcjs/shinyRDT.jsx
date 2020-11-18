import DataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
import './shinyRDT.css';
import { reactWidget } from 'reactR';
import React, { useState } from 'react';

// Convert JSON to format suitable for DataSheet component
const toValueFormat = ({ data, headers, nrows }) => {
	let dataArray = [];
	let headerArray = [];
	headers.forEach((colname) => {
		headerArray.push({
			value: colname,
			readOnly: true
		});
	});
	dataArray.push(headerArray);

	for( let i = 0; i < nrows; i++ ) {
		let row = [];
		headers.forEach((colname) => {
			row.push({value: data[colname][i]});
		});
		dataArray.push(row);
	}

	return( dataArray );
};

// Function component that takes data as input from R
const DataSheetInput = ({ data }) => {

	const [input, setData] = useState(toValueFormat(data));

	// const [input, setData] = useState([
	// 		[
	// 			{readOnly: true, value: ''},
	// 			{value: 'A', readOnly: true},
	// 			{value: 'B', readOnly: true},
	// 			{value: 'C', readOnly: true},
	// 			{value: 'D', readOnly: true}
	// 		],
	// 		[{readOnly: true, value: 1}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
	// 		[{readOnly: true, value: 2}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
	// 		[{readOnly: true, value: 3}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
	// 		[{readOnly: true, value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}]
	// 	]
	// );

	return (
		<DataSheet
			data={ input }
			valueRenderer={(cell) => cell.value}
			onContextMenu={(e, cell, i, j) => cell.readOnly ? e.preventDefault() : null}
			onCellsChanged={changes => {
				const grid = input.map(row => [...row])
				changes.forEach(({cell, row, col, value}) => {
					grid[row][col] = {...grid[row][col], value}
				})
				setData(grid)
			}}
		/>
	);
};

reactWidget('shinyRDT', 'output', {
	DataSheet: DataSheetInput
});