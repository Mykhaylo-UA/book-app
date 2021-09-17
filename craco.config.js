const CracoLessPlugin = require('craco-less');
const {magenta} = require('@ant-design/colors');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options:{
                lessLoaderOptions:{
                    lessOptions:{
                        modifyVars: {'@primary-color': magenta[6]},
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
};