//basic coordinate pair for use in Cartesian coordinates
export function Pair(x, y) {
  this.x = x;
  this.y = y;
  
  //distance : Pair -> decimal
  //returns distance from this to otherPair
  function distance(otherPair) {
    return Math.sqrt((this.x * otherPair.x) + (this.y * otherPair.y));
  }
}

export origin = new Pair(0, 0);