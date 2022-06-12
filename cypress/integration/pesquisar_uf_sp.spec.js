/// <reference types="cypress" />

describe("Pesquisar CEP por UF", () => {
    beforeEach(() =>{
    cy.site_cep_correios();
  
})

it("Pesquisar CEP por Municipio SP", () => {
    cy.pesquisar_CEP('01550000', 'São Paulo/SP');


});

    it("Pesquisar CEP por Municipio Diadema", () => {
    cy.pesquisar_CEP('09911160', 'Diadema/SP');
    
 });

    it("Pesquisar CEP por Municipio Campinas", () => {     
    cy.pesquisar_CEP('13013161', 'Campinas/SP');
        
        
});
});