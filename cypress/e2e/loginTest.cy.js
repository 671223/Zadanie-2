describe("User can visit GoIt page",() => {
    beforeEach("Go to page", () => {
        cy.visit("https://www.edu.goit.global/account/login");
    })
    it ("First log in and log out ", () => {
        cy.get('#user_email').type("user888@gmail.com");
        cy.get('input[type ="password"]').type("1234567890");
        cy.get('button[type="submit"]').click();
        cy.get('#open-navigation-menu-mobile').click();
        //cy.get('#open-navigation-menu-mobile').should('be.visible').click(); 
        //cy.get(':nth-child(15) > .next-bve2v1').click();
        
    });

    it ("Second log in and log out ", () => {
        cy.get('#user_email').type("testowyqa@qa.team.com");
        cy.get('input[type ="password"]').type("QA!automation-1");
        cy.get('button[type="submit"]').click();
        cy.get('#open-navigation-menu-mobile').click();
      //cy.get('#open-navigation-menu-mobile').should('be.visible').click(); 
     //cy.get(':nth-child(6) > .next-bve2v1').click();
    });


});