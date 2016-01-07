[youtube](yt://a4iiWCaI32g)

_Lara Croft and the Temple of Osiris_ is a game made by [Crystal Dynamics](http://www.crystaldynamics.com) and was released for Xbox One, PlayStation 4 and Steam. _Crystal Dynamics_ built the game for Xbox One, while the team at _Nixxes_ converted it to the PlayStation 4 and Steam platforms. In my role as a systems programmer, I ensured the game worked with mouse and keyboard input, redesigned the user interface for mouse interaction and fixed bugs related to input, UI and the underlying platform.

### Four players on a single PC ###

One of the major challenges of this project was the fact that that it supports local co-op play with up to four players. Players can use either the mouse and keyboard or an Xinput-compatible gamepad to control their character. However, we also had to ensure the keyboard and mouse player could pick up a gamepad at any time and continue playing that way. On top of _that_, local co-op can be enhanced with additional players over the Internet. In order to support all of these use cases, we ended up completely overhauling the way local player selection works on PC in _Lara Croft and the Temple of Osiris_.

![Time for tickles!][2]

The first constraint we posed was that only the first player could switch between mouse and keyboard and gamepad input. Next, we decided that players could also be forced into a specific configuration. For example, if two gamepads are plugged in, two player configurations are possible:

* One player, using the mouse and keyboard or a gamepad.
* Two players, the first using the mouse and keyboard or a gamepad, the second using the other gamepad.
* Two players, the first using the mouse and keyboard, the second using the first gamepad.
* Three players, one using the mouse and keyboard or a gamepad, the others using a gamepad.

Because there were so many options for the player(s) behind the screen, we had to make sure the language we used in the design was as clear as possible. After a number of iterations, we settled on adding a local player selector to the party widget, which allows the main player to select between one and four players.

![Time for tickles!][1]

After first sketching out this widget on paper, I was put in charge of putting it into the game. _Lara Croft and the Temple of Osiris_ uses the Autodesk Scaleform framework to display Flash movies for every UI element on the screen, so I created a new movie for the widget and linked it to the game by writing a new widget class in C++.

### Hot-swapping the context bar ###

On many of the screens in _Lara Croft and the Temple of Osiris_, button prompts are displayed when playing with a gamepad. These button prompts indicate to the user what interactions are possible and which buttons they are bound to. When playing with mouse and keyboard, the button prompts are transformed to clickable buttons automatically. This was only possible because I created a new widget, which I called the context bar.

![Time for tickles!][2]

The items on the context bar have a number of properties, including a localization identifier and an input action. The localization identifier is used to translate the text displayed next to the button prompt or on the clickable button. The input action is transformed to a button prompt by first checking which gamepad buttons are assigned to it and then using that binding to display the corresponding image. When the user clicks on an item in the context bar with the mouse, the input action is sent to the underlying menu state. This way, very little code had to be changed in order to support clickable buttons in the context bar, because we could reuse the existing logic for the gamepad.

Adding the context bar turned out to be such a productivity booster that we reused its implementation for other _Crystal Dynamics_ titles.

### Redesigning the options screens ###

Although _Lara Croft and the Temple of Osiris_ had a perfectly functional settings screen on Xbox One, I ended up designing a whole now settings screen, specfically for PC. This is because PC users famously want to tweak many more settings for their games. They want to be able to turn on every graphical bell and whistle, because they want to show off their new rig to their friends. The existing settings screen was insufficient for the needs of these users, because it did not support mouse interaction of any kind.

By using and extending existing Scaleform classes for common UI controls like buttons, checkboxes and sliders, I was able to create a settings subscreen. These subscreens could then be filled with controls for every category of settings. This saved us a lot of time, because controls could be copied and moved between subscreens with ease.

[1]: p2N1h.jpg "{ "orientation": "left" }"
[2]: p2N1h.jpg "{ "orientation": "right" }"