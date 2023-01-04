import React from 'react'
import ColorScreen from './ColorScreen'
import { render, fireEvent } from '@testing-library/react-native'

describe('Color screen', () => {
    it('Should go to Home screen on click', () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const navigation = { navigate: () => { } }
        jest.spyOn(navigation, 'navigate')

        const page = render(<ColorScreen navigation={navigation} route />)

        const startButton = page.getByTestId('buttonStart')
        fireEvent.press(startButton)
        expect(navigation.navigate).toHaveBeenCalledWith("SignIn")
        const title = page.getByText('Start!')
        expect(title).toBeDefined()

    })
})

