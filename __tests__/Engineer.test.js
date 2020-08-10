const Engineer = require('../lib/Engineer');

test("creates engineer object", () => {
    const name = "Riley";
    const engineer = new Engineer(name);
    expect(engineer.name).toBe(name);
  });

test('getRole() should return Engineer', () => {
    const title = "Engineer";
    const engineer = new Engineer("Riley", 1, "test@test.com", 100);
    expect(engineer.getRole()).toBe(title);
});

test("Can set GitHUb account via constructor", () => {
    const github = "GitHubUser";
    const engineer = new Engineer("Riley", 1, "test@test.com", github);
    expect(engineer.github).toBe(github);
});

test("Can get GitHub username via getGithub()", () => {
    const github = "GitHubUser";
    const engineer = new Engineer("Riley", 1, "test@test.com", github);
    expect(engineer.getGithub()).toBe(github);
});