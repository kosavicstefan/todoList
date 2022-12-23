module.exports = {
    globals: {
        "ts-jest": {
            isolatedModules: true,
        },
        "transformIgnorePatterns": [
            "node_modules/(?!(@react-native|react-native|react-native-vector-icons))"
        ]
    },
};