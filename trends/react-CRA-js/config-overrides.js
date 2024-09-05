module.exports = function override(config, env) {
  config.module.rules.forEach((rule) => {
    if (rule.oneOf) {
      rule.oneOf.forEach((one) => {
        if (one.loader && one.loader.includes("babel-loader")) {
          one.options.cacheDirectory = "./webpack/babel/.babel-cache"; // 캐시 경로 변경
        }
      });
    }
  });
  return config;
};
