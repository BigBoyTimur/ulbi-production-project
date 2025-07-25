import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        resolve: buildResolvers(options), 
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
