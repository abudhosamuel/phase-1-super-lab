// Write your classes here
class Tree {
    constructor(species) {
      this.species = species;
    }
  
    // Static method to return a short definition of all trees
    static definition() {
      return 'A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.';
    }
  }
  
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    // Static method to return a definition for Deciduous trees
    static definition() {
      return `${super.definition()} Deciduous trees shed their leaves annually.`;
    }
  }
  
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    // Static method to return a definition for Evergreen trees
    static definition() {
      return `${super.definition()} Evergreens keep their leaves all year round.`;
    }
  }
  
  // Example usage:
  const oak = new Deciduous('Oak', 'Mighty Oak');
  console.log(oak.species); // Output: Oak
  console.log(oak.name); // Output: Mighty Oak
  console.log(Deciduous.definition()); 
  // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually.
  
  const pine = new Evergreen('Pine', 'Tall Pine');
  console.log(pine.species); // Output: Pine
  console.log(pine.name); // Output: Tall Pine
  console.log(Evergreen.definition()); 
  // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round.
  