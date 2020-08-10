const Intern = require('../lib/Intern');

test("creates intern object", () => {
    const name = "Riley";
    const intern = new Intern(name);
    expect(intern.name).toBe(name);
  });

test('getRole() should return Intern', () => {
    const title = "Intern";
    const intern = new Intern("Riley", 1, "test@test.com", 100);
    expect(intern.getRole()).toBe(title);
});

test("school can be set via constructor", () => {
    const school = "UCF";
    const intern = new Intern("Riley", 1, "test@test.com", school);
    expect(intern.school).toBe(school);
});