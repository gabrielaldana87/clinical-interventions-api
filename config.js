const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';
export default {
  port: env.PORT || 8081,
  host: env.HOST || '0.0.0.0',
  clinicalTrialsURL: 'https://clinicaltrialsapi.cancer.gov/v1/interventions',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};