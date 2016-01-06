_Lara Croft and the Temple of Osiris_ is a game made by [Crystal Dynamics](http://www.crystaldynamics.com) and was released for Xbox One, PlayStation 4 and Steam. Crystal Dynamics built the game for Xbox One, while the team at Nixxes converted it to the PlayStation 4 and Steam platforms. In my role as a systems programmer, I ensured the game worked with mouse and keyboard input, redesigned the user interface for mouse interaction and fixed bugs related to input, UI and the underlying platform.

### Four players on a single PC ###

One of the major challenges of this project was the fact that that it supports local co-op play with up to four players. Players can use either the mouse and keyboard or an Xinput-compatible gamepad to control their character. However, we also had to ensure the keyboard and mouse player could pick up an assigned gamepad at any time and continue playing that way. On top of _that_, local co-op could be enhanced with additional players over the Internet. In order to support all these use cases, we ended up completely overhauling the way local player selection works on PC in _Lara Croft and the Temple of Osiris_.

The first constraint we posed was that only the first player could switch between mouse and keyboard and gamepad input. Next, we decided that players could also be forced into a specific configuration. For example, if two gamepads are plugged in, two player configurations are possible:

* One player, using the mouse and keyboard or a gamepad.
* Two players, the first using the mouse and keyboard or a gamepad, the second using the other gamepad.
* Two players, the first using the mouse and keyboard, the second using the first gamepad.
* Three players, one using the mouse and keyboard or a gamepad, the others using a gamepad.

Because there were so many options for the player(s) behind the screen, we had to make sure the language we used in the design was as clear as possible. After a number of iterations, we settled on adding a local player selector to the party widget, which allows the main player to select between one and four players.

### Hot-swapping the context bar ###

On many of the screens in _Lara Croft and the Temple of Osiris_, button prompts are displayed when playing with a gamepad. These button prompts indicate to the user what interactions are possible and which buttons they are bound to. When playing with mouse and keyboard, the button prompts are transformed to clickable buttons automatically. This was only possible because I created a new widget, which I called the context bar.

The items on the context bar have a number of properties, including a localization identifier and an input action. The localization identifier is used to translate the text displayed by the button prompt or the clickable button. The input actions are transformed to button prompts by checking which gamepad buttons are assigned to them and by displaying an image for the button prompt. When the user clicks on an item in the context bar with the mouse, the corresponding input action is sent to underlying the menu state. This way, very little code had to be changed in order to support clickable buttons in the context bar.