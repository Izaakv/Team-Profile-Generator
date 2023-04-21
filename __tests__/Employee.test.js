// Import Employee class
const Employee = require("../lib/Employee");


describe("Employee", () => {
  
 
  describe("Employee object", () => {
    it("Creates an object with name, id, and email properties", () => {
      const employee = new Employee("izaak villa", 1, "izaakvilla@gmail.com");

      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("izaak villa");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("izaakvilla@gmail.com");
    });
  });

  
  describe("Name Attribute", () => {
    it("Should return the object's name property", () => {
      const employee = new Employee("izaak villa", 1, "izaakvilla@gmail.com");

      expect(employee.getName()).toEqual("izaak villa");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const employee = new Employee("izaak villa", 1, "izaakvilla@gmail.com");

      expect(employee.getID()).toEqual(1);
    });
  });


  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const employee = new Employee("izaak villa", 1, "izaakvilla@gmail.com");

      expect(employee.getEmail()).toEqual("izaakvilla@gmail.com");
    });
  });


  describe("getRole", () => {
    it("Should return the string 'Employee'", () => {
      const employee = new Employee("izaak villa", 1, "izaakvilla@gmail.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});