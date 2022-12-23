/*import React from 'react'
import TodoList from '../TodoList';
import { render } from '@testing-library/react-native'
import LinearGradient from 'expo-linear-gradient';
import * as SQLite from 'expo-sqlite';

jest.mock('expo-linear-gradient', () => 'LinearGradient');

jest.mock('expo-sqlite', () => {
    return {
        openDatabase: jest.fn()

    };
});
jest.mock('typeorm/browser', () => {
    return {
        DataSource: jest.fn(),
        DataSourceOptions: jest.fn()
    };
});

describe('TodoList screen', () => {
    it('Should check if input form and delete button exists', () => {
        const page = render(<TodoList />)
        const title = page.getByText('X')
    })

}) */

