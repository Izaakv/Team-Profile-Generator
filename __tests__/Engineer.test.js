// Import class constructors
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
  
  
  describe("Engineer object instantiation", () => {
    it("Creates an object with name, id, email, and github properties", () => {
      const engineer = new Engineer("izaak villa", 1, "izaakvilla@gmail.com", "izaakvillagit");

      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer.name).toEqual("izaak villa");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("izaakvilla@gmail.com");
      expect(engineer.github).toEqual("izaakvillagit");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const engineer = new Engineer("izaak villa", 1, "izaakvilla@gmail.com", "izaakvillagit");

      expect(engineer.getName()).toEqual("izaak villa");
    });
  });

  
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const engineer = new Engineer("izaak villa", 1, "izaakvilla@gmail.com", "izaakvillagit");

      expect(engineer.getID()).toEqual(1);
    });
  });

  
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const engineer = new Engineer("izaak villa", 1, "izaakvilla@gmail.com", "izaakvillagit");

      expect(engineer.getEmail()).toEqual("izaakvilla@gmail.com");
    });
  });

 
  describe("getGithub", () => {
    it("Should return the object's github property", () => {
      const engineer = new Engineer("izaak villa", 1, "izaakvilla@gmail.com", "izaakvillagit");

      expect(engineer.getGithub()).toEqual("izaakvillagit");
    });
  });

  
  describe("getRole", () => {
    it("Should return the string 'Engineer", () => {
      const engineer = new Engineer("izaak villa", 1, "izaakvilla@gmail.com", "izaakvillagit");

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});