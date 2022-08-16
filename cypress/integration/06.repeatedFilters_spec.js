/// <reference types="cypress" />

import mockFetch from '../mocks/fetch';
import { COLUMN_FILTER } from '../utils/dataTestIds';

const FILTERED_ROWS_COUNT = 8;

describe('6 - Não utilize filtros repetidos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        cy.stub(win, 'fetch').callsFake(mockFetch);
      },
    });
  });

  it('Filtre por população e o remove das opções', () => {
    const allColumnsOptions = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

    cy.getByTestId(COLUMN_FILTER).find('option').should((options) => {
      expect(options).to.have.length(allColumnsOptions.length);

      allColumnsOptions.forEach((option) => {
        expect(options).to.contain(option);
      });
    });

    cy.addFilter('population', 'maior que', '8000');

    cy.get('table tr').should('have.length', FILTERED_ROWS_COUNT);

    cy.getByTestId(COLUMN_FILTER).find('option').should((options) => {
      expect(options).to.have.length(allColumnsOptions.length - 1);

      expect(options).to.not.contain('population');
    });
  });
});
