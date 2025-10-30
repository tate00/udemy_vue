import { watchEffect, toValue } from 'vue'
import { useRefHistory } from './refHistory'
export function useRefLimitedHistory(source, capacity) {
  const { history, undo } = useRefHistory(source)
  watchEffect(() => {
    // toValueでリアクティブにも非リアクティブにも対応
    if (history.value.length > toValue(capacity)) {
      history.value.shift()
    }
  })
  return {
    history,
    undo
  }
}
