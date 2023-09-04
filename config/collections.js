module.exports = {
  posts: function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/posts/**/*.md');
  },
  activities: function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/activities/**/*.md');
  }
}