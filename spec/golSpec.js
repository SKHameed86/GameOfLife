describe('The rules', function(){
	var underpopulation = require('../script/gol')().underpopulation;
	var overcrowding = require('../script/gol')().overcrowding;
	var survival = require('../script/gol')().survival;
	var createlife = require('../script/gol')().createlife;
	var barren = require('../script/gol')().barren;

//Scenario 1: Underpopulation
	it('Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.', function (){
		expect(underpopulation(0,0)).toBe(0);
		expect(underpopulation(0,1)).toBe(0);
		expect(underpopulation(0,2)).toBe(0);
		expect(underpopulation(1,0)).toBe(0);
		expect(underpopulation(1,1)).toBe(0);
		expect(underpopulation(1,2)).toBe(1);
	});
	
//Scenario 2: Overcrowding
	it('Any live cell with more than three live neighbours dies, as if caused by overcrowding.', function (){
		expect(overcrowding(1,4)).toBe(0);
		expect(overcrowding(1,5)).toBe(0);
		expect(overcrowding(1,6)).toBe(0);
		expect(overcrowding(1,7)).toBe(0);
		expect(overcrowding(1,8)).toBe(0);
		expect(overcrowding(0,4)).toBe(0);
		expect(overcrowding(0,5)).toBe(0);
		expect(overcrowding(0,6)).toBe(0);
		expect(overcrowding(0,7)).toBe(0);
		expect(overcrowding(0,8)).toBe(0);
	});
	
//Scenario 3: Survival
	it('Any live cell with two or three live neighbours, stays alive - thus surviving.', function (){
		expect(survival(1,0)).toBe(0);
		expect(survival(1,1)).toBe(0);
		expect(survival(1,2)).toBe(1);
		expect(survival(1,3)).toBe(1);
		expect(survival(1,4)).toBe(0);
	});

//Scenario 4: Creation of Life
	it('An empty cell with three live neighbours, creates a new live cell in this space - thus creating new life.', function (){
		expect(createlife(0,0)).toBe(0);
		expect(createlife(0,1)).toBe(0);
		expect(createlife(0,2)).toBe(0);
		expect(createlife(0,3)).toBe(1);
		expect(createlife(0,4)).toBe(0);
	});

//Scenario 5: No Live Cells
	it('With no live cells, the next state also contains no live cells.', function (){
		expect(barren(0,0)).toBe(0);
	});
});
	
//Scenario 6: Outcomes for Seeded Grid
describe('Game', function (){
	var evolve = require('../script/gol')().evolve;

	it('can perform a simple evolution.', function(){
		var initialState = [
			[0,0,0],
			[0,1,0],
			[0,0,0]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('can die out.', function(){
		var initialState = [
			[1,0,1],
			[1,1,1],
			[0,1,0]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('can beat the odds.', function(){
		var initialState = [
			[1,0,0],
			[0,1,0],
			[0,0,1]
		];

		var resultState = [
			[1,0,0],
			[0,1,0],
			[0,0,1]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('can perform a "miracle of life".', function(){
		var initialState = [
			[0,0,0],
			[1,0,1],
			[0,1,0]
		];

		var resultState = [
			[0,0,0],
			[1,1,1],
			[0,1,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('can remain barren', function(){
		var initialState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});
});