//basic coordinate pair for use in Cartesian coordinates
function Pair(x, y) {
  this.x = x;
  this.y = y;
  
  //distance : Pair -> decimal
  //returns distance from this to otherPair
  function distance(otherPair) {
    return Math.sqrt((this.x * otherPair.x) + (this.y * otherPair.y));
  }
}

origin = new Pair(0, 0);

/* Organism
class Organism
  fields :
    Pair position
    integer reproductionDelay
    integer productionRate
    integer tier
    integer numberOfMates
    integer speed
    integer mutationProbability
    integer lifeSpan
    integer consumptionRate
    integer litterSize
    integer id
    integer groupedWith
    
  functions :
    display : ->
    display() {
      side effects :
        displays a visual representation of the organism
    }
    
    reproduce : Organism, Organism, ... -> arrayOfOrganism
    reprodure(org1, org2, ...) {
      return arrayOfOrganism //organisms reproduced
    }
    
    preyUpon : Organism, Organism -> Organism
    preyUpon(org1, org2) {
      return Organism //organism killed
    }
    
    formGroup : Organism, Organism, ... ->
    formGroup(org1, org2, ...) {
      side effects :
        changed groupedWith of parameters to this.id
    }
    
    produce : -> Integer
    produce() {
      return Integer //this.productionRate
    }
*/

/* Building
class Building
  fields :
    Pair position
    integer type
    integer foodStorage
    integer lifespanChange
    integer reproductionTimeChange
    integer productionRateChange
    integer speedChange
    
  functions :
    display : ->
    display() {
      side effects :
        displays a visual representation of the building
    }
*/

//Building constructor
function Building(position, type, foodStorage, lifespanChange, reproductionTimeChange, productionRateChange, speedChange) {
  this.position = position;
  this.type = type; //this may be unneccesary
  this.foodStorage = foodStorage;
  this.lifespanChange = lifespanChange;
  this.reproductionTimeChange = reproductionTimeChange;
  this.productionRateChange = productionRateChange;
  this.speedChange = speedChange;
  this.display = function() {
    //finish display
  }
}

/* World
class World
  fields :
    integer temperature
    Pair size
    other conditions? (arid, humid, others?, tectonic events, natural disasters, precipitation, wildfires)
    arrayOfArrays map (contains both organisms and buildings)
      -size is the size of the world
      -each Organism and Building is at its position Pair
    array organisms
    array buildings
    integer foodInStores
    integer tickFrequency
    integer totalFoodStorage
    integer totalLifeSpanChange
    integer totalReproductionTimeChange
    integer totalProductionRateChange
    integer totalSpeedChange
    
  functions :
    display : ->
    display() {
      functions to use :
        Organism.display()
        Building.display()
    }
    
    findEncounters : -> 
    findEncounters() {
      functions to use :
        World.encounter(Organism, Organism, ...)
    }
    
    encounter : Organism, Organism, ... ->
    encounter(org1, org2, ...) {
      functions to use :
        World.reproduce(Organism, Organism, ...)
        World.preyUpon(Organism, Organism)
        World.formGroup(Organism, Organism, ...)
    }
    
    reproduce : Organism, Organism, ... ->
    reproduce(org1, org2, ...) {
      side effects :
        adds one or more Organism to organisms and map
      functions to use :
        Organism.reproduce(Organism, Organism, ...)
    }
    
    preyUpon : Organism, Organism ->
    preyUpon(org1, org2) {
      side effects :
        removes an Organism from organisms and map
      functions to use :
        Organism.preyUpon(Organism)
    }
    
    formGroup : Organism, Organism, ... ->
    formGroup(org1, org2, ...) {
      functions to use :
        Organism.formGroup(Organism, Organism, ...)
    }
    
    produce : ->
    produce() {
      functions to use :
        Organism.produce()
      side effects :
        add food produced by all organisms to foodInStores
    }
    
    tick : ->
    tick() {
      functions to use :
        World.produce()
        World.findEncounters()
    }
*/

function World(temperature, size, map, organisms, buildings, foodInStores, tickFrequency, totalFoodStorage, totalLifeSpanChange,
  totalReproductionRateChange, totalProductionRateChange, totalSpeedChange) {
    this.temperature = temperature;
    this.size = size;
    this.map = map;
    this.organisms = organisms;
    this.buildings = buildings; 
    this.foodInStores = foodInStores;
    this.tickFrequency = tickFrequency;
    this.totalFoodStorage = totalFoodStorage;
    this.totalLifeSpanChange = totalLifeSpanChange; 
    this.totalReproductionRateChange = totalReproductionRateChange;
    this.totalProductionRateChange = totalProductionRateChange;
    this.totalSpeedChange = totalSpeedChange;
    
    this.display = function() {
      //finish display
    }
    
    this.findEncounters = function() {
      //use World.encounter
    }
    
    this.encounter = function() {
      //use arguments[]
      //World.reproduce
      //World.preyUpon
      //World.formGroup
    }
    
    this.reproduce = function() {
      //use arguments[]
      //Organism.reproduce
    }
    
    this.preyUpon = function(org1, org2) {
      //use Organism.preyUpon
    }
    
    this.formGroup = function() {
      //use arguments[]
      //Organism.formGroup
    }
    
    this.produce = function() {
      for (var i = 0; i < this.organisms.length, i++) {
        var producedByOrganismI = this.organisms[i].produce();
        if ((this.foodInStores + producedByOrganismI) <= this.totalFoodStorage) {
          this.foodInStores += producedByOrganismI;
        } else {
          this.foodInStores = this.totalFoodStorage;
          return;
        }
      }
    }
    
    this.tick = function() {
      this.produce();
      //World.findEncounters
    }
}