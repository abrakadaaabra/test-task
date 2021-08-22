module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "My Task 3 (Vue)";
                return args;
            })
    }
}
