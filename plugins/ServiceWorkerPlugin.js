const WorkboxPlugin = require('workbox-webpack-plugin')

class ServiceWorkerPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync('GetLargestBundleSizePlugin', (compilation, cb) => {
      const largestBundleSize = Math.max(
        ...Object.values(compilation.assets).map(asset => asset.size())
      )
      const largestBundle = Object.keys(compilation.assets).find(
        assetName => compilation.assets[assetName].size() === largestBundleSize
      )

      console.log('\x1b[33m', `The largest bundle is ${largestBundle} with size: ${largestBundleSize} bytes`)

      new WorkboxPlugin.GenerateSW({
        ...this.options,
        maximumFileSizeToCacheInBytes: largestBundleSize,
      }).apply(compiler);
      
      cb()
    })
  }
}

module.exports = ServiceWorkerPlugin