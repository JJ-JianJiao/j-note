const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output:{
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist"),
    },
    module:{
        rules:[
            {
                test:/\.m?js$/,
                exclude:/(node_modules)/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    devServer:{
        static:{
            directory:path.join(__dirname,'dist'),
        },
        compress:true,
        port:9000,
    },
};