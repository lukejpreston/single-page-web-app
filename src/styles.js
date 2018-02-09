import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  panelTabs: {
    justifyContent: 'left',
    borderBottom: 'none'
  },
  contentTabs: {
    width: '100%',
    marginLeft: -1
  },
  contentTab: {
    borderRadius: 0,
    borderTop: 0
  }
})

export default {
  panelTabs: () => css(styles.panelTabs),
  contentTabs: () => css(styles.contentTabs),
  contentTab: () => css(styles.contentTab)
}
