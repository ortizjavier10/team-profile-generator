const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test("creates manager object", () => {
    const name = "Riley";
    const manager = new Manager(name);
    expect(manager.name).toBe(name);
});


test('getRole() should return "Manager"', () => {
    const title = "Manager";
    const manager = new Manager("Riley", 1, "test@test.com", 100);
    expect(manager.getRole()).toBe(title);
});

// test("Can set office number via constructor argument", () => {
//     const office = 100;
//     const manager = new Manager("Riley", 1, "test@test.com", office);
//     expect(manager.office).toBe(office);
//   });
