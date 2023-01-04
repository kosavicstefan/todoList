/* import React from 'react';
import TodoList from '../TodoList';
import { render } from '@testing-library/react-native' */

//import { LinearGradient } from 'expo-linear-gradient';
//import renderer from 'react-native-mock-render';


/* const createComponent = function (name: string) {
    return class extends React.Component {
        // overwrite the displayName, since this is a class created dynamically
        static displayName = name;
        render() {
            return React.createElement(name, this.props);
        }
    };
};
const LinearGradient = createComponent('LinearGradient'); */

//jest.mock('expo-linear-gradient', () => require('../../__mocks__/expo-linear-gradient'));

/* setTimeout(() => {
    jest.mock('expo-linear-gradient', () => 'LinearGradient');
}, 5000) */


/* jest.mock('expo-linear-gradient', () => {
    const React = require('react');
    const LinearGradient = () => <div />;
    return LinearGradient;
}); */


//jest.mock('expo-linear-gradient', () => { LinearGradient: () => null });


/* jest.mock('expo-linear-gradient', () => {
    const RealComponent = jest.requireActual('expo-linear-gradient');
    class MockLinearGradient extends React.Component {
        render() {
            return React.createElement('LinearGradient', this.props, this.props.children);
        }
    }
    return MockLinearGradient as typeof RealComponent;
});

// now you can use the LinearGradient component in your tests
it('renders correctly', () => {
    const tree = renderer.create(
        <LinearGradient
            colors={['red', 'blue']}
            start={[0, 0]}
            end={[1, 1]}
        >
            <Text>Hello World!</Text>
        </LinearGradient>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
 */


// mock the expo-linear-gradient module so that it can be used in tests
/* jest.mock('expo-linear-gradient', () => {

    (() => {

        const RealComponent = jest.requireActual('expo-linear-gradient');

    })();
    class MockLinearGradient extends React.Component<{ children: React.ReactNode }> {
        render() {
            return React.createElement('LinearGradient', this.props, this.props.children);
        }
    }
    return MockLinearGradient;
});

// now you can use the LinearGradient component in your tests
it('renders correctly', () => {
    const tree = renderer.create(
        <LinearGradient
            colors={['red', 'blue']}
            start={[0, 0]}
            end={[1, 1]}
        >
            <Text>Hello World!</Text>
        </LinearGradient>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
 */





/* // define a mock implementation of the LinearGradient component
const MockLinearGradient = ({ children }) => <>{children}</>;

// render the component using the mock implementation
const tree = renderer.create(
    <LinearGradient colors={['red', 'blue']}>
        <Text>Hello World!</Text>
    </LinearGradient>,
    {
        createNodeMock: () => {
            return {
                __esModule: true,
                default: MockLinearGradient,
            };
        },
    }
);

expect(tree).toMatchSnapshot();
 */

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
/* jest.mock('expo', () => {
    return {
        LinearGradient: () => null,
        // Add any other mocked functions or components here
    };
}); */

describe('TodoList screen', () => {
    it('Should ', () => {
        //const page = render(<TodoList />)

    })

})

