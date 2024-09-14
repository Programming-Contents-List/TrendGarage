const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');  // 추가: CSS 파일 간 모듈 불러오기
const postcssNesting = require('postcss-nesting');  // 추가: 중첩된 CSS 규칙 지원

try {
  if (tailwindcss && autoprefixer && postcssImport && postcssNesting) {
    console.log("PostCSS 플러그인 로드 완료");
  } else {
    throw new Error("PostCSS 플러그인 중 일부가 로드되지 않았습니다.");
  }
} catch (error) {
  console.error(error.message);
}

module.exports = {
  plugins: [
    postcssImport,  // @import 사용 가능
    tailwindcss,
    autoprefixer,
    postcssNesting  // @apply와 같은 중첩 규칙 사용 가능
  ],
};
