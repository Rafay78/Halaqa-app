const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const config = {
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-svg-transformer/react-native',
    ),
  },
  resolver: {
    // Filter out 'svg' from assetExts and add 'tflite' to assetExts
    // Add support for `.tflite` files
    assetExts: [
      ...assetExts.filter(ext => ext !== 'svg'), // Remove `svg` from assetExts
      'tflite', // Add `tflite` to assetExts
    ],
    sourceExts: [...sourceExts, 'svg'],
  },
};

module.exports = wrapWithReanimatedMetroConfig(
  mergeConfig(defaultConfig, config),
);