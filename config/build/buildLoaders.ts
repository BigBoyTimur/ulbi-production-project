import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const cssLoader = buildCssLoaders(isDev);

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
