export function posts(collectionApi) {
  return collectionApi.getFilteredByGlob('src/posts/**/*.md');
}
export function activities(collectionApi) {
  return collectionApi.getFilteredByGlob('src/activities/**/*.md');
}