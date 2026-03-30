import { ref } from "vue"

export function useFetchJson(url) {
  const data = ref(null);
  const error = ref(false);
  const loading = ref(true);

  // fetch(url).then(async (resp) => {
  //   const dataDecoded = await resp.json();
  //   data.value = dataDecoded;
  //   loading.value = false;
  // })

  async function execute(url) {
    const resp = await fetch(url);
    const dataDecoded = await resp.json();
    data.value = dataDecoded;
    loading.value = false;
  }
  execute(url);

  return { data, error, loading }
}