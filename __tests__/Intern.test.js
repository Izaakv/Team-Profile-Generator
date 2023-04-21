// Import class constructors
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");


describe("Intern", () => {
  
  
  describe("Intern object instantiation", () => {
    it("Creates an object with name, id, email, and school properties", () => {
      const intern = new Intern("izaak villa", 1, "izaakvilla@gmail.com", "University of Richmond");

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("izaak villa");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("izaakvilla@gmail.com");
      expect(intern.school).toEqual("University of Richmond");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const intern = new Intern("izaak villa", 1, "izaakvilla@gmail.com", "University of Richmond");

      expect(intern.getName()).toEqual("izaak villa");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const intern = new Intern("izaak villa", 1, "izaakvilla@gmail.com", "University of Richmond");

      expect(intern.getID()).toEqual(1);
    });
  });

  
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const intern = new Intern("izaak villa", 1, "izaakvilla@gmail.com", "University of Richmond");

      expect(intern.getEmail()).toEqual("izaakvilla@gmail.com");
    });
  });

  describe("getSchool", () => {
    it("Should return the object's school property", () => {
      const intern = new Intern("izaak villa", 1, "izaakvilla@gmail.com", "University of Richmond");

      expect(intern.getSchool()).toEqual("University of Richmond");
    });
  });

  
  describe("getRole", () => {
    it("Should return the string 'Intern", () => {
      const intern = new Intern("izaak villa", 1, "izaakvilla@gmail.com", "University of Richmond");

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});