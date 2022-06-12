/// <reference types='cypress' />

import loc from './locators'

Cypress.Commands.add('site_cep_correios', () =>{
    cy.visit("https://buscacepinter.correios.com.br/app/endereco/index.php");
    cy.title().should('be.equal', 'Busca CEP');
    cy.get(loc.PESQUISAR_CEP.IMAGEM_CORREIOS);
    
});

Cypress.Commands.add('pesquisar_CEP', (cep, municipio) => {
    cy.get(loc.PESQUISAR_CEP.CAMPO_CEP).type(cep);
    cy.get(loc.PESQUISAR_CEP.TAG_SELECT_CEP).select('Localidade/Logradouro');
    cy.get(loc.PESQUISAR_CEP.BOTAO_BUSCAR).click();
    cy.get(loc.PESQUISAR_CEP.COLUNA_MUNICIPIO).should('have.text', municipio);

});