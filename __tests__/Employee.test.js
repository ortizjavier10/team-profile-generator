const Employee = require('../lib/Employee');

test("creates employee object", () => {
    const name = "Riley";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

test("email can be set via constructor", () => {
    const email = "test@test.com";
    const employee = new Employee("Riley", 1, email);
    expect(employee.email).toBe(email);
});

test("Can get name via getName()", () => {
    const name = "Riley";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("getRole() should return \"Employee\"", () => {
    const title = "Employee";
    const employee = new Employee("Riley", 1, "test@test.com");
    expect(employee.getRole()).toBe(title);
});