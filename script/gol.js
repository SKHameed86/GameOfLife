module.exports = function(){
	function underpopulation(cellState, numberOfLiveNeighbours) {
		if (numberOfLiveNeighbours < 2 && cellState == 1){
			return 1;
		}
		else{
			return 0;
		}
	}

	function evolve(gridState){
		var newState = [];
		return newState;
	}

	return {
		underpopulation: underpopulation,
		evolve: evolve
	};
};