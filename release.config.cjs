const config = {
    branches: ['feature/add-semantic-release', 'main'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      "@semantic-release/npm",
      ["@semantic-release/git", {
        "assets": ["dist/*.js", "dist/*.js.map"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }],
      '@semantic-release/github'
    ]
  };
  
  module.exports = config;
