import NextFederationPlugin from '@module-federation/nextjs-mf';

export default {
  webpack5: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host-app',
          // filename: 'remoteEntry.js',
          remotes: {
            app1: 'app1@http://localhost:3001/remoteEntry.js',
            // app2: 'http://localhost:3002/remoteEntry.js',
          },
        })
      );
    }

    return config;
  },
};