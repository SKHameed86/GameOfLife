module.exports = function(){
	function underpopulation(cellState, numberOfLiveNeighbours) {
		if (cellState == 1 && numberOfLiveNeighbours < 2){
			return 1;
		}
		else{
			return 0;
		}
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