_Lara Croft and the Temple of Osiris_ is a video game title made by [Crystal Dynamics](http://www.crystaldynamics.com) and was released in December 2014 for Xbox One, PlayStation 4 and Steam. It is the sequel to the critically acclaimed _Lara Croft and the Guardian of Light_ title, released in 2010. [_Nixxes_](../projects-by-employer.html#nixxes) was contracted to convert the game to the PlayStation 4 and Steam/Windows platforms. In my role as a systems programmer, I ensured the game was playable with mouse and keyboard, redesigned the user interface for mouse interaction and fixed bugs related to input, UI and the underlying platform.

### Four players on a single PC ###

One of the major challenges of this project was the fact that that it supports both local and online co-op play with up to four players. Players can use either the mouse and keyboard or an Xinput-compatible gamepad to control their character. However, we also had to ensure the keyboard and mouse player could pick up a gamepad at any time and continue playing that way. On top of _that_, local co-op can be enhanced with additional players over the Internet. In order to support all of these use cases, we ended up completely overhauling the way local player selection works on PC in _Lara Croft and the Temple of Osiris_.

![Time for tickles!][2]

The first constraint we posed was that only the first player could switch between mouse and keyboard and gamepad input. Next, we decided that players could also be forced into a specific configuration. For example, if two gamepads are plugged in, two player configurations are possible:

* One player, using the mouse and keyboard or a gamepad.
* Two players, the first using the mouse and keyboard or a gamepad, the second using the other gamepad.
* Two players, the first using the mouse and keyboard, the second using the first gamepad.
* Three players, one using the mouse and keyboard or a gamepad, the others using a gamepad.

Because there were so many options for the player(s) behind the screen, we had to make sure the ability to select the amount of players was as clearly communicated as possible. After a number of iterations, we settled on adding a local player selector to the party widget, which allows the main player to select between one and four players.

![Time for tickles!][1]

After first sketching out this widget on paper, I was put in charge of putting it into the game. _Lara Croft and the Temple of Osiris_ uses the [Autodesk Scaleform](../projects-by-technology.html#scaleform) framework to display Flash movies for every UI element on the screen, so I created a new movie for the widget and linked it to the game by writing a new widget class in C++.

### Hot-swapping the context bar ###

On many of the screens in _Lara Croft and the Temple of Osiris_, button prompts are displayed when playing with a gamepad. These button prompts indicate to the user what interactions are possible and which buttons they are bound to. When playing with mouse and keyboard, the button prompts are transformed to clickable buttons automatically. This was only possible because I created a new widget, which I called the context bar.

![Time for tickles!][2]

The items on the context bar have a number of properties, including a localization identifier and an input action. The localization identifier is used to translate the text displayed next to the button prompt or becomes part of the clickable button. The input action is transformed to a button prompt by first checking which gamepad buttons are assigned to it and then using that binding to display the corresponding image. When the user clicks on an item in the context bar with the mouse, the input action is sent to the underlying menu state. This way, very little code had to be changed in order to support clickable buttons in the context bar, because we could reuse the existing logic for the gamepad.

Adding the context bar turned out to be such a productivity booster that we reused its implementation for other _Crystal Dynamics_ titles.

### Redesigning the options screens ###

![Time for tickles!][1]

Although _Lara Croft and the Temple of Osiris_ had a perfectly functional settings screen on Xbox One, I ended up designing a whole new settings screen, specfically for PC. This is because PC users famously want to tweak many more settings on their games. They want to be able to turn on every graphical bell and whistle in order to show off their new rig to their friends, while they also want to ensure their games run smoothly on their laptop. This wide range of use-cases necessitates the inclusion of many more graphical and gameplay settings on the PC version of the game. The existing settings screen was insufficient for the needs of these users, because it did not support any kind of mouse interaction.

By using and extending existing Scaleform classes for common UI controls like buttons, checkboxes and sliders, I was able to create a settings subscreen that could hold a flexible number of settings. This saved us a lot of time, because options could be moved between subscreens with ease.

### Chatting during the match ###

![Time for tickles!][2]

Another option unique to the PC version of the game is the ability to type messages to other players when playing online. Even though the back-end functionality for being able to send text messages over a network was already present, the front-end hadn't yet been designed. I was tasked with coming up with a suitable design for the widget, which need to be unintrusive, yet immediately present itself with a single key press.

![Time for tickles!][1]

What I ended up designing was a transparent control in the top-right corner, ever present. Its textfield would fill up with messages from other players, while the keyboard and mouse player could press "Enter" and start typing their own message straight away. As soon as the control is activated, its background becomes opaque and an input text field appears at the bottom. This signifies a change in functionality for the control and invites the user to start typing their own message.

### Voice chat widget ###

![Time for tickles!][2]

On the PlayStation 4 version of the game, I was tasked with displaying the state of voice chat in the game. Specifically, which players were talking right now and if their microphone was being muted. This is very important information to players in online matches, because rude players can ruin an otherwise perfect match. This is why players had to be able to bring up the widget at any time, even during loading screens. Any of the players in the game could press the right stick on their DualShock 4 controller to bring up the menu and it would dissappear automatically after a few seconds.

[1]: p2N1h.jpg "{ "orientation": "left" }"
[2]: p2N1h.jpg "{ "orientation": "right" }"