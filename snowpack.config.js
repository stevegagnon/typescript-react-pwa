const scripts = {
  "mount:public": "mount public --to /",
  "mount:app": "mount app --to /app",
  "run:tsc": "tsc --noEmit",
  "run:tsc::watch": "$1 --watch",
};

module.exports = {
  scripts,
  plugins: [
    "@snowpack/plugin-babel",
  ],
  devOptions: {},
  installOptions: {
    installTypes: true,
  },
  alias: {
    "@components": "./app/components",
    "@providers": "./app/providers"
  }
};
