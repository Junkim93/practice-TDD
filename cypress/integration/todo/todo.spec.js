describe('To Do App Test', () => {
  // # Scenario1
  it('Can add the todo list', () => {
    cy.visit('./ToDo/index.html')
    cy.get('input')
      .first()
      .focus()
      .type('todo test')

    cy.get('button').click()

    cy.get('.todo__list > li').should($lis => {
      expect($lis).to.have.length(1)
      expect($lis.eq(0)).to.contain('todo test')
    })
  })
})
