/*
make sure to export everything
import Organism, Building, and Pair
class World
  fields :
    integer temperature
    Pair size
    other conditions? (arid, humid, others?)
    arrayOfArrays map (contains both organisms and buildings)
      -size is the size of the world
      -each Organism and Building is at its position Pair
    array organisms
    array buildings
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
    
    generateRandom : -> random decimal in [0, 1)
    generateRandom() {
      return randomDecimal
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
    
    reproduce : Organism, Organism ->
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
*/