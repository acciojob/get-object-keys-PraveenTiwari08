const student = {
  name: "raj"
};

// Add a method to Object prototype
Object.prototype.getKeys = () => {
  return Object.keys(this);
};

// Testing
console.log(student.getKeys());