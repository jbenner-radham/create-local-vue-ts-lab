module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/typescript'
    ],
    rules: {
        camelcase: 'error',
        'comma-dangle': ['error', 'never'],
        'consistent-return': 'off',
        'eol-last': ['error', 'always'],
        indent: ['error', 4],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'always'],
        quotes: ['error', 'single'],
        semi: ['error', 'always']
    },
    overrides: [
        {
            files: ['**/*.vue'],
            rules: {
                indent: 'off',
                'vue/html-indent': ['error', 4],
                'vue/max-attributes-per-line': 'off',
                'vue/script-indent': [
                    'error', 4, { baseIndent: 1, switchCase: 1 }
                ]
            }
        }
    ]
}
