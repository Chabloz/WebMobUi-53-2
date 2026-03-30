import { ref, watch } from "vue"

export function useJsonStorage(key, val) {
  const valRef = ref(val);

  watch(valRef, () => {
    const jsonVal = JSON.stringify(valRef.value);
    localStorage.setItem(key, jsonVal);
  })

  return {val: valRef}
}