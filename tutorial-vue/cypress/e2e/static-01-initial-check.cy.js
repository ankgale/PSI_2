describe('Initial website', () => {
  it('passes', () => {
    cy.visit('https://psi-2-kdur.onrender.com/')
  })
})

describe('Formulario-persona', () => {
  it('Body and div', () => {
    cy.visit('https://psi-2-kdur.onrender.com/')
    cy.get('body')
    cy.get('div#formulario-persona')
  })
  
   it('All components', () => {
    cy.visit('https://psi-2-kdur.onrender.com/')
    cy.get('[data-cy=name]')
    cy.get('[data-cy=surname]')
    cy.get('[data-cy=email]')
    cy.get('[data-cy=add-button]')        
  })
  
})

describe('Tabla persona', () => {
  it('Table', () => {
    cy.visit('https://psi-2-kdur.onrender.com/')
    cy.get('body')
    cy.get('div#tabla-personas')
  })
  
   it('All components', () => {
    cy.visit('https://psi-2-kdur.onrender.com/')
    cy.get('div#tabla-personas')
  })
  
})
