describe('To Do App Test', () => {
  beforeEach(() => {
    cy.visit('./ToDo/index.html')
  })

  /*
    Given: Input창에 텍스트를 입력했을 때,
    When: 추가 버튼을 누르면,
    Then: Input창 밑에 입력한 텍스트가 추가된다.
  */
  it('Can add the todo list', () => {
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

  /*
    Given: ToDo에 데이터를 입력하고,
    When:  새로고침을 하면,
    Then: 입력했던 데이터가 화면에 나타난다.
  */
  it('Visit ToDo App with localStorage data', () => {
    cy.get('input')
      .first()
      .focus()
      .type('local storage test')

    cy.get('button').click()

    cy.get('input')
      .first()
      .focus()
      .type('local storage test2')

    cy.get('button').click()

    cy.reload()

    cy.get('.todo__list > li').should($lis => {
      expect($lis).to.have.length(2)
      expect($lis.eq(0)).to.contain('local storage test')
      expect($lis.eq(1)).to.contain('local storage test2')
    })
  })

  /*
    Given: ToDo에 데이터를 입력하지 않았을 때,
    When:  새로고침을 하면,
    Then: 하단에 어떤 데이터도 나타나지 않는다.
  */
  it('Visit ToDo App with no localStorage data', () => {
    cy.reload()
    cy.get('.todo__list > li').should('not.exist')
  })

  /*
    Given: ToDo에 할 일 목록이 추가되어 있을 때,
    When: X 버튼을 누르면,
    Then: 해당하는 할 일 목록이 삭제된다.
  */
  it('delete a li tag of ToDos', () => {
    cy.get('input')
      .first()
      .focus()
      .type('delete test')
    cy.get('button').click()

    cy.get('.todo__list > li')[0]
      .get('button')
      .click()

    cy.get('.todo__list > li').should('not.exist')
  })
})
