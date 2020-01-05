const path = require('path');
const customChunkIdPlugin = require('webpack-custom-chunk-id-plugin');

module.exports = {
  mode: 'development',
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  plugins: [
    new customChunkIdPlugin({
      //// Chunk count starts with 10 now, default is 0
      // startingCount: 10,
      //// Chunk files will be generated to configs folder in outputPath
      // prepend: "configs/",
      //// Chunk files will be appended with .custom in output
      // append: ".custom",
      //// Entry modules will be ignored from customizing chunk id logic
      entryModules: false,
      //// Non Entry modules will be considered for customizing chunk id logic
      nonEntryModules: true,
      //// Vendor modules i.e, related modules will be considered for customizing chunk id logic
      vendorModules: true,
      //// Hashed value will be considered while customizing chunk id's.
      //// Hashing will be done based on chunk's resource path or chunk's resource name or chunk name or counter
      hash: true,
      //// Hash length will be considered upto 12 charectors now, default is 8
      hashLength: 12,
    }),
  ],
};
