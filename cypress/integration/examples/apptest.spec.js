describe("Pizza App", () => {
  describe("adding text works", () => {
    it("navigate to http://localhost:3000/ and, it can navigate to he order form", () => {
      cy.visit("http://localhost:3000/");
      cy.get(".orderForm").click();
    });
    it("can fill out the form", () => {
      cy.get("select").select("small");
      cy.get(".firstSauce").click();
      cy.get(".topping1").click();
      cy.get(".topping3").click();
      cy.get(".topping4").click();
      cy.get(".topping10").click();
      cy.get('input[name="name"]').type("ViKtor");
      cy.get('input[name="instructions"]').type("Take The Stairs");
      cy.get("button").click();
    });
    it("can look at the most Recent order", () => {
        cy.get('a').contains('Recent Orders').click()
    })
  });
});
