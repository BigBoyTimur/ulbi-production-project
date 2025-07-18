import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.scss'),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                    },
                },

            },
            'sass-loader',
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: [ '@svgr/webpack' ],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    };

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        fileLoader,
        svgLoader,
        typeScriptLoader,
        cssLoader,
    ];
}
