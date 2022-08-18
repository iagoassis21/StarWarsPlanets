import React from 'react';
import { waitFor, render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from "@testing-library/user-event";
import testData from '../../cypress/mocks/testData'

describe('I am your test', () => {

  it('', async ()=>{
    render(<App />);

    const planetSearch =  screen.getByRole('textbox', {  name: /busque por um planeta:/i})
    userEvent.type(planetSearch, 'tato')
    expect(planetSearch).toHaveProperty('value', 'tato')
  })

  it('', ()=>{
    render(<App />);

    const filterBtn = screen.getByRole('button', {  name: /filtrar/i});
    const deleteBtn = screen.getByRole('button', {  name: /deletar filtros/i})
    userEvent.click(filterBtn)
    userEvent.click(deleteBtn)
  })

  it('', async ()=>{
    render(<App />);

    const numberFilter = screen.getByTestId('value-filter')
    const filterBtn = screen.getByRole('button', {  name: /filtrar/i});
    const deleteBtn = screen.getByRole('button', {  name: /deletar filtros/i})
    userEvent.type(numberFilter, '10000')
    userEvent.click(filterBtn)
    expect( await screen.findAllByTestId('planet-name')).toHaveLength(7)
    const deleteSingleBtn = screen.getByRole('button', {  name: /x/i})
    userEvent.click(deleteSingleBtn)
    userEvent.selectOptions(screen.getByRole('combobox', {  name: /operador/i}), ['menor que'])
    userEvent.type(numberFilter, '200000')
    userEvent.click(filterBtn);
    expect( await screen.findAllByTestId('planet-name')).toHaveLength(1)
    userEvent.click(deleteBtn)
    userEvent.selectOptions(screen.getByRole('combobox', {  name: /operador/i}), ['igual a'])
    userEvent.type(numberFilter, '1000')
    userEvent.click(filterBtn);
    expect( await screen.findAllByTestId('planet-name')).toHaveLength(1)
  })

  it('', ()=>{
    render(<App />);

    const columnFilter = screen.getByRole('combobox', {  name: /coluna/i})
    userEvent.selectOptions(screen.getByRole('combobox', {  name: /coluna/i}), ['diameter'])
    expect(columnFilter).toHaveProperty('value', 'diameter')

  })

  it('', ()=>{
    render(<App />);

    const column = screen.getByTestId('column-filter');
    const columns = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const foundColumnFilter = Array.from(column.children).map((child) => {
      expect(child).toHaveProperty('nodeName', 'OPTION');
      return child.innerHTML;
    });
    expect(foundColumnFilter).toEqual(expect.arrayContaining(columns));
  })

  it('', async ()=>{
    render(<App />);

    const ascBtn = screen.getByRole('radio', {  name: /asc/i});
    const dscBtn = screen.getByRole('radio', {  name: /dsc/i});
    const orderBtn = screen.getByRole('button', {  name: /ordenar/i});
    userEvent.click(ascBtn)
    userEvent.click(orderBtn)
    const ascPlanetNames = await screen.findAllByTestId('planet-name')
    expect(ascPlanetNames[2]).toHaveTextContent(/bespin/i)
    userEvent.click(dscBtn)
    userEvent.click(orderBtn)
    const dscPlanetNames = await screen.findAllByTestId('planet-name')
    expect(dscPlanetNames[5]).toHaveTextContent(/bespin/i)
  })

  it('', async ()=>{
    render(<App />);

    const orderColumnFilter = screen.getByRole('combobox', {  name: /ordenar/i})
    userEvent.selectOptions(screen.getByRole('combobox', {  name: /ordenar/i}), ['diameter'])
    expect(orderColumnFilter).toHaveProperty('value', 'diameter');
  })

});
