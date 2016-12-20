/*
make sure to export everything
import Organism, Building, and Pair
class World
  fields :
    integer temperature
    Pair size
    other conditions? (arid, humid, others?)
    array organisms
    array buildings
    integer tickFrequency
    integer totalFoodStorage
    integer totalLifeSpanChange
    integer totalReproductionTimeChange
    integer totalProductionRateChange
    integer totalSpeedChange
    
  methods :
    display : ->
    display() {
      methods to use :
        Organism.display()
        Building.display()
    }
    
    generateRandom : -> random decimal in [0, 1)
    generateRandom() {
      return randomDecimal
    }
    
    organize : array ->
    organize(input) {
      side effects :
        sort input by distance from origin
    }
*/