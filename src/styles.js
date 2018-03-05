import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  logo: {
    width: 'auto',
    height: '100%'
  },
  menu: {
    zIndex: 3
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
    padding: 20,
    overflow: 'hidden'
  },
  chat: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 1
  },
  chatContainer: {
    height: 460
  },
  chatButton: {
    border: 'none',
    position: 'absolute',
    right: 0,
    bottom: 0,
    fontSize: 26,
    marginRight: 30,
    marginBottom: 10,
    color: '#fff',
    borderRadius: 90,
    backgroundColor: '#E74C3C',
    ':hover': {
      backgroundColor: '#D54C3C'
    }
  },
  'chatButton-active': {
    marginBottom: 0,
    marginRight: '31%'
  },
  chatTitan: {
    float: 'right',
    margin: 10,
    width: '30%',
    display: 'none'
  },
  'chatTitan-active': {
    display: 'block'
  }
})

export default {
  logo: () => css(styles.logo),
  menu: () => css(styles.menu),
  menuBlock: () => css(styles.menuBlock),
  panelTabs: () => css(styles.panelTabs),
  tabs: () => css(styles.tabs),
  tab: () => css(styles.tab),
  content: () => css(styles.content),
  chat: () => css(styles.chat),
  chatContainer: () => css(styles.chatContainer),
  chatButton: active => `${css(styles.chatButton)} ${css(styles[`chatButton-${active}`])}`,
  chatTitan: active => `${css(styles.chatTitan)} ${css(styles[`chatTitan-${active}`])}`
}
