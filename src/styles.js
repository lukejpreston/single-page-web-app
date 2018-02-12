import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  logo: {
    width: 'auto',
    height: 150
  },
  menuBlock: {
    marginBottom: 10
  },
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
    borderTop: 0,
    ':hover': {
      borderLeft: '1px solid #dbdbdb',
      borderRight: '1px solid #dbdbdb'
    }
  },
  content: {
    padding: 20
  }
})

export default {
  logo: () => css(styles.logo),
  menuBlock: () => css(styles.menuBlock),
  panelTabs: () => css(styles.panelTabs),
  tabs: () => css(styles.tabs),
  tab: () => css(styles.tab),
  content: () => css(styles.content)
}
