const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
             //Aqui van los loaders
             {
                 //test: que tipo de archivo quiero reconocer
                 //use: que loader se va a cargar del archivo
                 test: /\.m?.js$/,
                 exclude: /(node_modules|bower_components)/,
                 use: {
                   loader: 'babel-loader',
                   options: {
                     presets: ['@babel/preset-env']
                   }
                 },
             },
             {
                 //test: que tipo de archivo quiero reconocer
                 //use: que loader se va a cargar del archivo
                 test: /\.css$/,
                 use: [
                      MiniCssExtractPlugin.loader,
                      "css-loader"
                 ],
             }
        ]
    },
    plugins: [
        //Aqui van los plugins
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ]

}
