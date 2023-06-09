/// <reference types="cypress" />

require('@cypress/xpath');

const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor")

/* global Given, When, Then, And */

Given ('Estou logado na Loja Natura', () => {
    cy.visit('https://www.natura.com.br/')


    cy.get('button[id="onetrust-reject-all-handler"]').click();
    

    cy.xpath('/html/body/div[1]/header/div/div[1]/button').click();
    
    
    cy.xpath('/html/body/div[1]/div[3]/div/div/div/div[1]/div[1]/button').click();
   
    
    cy.get ('input[id="login-field"]').type ('renata.esther.dasneves@live.jp');
 
    
    cy.get('input[name="password"]').type("HEH2QoZxit@");

    cy.xpath('/html/body/div[1]/div[2]/div/div/form/div[3]/button[1]').click();
    
})

When('Adiciono múltiplos produtos ao carrinho', () => {
    cy.get('button[aria-label="Buscar produto"]').type('Maquiagens');


    cy.xpath('/html/body/div[1]/div[1]/div/button').click();
   
    
    cy.xpath('/html/body/div[1]/div[3]/div/div[3]/div/div/div[11]/div/div/div/div[2]/div[2]/div/div/button').click();
   

    cy.xpath('/html/body/div[1]/div[3]/div/div[3]/div/div/div[10]/div/div/div/div[2]/div[2]/div/div/button').click();
   

    cy.xpath('/html/body/div[1]/div[3]/div/div[4]/div/a').click();
   
    
    cy.xpath('/html/body/div[1]/div[3]/div/div[3]/div[2]/div/div[10]/div/div/div/div[2]/div[2]/div/div/button').click();

    cy.xpath('/html/body/div[1]/header/div/span/button').click();

})


Then('O preço final do meu carrinho é a soma dos itens adicionados', () => {
   cy.wait(1000);
   cy.contains('R$ 261,34');
    
})