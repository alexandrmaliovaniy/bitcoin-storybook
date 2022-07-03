const path = require("path");
require("dotenv").config({path: __dirname + "/../../../.env"});
module.exports = {
    "stories": [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-storysource",
        "@storybook/addon-postcss",
        "@storybook/addon-a11y",
        "storybook-addon-designs",
        "@storybook/addon-console"
    ],
    "framework": "@storybook/react",
    "typescript": {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    "webpackFinal": async (config, {configType}) => {
        const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test && rule.test.test('.svg'));
        fileLoaderRule.exclude = /\.svg$/;

        config.module.rules.unshift({
            test: /\.svg$/,
            enforce: 'pre',
            loader: require.resolve('@svgr/webpack'),
        });
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', {
                loader: 'sass-loader',
                options: {
                    additionalData: (content, loaderContext) => {
                        const {resourcePath} = loaderContext;
                        const match = process.env.ALIAS_GLOBAL_SCSS_PATH.match(/@styles\/(?<path>.*.scss)/);
                        if (!match || !match[1]) throw Error("Invalid ALIAS_GLOBAL_SCSS_PATH env param");
                        const path = match[1];
                        if (resourcePath.indexOf(path) !== -1) return content;
                        return `@import \"@styles/${path}\";` + content;
                    }
                }
            }],
            include: path.resolve(__dirname, '../../'),
        });
        config.resolve.alias = {
            ...config.resolve.alias,
            "@ui": path.resolve(__dirname, "../../ui/"),
            "@pages": path.resolve(__dirname, "../../pages/"),
            "@hooks": path.resolve(__dirname, "../../hooks/"),
            "@images": path.resolve(__dirname, "../../../public/images/"),
            "@components": path.resolve(__dirname, "../../components/"),
            "@utils": path.resolve(__dirname, "../../utils/"),
            "@translations": path.resolve(__dirname, "../../translations/"),
            "@layouts": path.resolve(__dirname, "../../layouts/"),
            "@themes": path.resolve(__dirname, "../../themes/"),
            "@styles": path.resolve(__dirname, "../../styles/"),
        }

        return config;
    },
};
