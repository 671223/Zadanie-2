describe("Nasz pierwszy blok testów", () => { 
  it("Badanie na miejscu LMS", () => { 
    cy.visit("https://www.edu.goit.global/account/login"); 
  }); 
 
  it("Znajdź wejście z pocztą i wpisz email", () => {
    cy.visit("https://www.edu.goit.global/account/login"); 
    cy.get("#user_email").type("user888@gmail.com"); 
  }); 
  it("sprawdź czy dziła ", () =>{
  cy.visit("https://www.edu.goit.global/account/login");
  cy.get('[type="submit"]').should("have.text", "Log in");
  cy.get('[type="submit"]').should("have.css", "background-color", "rgb(255, 107, 10)");
  });
});
