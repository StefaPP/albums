module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
      'jest': true,
    },
    'rules': {
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'comma-dangle': 'off',
      'linebreak-style': 'off',
      'react/destructuring-assignment': 'off',
      'import/prefer-default-export': 'off'
    },
    'globals': {
      "fetch": false
    }
  }