// cypress/integration/app.spec.js

describe("App", () => {
  it("changes theme on button click", () => {
    cy.visit('http://localhost:3000'); // Adjust this based on your app's routing

    // Initial theme should be light
    cy.get("#Outerwrapper").should(
      "have.css",
      "background-color",
      "rgb(220, 220, 220)"
    );

    // Click on the dark mode button
    cy.get("#ToggleButton1").click();

    // Theme should be dark now
    cy.get("#Outerwrapper").should(
      "have.css",
      "background-color",
      "rgb(36, 36, 36)"
    );

    // Click on the light mode button
    cy.get("#ToggleButton2").click();

    // Theme should be light again
    cy.get("#Outerwrapper").should(
      "have.css",
      "background-color",
      "rgb(220, 220, 220)"
    );
  });
});
