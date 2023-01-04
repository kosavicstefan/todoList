import React from 'react'
import HomeScreen from './HomeScreen'
import { render } from '@testing-library/react-native'

describe('Home screen', () => {
    it('Should go to Details screen on click', () => {
        const page = render(<HomeScreen navigation route />)
        const title = page.getByText('Dog album')
        expect(title).toBeDefined()
    })
})

