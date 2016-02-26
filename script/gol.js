module.exports = function(){
	function underpopulation(cellState, numberOfLiveNeighbours) {
		if (cellState == 1){
			if (numberOfLiveNeighbours >= 0 && numberOfLiveNeighbours < 2) {
				return 0;
			}
		}
		else if (cellState == 0){
			if (numberOfLiveNeighbours > 0 && =< 2){
				return 0;
			}
		}
		return overcrowding(cellState, numberOfLiveNeighbours);
	}
	
	function overcrowding(cellState, numberOfLiveNeighbours) {
		if (cellState == 1 || cellState == 0){
			if (numberOfLiveNeighbours > 3) {
				return 0;
			}
		}
		return survival(cellState, numberOfLiveNeighbours);
	}
	
	function survival(cellState, numberOfLiveNeighbours) {
		if (cellState == 1){
			if (numberOfLiveNeighbours == 2 || numberOfLiveNeighbours == 3) {
				return 1;
			}
		}
		return createlife(cellState, numberOfLiveNeighbours);
	}
	
	function createlife(cellState, numberOfLiveNeighbours) {
		if (cellState == 0){
			if (numberOfLiveNeighbours == 3) {
				return 1;
			}
		}
		return barren(cellState, numberOfLiveNeighbours);
	}
	
	function barren(cellState, numberOfLiveNeighbours) {
		if (cellState == 0) && (numberOfLiveNeighbours == 0) {
				return 0;
		}
		return underpopulation(cellState, numberOfLiveNeighbours);
	}

	function evolve(gridState){
		var newState = [
		{x: 0, y: 1},
		{x: 0, y: 0},
		{x: 0, y: -1},
		];
		return newState;
	}

	return {
		underpopulation: underpopulation,
		evolve: evolve
	};
};