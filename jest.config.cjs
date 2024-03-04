// module.exports = {
//     transform: 	{
//         '^.+\\.jsx?$': 'babel-jest',
//         "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
//         "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
//         ".+\\.(css|styl|less|sass|scss)$": "jest-transform-stub"
//     },
//     moduleNameMapper:{
//  '\\.(jpg|jpeg|png|gif|webp|svg)$' : 'jest-transform-stub',
//  '\\.css$' : 'identity-obj-proxy\\'
//  "\\.(css|less|scss|sass)$": "identity-obj-proxy"



//     },
//     testEnviroment :'jsdom',
// }
// module.exports = {
//     transform: {
//         '^.+\\.jsx?$': 'babel-jest',
//         // "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js"
//     },
//     moduleNameMapper: {
//         '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub',
//         "\\.(css|less|scss|sass)$": "identity-obj-proxy"
//     },
//     testEnviroment: 'jsdom',
// }

module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      // ... otras mapeaciones de nombres de módulos
      '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub',
      '\\.css$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
  };