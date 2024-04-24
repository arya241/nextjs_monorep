import NextFederationPlugin from '@module-federation/nextjs-mf';

export default {
  webpack5: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'mfe1', // Replace with a unique name
          filename: 'remoteEntry.js',
          exposes: {
            './MyComponent': './components/MyComponent', // Replace with your component path
            // Expose other components or modules as needed
          }
        })
      );
    }

    return config;
  },
};