// produtosPage.js
function adicionarProdutoAoCarrinho1() {
    cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name').click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.single_add_to_cart_button').click()
}
function adicionarProdutoAoCarrinho2() {
    cy.get('.post-3111 > .product-block > .caption > .meta > .infor > .name > a').click()
    cy.get('.button-variable-item-XL').click()
    cy.get('.button-variable-item-Black').click()
    cy.get('.single_add_to_cart_button').click()
}
function adicionarProdutoAoCarrinho3() {
    cy.get('.post-3073 > .product-block > .caption > .meta > .infor > .name > a').click()
    cy.get('.button-variable-item-36').click()
    cy.get('.button-variable-item-Brown').click()
    cy.get('.single_add_to_cart_button').click()
}
function adicionarProdutoAoCarrinho4() {
    cy.get('.post-3374 > .product-block > .caption > .meta > .infor > .name > a').click()
    cy.get('.button-variable-item-34').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.single_add_to_cart_button').click()
}

// Exporte a função para que ela possa ser acessada em outros arquivos
module.exports = {
    adicionarProdutoAoCarrinho1,
    adicionarProdutoAoCarrinho2,
    adicionarProdutoAoCarrinho3,
    adicionarProdutoAoCarrinho4

};
