import App from "../.././src/components/App";

describe("NewsLetterSubscription.cy.js", () => {
  describe("NewsLetterSubscription.cy.js", () => {
    it("Check input field for placeholder", () => {
      cy.mount(<App />); // mount the component
      cy.get("input").should(
        "have.attr",
        "placeholder",
        "Subscribe to our newsletter"
      ); // check the placeholder in the input field
    });
    it("test newsletter subscription", () => {
      cy.mount(<App />); // mount the component
      cy.get('[data-test="email-input"]').type("test@gmail.com"); // Type email
      cy.get('[data-test="submit-button"]').click(); // Click on submit button
      cy.get('[data-test="success-message"]') 
        .should("exist")
        .contains("Thank you for subscribing to our newsletter"); // Check if success message is displayed
    });
  });
});