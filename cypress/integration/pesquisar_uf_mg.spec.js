/// <reference types="cypress" />

describe("Pesquisar CEP por UF", () => {
    beforeEach(() =>{
    cy.site_cep_correios();
  
})

it("Pesquisar CEP por Municipio Belo Horizonte", () => {
    cy.pesquisar_CEP('31744620', 'Belo Horizonte/MG');


});

    it("Pesquisar CEP por Municipio Ponte Nova", () => {
    cy.pesquisar_CEP('35430004', 'Ponte Nova/MG');
    
 });

    it("Pesquisar CEP por Municipio Governador Valadares", () => {     
    cy.pesquisar_CEP('35030762', 'Governador Valadares/MG');
        
        
});
});