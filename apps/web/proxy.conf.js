// Redirige /api al backend durante el desarrollo.
// En Docker: API_URL=http://api:3300 — en local, usa localhost.
module.exports = {
  '/api': {
    target: process.env.API_URL || 'http://localhost:3300',
    secure: false,
    changeOrigin: true,
  },
};
