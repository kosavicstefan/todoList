import React from 'react';
import { render } from '@testing-library/react-native'
import FlowerList from './FlowerList';

const mockedUsedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => mockedUsedNavigate,
}));

describe('Every dog on the page', () => {

    it('show dog name if exist', () => {
        const component = render(<FlowerList />);
        const button = component.findByTestId('dogNames');
        expect(button).toBeDefined()

    })

})

