1. install it <https://code.visualstudio.com>
2. install these extentions
    * [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    * [HTML CSS Class Completion](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
    * [NPM Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
    * [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
    * [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
    * [VSCode Icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)
3. open your user settings `Ctrl + ,` and add this to your settings
```json
{
    "files.autoSave": "onFocusChange",
    "eslint.autoFixOnSave": true,
    "workbench.iconTheme": "vscode-icons"
}
```