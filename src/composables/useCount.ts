const count = ref(1);

export function useCount() {
  function inc() {
    count.value++;
  }
  return {
    inc,
    count,
  };
}
