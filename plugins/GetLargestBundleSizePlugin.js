class GetLargestBundleSizePlugin {
  constructor(buildOptions) {
    this.buildOptions = buildOptions
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync('GetLargestBundleSizePlugin', (compilation, cb) => {
      const largestBundleSize = Math.max(
        ...Object.values(compilation.assets).map(asset => asset.size())
      )
      const largestBundle = Object.keys(compilation.assets).find(
        assetName => compilation.assets[assetName].size() === largestBundleSize
      )
      this.buildOptions.largestBundleSize = largestBundleSize;
      
      console.log('\x1b[33m', `The largest bundle is ${largestBundle} with size: ${largestBundleSize} bytes`)
      
      cb()
    })
  }
}

module.exports = GetLargestBundleSizePlugin;