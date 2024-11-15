const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'front/src'), // '@'로 src 경로 접근
    },
  },
  paths: {
    appSrc: path.resolve(__dirname, 'front/src'), // src 경로 재설정
    appPublic: path.resolve(__dirname, 'front/public'), // public 경로 재설정
    appIndexJs: path.resolve(__dirname, 'front/src/index.tsx'), // index.js 경로 지정
    appHtml: path.resolve(__dirname, 'front/public/index.html'), // index.html 경로 지정
  },
};
