const VueLoaderPlugin=require('vue-loader/lib/plugin');
const path=require('path'); // 현재 경로 가져옴
module.exports={
    mode: 'development',
    devtool:'eval',
    resolve: {

    },
    entry:{
        app:`./main.js`,
    },
    module:{
        rules:[{
            // vue파일은 webpack이 아니라 vue-loader가 자바스크립트로 전환해서
            // 합쳐져서 output으로 나올 수 있도록 바꿔줌
            test:/\.vue$/,
            loader:'vue-loader', 
            
        }]
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    output:{
        filename:`[name].js`,
        path:path.join(__dirname,'dist'),
    },

};