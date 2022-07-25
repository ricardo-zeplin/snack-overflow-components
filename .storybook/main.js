module.exports = {
  stories: ["../src/stories/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
    "storybook-zeplin/register"
  ],
  framework: "@storybook/react"
};
