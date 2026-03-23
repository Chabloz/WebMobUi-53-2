import { ref } from 'vue';

export function useHashRoute(routes) {
  const currentPage = ref('home');

  // TODO

  return { currentPage };
}