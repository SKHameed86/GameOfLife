module.exports = function(){
	function underpopulation(cellState, numberOfLiveNeighbours) {
		if (cellState === 1){
			if (numberOfLiveNeighbours >= 0 && numberOfLiveNeighbours < 2) {
				return 0;
			}
		}
		else if (cellState === 0){
			if (numberOfLiveNeighbours > 0 && =< 2){
				return 0;
			}
		}
		return overcrowding(cellState, numberOfLiveNeighbours);
	}
	
	function overcrowding(cellState, numberOfLiveNeighbours) {
		if (cellState === 1 || cellState === 0){
			if (numberOfLiveNeighbours > 3) {
				return 0;
			}
		}
		return survive(cellState, numberOfLiveNeighbours);
	}
	
	function survive(cellState, numberOfLiveNeighbours) {
		if (cellState === 1){
			if (numberOfLiveNeighbours === 2 || numberOfLiveNeighbours === 3) {
				return 1;
			}
		}
		return createlife(cellState, numberOfLiveNeighbours);
	}
	
	function createlife(cellState, numberOfLiveNeighbours) {
		if (cellState === 0){
			if (numberOfLiveNeighbours === 3) {
				return 1;
			}
		}
		return barren(cellState, numberOfLiveNeighbours);
	}
	
	function barren(cellState, numberOfLiveNeighbours) {
		if (cellState === 0) && (numberOfLiveNeighbours === 0) {
				return 0;
		}
		return underpopulation(cellState, numberOfLiveNeighbours);
	}

	function evolve(gridState, iterations){
		var initialState = gridState;
		var newState = [];
		var mirrorState = []; //array to hold values of initialState before updated to newState
		var iterations = 0;
		var cell = null;
		var index = 0;
		
		//Populate mirrorState with values of initialState
		for (var i = 0; i < initialState.length; i++) {
			for (var j = 0; j < initialState[i].length; i++) {
				mirrorState.push(initialState[i][j]);
			}
		}
		
		//Count neighbours near live cell
			function countNeighbour(i, j) {
				var x = 0;
				x += mirrorState[i-1][j-1];
				x += mirrorState[i-1][j];
				x += mirrorState[i-1][j+1];
				x += mirrorState[i][j-1];
				x += mirrorState[i][j+1];
				x += mirrorState[i+1][j-1];
				x += mirrorState[i+1][j];
				x += mirrorState[i+1][j+1];
				return x;
			}
		
		//Inputs values into newState
		for(var k = 0; k < initialState.length; k++) {
			for(var l = 0; l < initialState[k].length; l++) {
				numberOfLiveNeighbours = countNeighbour(i, j)
				cell = underpopulation(initialState[k][l], mirrorState[index]);
				newState[k].push(cell);
				index++;
			}
		}

		if(iterations > 0) {
			return evolve(newState, iterations);
		}
			else {
				return newState;
			}
	}

	return {
		underpopulation: underpopulation,
		overcrowding: overcrowding,
		survive: survive,
		createlife: createlife,
		barren: barren,
		evolve: evolve
	};
};