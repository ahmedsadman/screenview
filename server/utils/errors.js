class APIError extends Error {
  constructor(message, status, data) {
    super();
    this.name = 'APIError';
    this.data = data;
    this.status = status;
    this.message = message;
    this.stack = new Error().stack;
  }
}

module.exports = {
  APIError
};
