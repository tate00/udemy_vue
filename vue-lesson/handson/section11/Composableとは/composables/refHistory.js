import { ref, watchEffect } from 'vue'

// refの履歴を管理するComposable
export function refHistory(source) {
  const history = ref([])
  watchEffect(() => {
    history.value.push(source.value)
  })
  function undo() {
    if (history.value.length === 1) return
    history.value.pop()
    source.value = history.value.pop()
  }
  return {
    history,
    undo
  }
}
