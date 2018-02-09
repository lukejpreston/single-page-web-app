import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  panelTabs: {
    justifyContent: 'left',
    borderBottom: 'none'
  },
  tabs: {
    width: '100%',
    marginLeft: -1
  },
  tab: {
    borderRadius: 0,
    borderTop: 0
  },
  content: {
    padding: 20
  }
})

export default {
  panelTabs: () => css(styles.panelTabs),
  tabs: () => css(styles.tabs),
  tab: () => css(styles.tab),
  content: () => css(styles.content)
}
