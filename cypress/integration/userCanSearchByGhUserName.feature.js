describe("User can search by GH user name", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://api.github.com/search/users?q=emiliano-ma",
      response: "fixture:search_result.json",
    });
    cy.visit("/");
  });

  it("User can type a user name and get a search result as a response when clicking 'Search'", () => {
    cy.get('[data-cy="username"]').type('emiliano-ma');
    cy.get('[data-cy="search"]').click();


    cy.get("[data-cy='search-result-67980695']").within(() => {
      cy.contains("emiliano-ma");

    });
  });

});