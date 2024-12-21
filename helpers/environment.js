/*
1. Title       : Environments
2. Description : Handle all environment-related configurations
3. Author      : md atik hasan
4. Date        : 19/12/24
*/

// Module scaffolding
const environments = {};

// Staging environment (default)
environments.staging = {
    port: process.env.PORT || 3000, // Allow dynamic port assignment for staging
    envName: 'staging',
};

// Production environment
environments.production = {
    port: process.env.PORT || 5000, // Allow dynamic port assignment for production
    envName: 'production',
};

// Determine the current environment from the NODE_ENV variable
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' && process.env.NODE_ENV in environments
        ? process.env.NODE_ENV
        : 'staging';

// Select the environment configuration to export
const environmentToExport = environments[currentEnvironment];

// Export the environment object
module.exports = environmentToExport;
