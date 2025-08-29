class GetLargestBundleSizePlugin {
  constructor(buildOptions) {
    this.buildOptions = buildOptions
  }
  
  getLargestBundleSize(assets) {
    return Math.max(...Object.values(assets).map(asset => asset.size()))
  }
  
  getLargestBundleName({ assets, largestBundleSize }) {
    return Object.keys(assets).find(assetName => assets[assetName].size() === largestBundleSize)
  }
  
  apply(compiler) {
    compiler.hooks.emit.tapAsync('GetLargestBundleSizePlugin', ({ assets }, cb) => {
      const largestBundleSize = this.getLargestBundleSize(assets)
      const largestBundleName = this.getLargestBundleName({ assets, largestBundleSize })
      this.buildOptions.largestBundleSize = largestBundleSize
      
      console.log('\x1b[33m', `The largest bundle is ${largestBundleSize} with size: ${largestBundleName} bytes`)
      
      cb()
    })
  }
}

module.exports = GetLargestBundleSizePlugin;