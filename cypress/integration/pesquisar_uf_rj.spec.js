/// <reference types="cypress" />

describe("Pesquisar CEP por UF", () => {
    beforeEach(() =>{
    cy.site_cep_correios();
  
})

it("Pesquisar CEP por Municipio Rio de Janeiro", () => {
    cy.pesquisar_CEP('22470040', 'Rio de Janeiro/RJ');


});

    it("Pesquisar CEP por Municipio Macaé", () => {
    cy.pesquisar_CEP('27960000', 'Macaé/RJ');
    
 });

    it("Pesquisar CEP por Municipio Campinas", () => {     
    cy.pesquisar_CEP('24470040', 'São Gonçalo/RJ');
        
        
});
});