/// <reference types="cypress" />
let dadosLogin
const produtosPage = require('../support/page_objects/produtosPage')
context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */
  before(() => {
    cy.fixture('perfil').then(perfil => {
      dadosLogin = perfil
    })
  });
  beforeEach(() => {
    cy.visit('/minha-conta')
  })

  it('Deve fazer login', () => {
    // Login
    cy.login(dadosLogin.usuario, dadosLogin.senha);
    cy.get('.page-title').should('contain', 'Minha conta', { log: false });
  })

  it('Deve adicionar produtos ao carrinho', () => {
    cy.get('#primary-menu > .menu-item-629 > a').click();

    // Adicionar o produto ao carrinho
    produtosPage.adicionarProdutoAoCarrinho('2559', 'XS', 'Green', 1);

    // Verificar se o produto foi adicionado com sucesso
    cy.get('.woocommerce-message').should('contain', '4 × “Abominable Hoodie” foram adicionados no seu carrinho.');

    // Clicar novamente no menu para continuar o teste
    cy.get('.woocommerce-message > .button').click();

    //Preencha as opções necessárias no formulário de checkout
    cy.get('.checkout-button').click();
    cy.get('#billing_first_name').type('Allison');
    cy.get('#billing_last_name').type('Silva');
    cy.get('#select2-billing_country-container').click();
    cy.contains('li.select2-results__option', 'Brasil').scrollIntoView().click();
    cy.get('#billing_address_1').type('Rua teste, Alameda fictícia');
    cy.get('#billing_city').type('Belém');
    cy.get('#select2-billing_state-container').click();
    cy.contains('li.select2-results__option', 'Pará').scrollIntoView().click();
    cy.get('#billing_postcode').type('90005320');
    cy.get('#billing_phone').type('32362024');
    cy.get('#billing_email').type('email.teste@gamil.com');
    cy.get('#order_comments').type('Finalização da tarefa');

    //Finalização da compra

    cy.get('#payment_method_cod').click();
    cy.get('#terms').click();
    cy.get('#place_order').click();

    //Valide se a compra foi realizada com sucesso
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.');



  });

});