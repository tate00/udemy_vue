import { watchEffect } from 'vue'
// refHistoryを使って、履歴の最大数を制限するComposable
// 複数のComposableを組み合わせる例
import { refHistory } from './refHistory'
export function refLimitedHistory(source, capacity) {
  const { history, undo } = refHistory(source)
  watchEffect(() => {
    if (history.value.length > capacity) {
      history.value.shift()
    }
  })
  return {
    history,
    undo
  }
}
