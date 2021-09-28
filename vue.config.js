const path = require('path');
module.exports = {
  // chainWebpack: config => {
  //   // If you wish to remove the standard entry point
  //   //config.entryPoints.delete('app')

  //   // then add your own
  //   config.entry('admin')
  //     .add('./src/router/index.js')
  //     .end()
  //   .entry('public')
  //     .add('./src/router/router_front.js')
  //     .end()
  //  },
  pages: {
        admin: {
          // entry for the *admin* page
          entry: 'src/router/index.js',
          // the source template
          template: 'public/index.html',
          // output as dist/index.html
          filename: 'index.html'
        },
        index:{
          // entry for the *public* page
          entry: 'src/router/router_front.js',
          // the source template
          template: 'public/index.html',
          // output as dist/index.html
          filename: 'index_front.html'
        } 
    },
    devServer: {
      historyApiFallback: {
        rewrites: [
          { from: /\/index/, to: '/index.html' },
          { from: /\/index_front/, to: '/index_front.html' }
        ]
      }
    }

}