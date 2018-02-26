# VSCode

VSCode is an excelent IDE and text editor. It works on all Windows, Mac and Linux.

Install it here <https://code.visualstudio.com>

This is how I have my vscode setup if you wish to do JavaScript and node development

[ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

press `Ctrl + ,` to open settings and then you want to search for `"eslint.autoFixOnSave"` and set that to true (why this isn't default I have no idea)

[HTML CSS Class Completion](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)

[NPM Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)

[Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

[Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

[VSCode Icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)

I also change `"files.autoSave": "onFocusChange"`

# Cheat Sheet

A list of shortcuts you will use a lot

`Ctrl + p` search for files, it uses fuzzy matching

`Ctrl + Shift + P` type what you are looing for

That's it, you will learn others as you go but you don't need to learn anymore

# Alternatives

Some good alternatives you can use

* [Intellij](https://www.jetbrains.com/idea/)
* [Atom](https://atom.io/)
* [Sublime](https://www.sublimetext.com/)
* [Vim](http://www.vim.org/)
* [Emacs](https://www.gnu.org/software/emacs/)

# Java Development

If you are thinking

> I use Intellij for doing Java code and it also does JavaScript so I will just use that

then you are wrong because VSCode is a superior Java editor, just install these libraries

[Language Support for Java(TM) by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java)

[Spring Boot Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-spring-boot)

if you are using [lombok](https://projectlombok.org/) then add this to your setting after downloading the jar file

`"java.jdt.ls.vmargs": "-javaagent:/usr/local/lib/lombok.jar -Xbootclasspath/a:/usr/local/lib/lombok.jar -noverify -Xmx1G -XX:+UseG1GC -XX:+UseStringDeduplication"`

replace `/usr/local/lib/lombok.jar` with whereever you save your jar

I am still on the hunt for a decent Java formatter but clang works
