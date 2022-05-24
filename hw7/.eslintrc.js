module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        'eslint:recommended',
        // 'plugin:vue/vue3-recommended',
        'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    rules: {
        // override/add rules settings here, such as:
        'vue/no-unused-vars': 'error'
    }
}
// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": "plugin:vue/essential",
//     "parserOptions": {
//         "ecmaVersion": "latest"
//     },
//     "plugins": [
//         "vue"
//     ],
//     "rules": {
//     }
// }
