import React from 'react'
import ColorScreen from '../ColorScreen'
import { render, fireEvent } from '@testing-library/react-native'


// One of the best ways to fix a bug in your code is to write a failing test that exposes it. 
// Then when you fix the bug and re-run the test, if it passes it means the bug is fixed

describe('Color screen', () => {
    it('Should go to Home screen on click', () => {
        const navigation = { navigate: () => { } }
        jest.spyOn(navigation, 'navigate')

        const page = render(<ColorScreen navigation={navigation} route />)

        const startButton = page.getByTestId('buttonStart')
        fireEvent.press(startButton)
        expect(navigation.navigate).toHaveBeenCalledWith("Home")
        const title = page.getByText('Start!')

    })
})

