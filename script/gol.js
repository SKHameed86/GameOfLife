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
		return survival(cellState, numberOfLiveNeighbours);
	}
	
	function survival(cellState, numberOfLiveNeighbours) {
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

	function evolve(gridState){
		var initialState = gridState;
		var newState = [];
		var mirrorState = []; //array to hold values of initialState before updated to newState
		
		//Populate mirrorState with values of initialState
		for (var i = 0; i < initialState.length; i++){
			for (var j = 0; j < initialState.length[i]; i++){
				mirrorState.push(initialState[i][j]);
			}
		}
		
		
		
		return newState;
	}

	return {
		underpopulation: underpopulation,
		overcrowding: overcrowding,
		survival: survival,
		createlife: createlife,
		barren: barren,
		evolve: evolve
	};
};