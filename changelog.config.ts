export default {
  commits: {
    exclude: [
      '^chore: release',
      '^chore\\(deps\\):',
    ],
  },
  contributors: {
    exclude: ['release workflow', 'github-actions[bot]'],
  },
}
