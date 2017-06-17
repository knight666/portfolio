_Deus Ex: Mankind Divided_ is a video game title made by [Eidos Montréal](https://www.deusex.com/game/dx-md?id=54e649c83c8a5e4a27c5bea5) and was released for PlayStation 4, Xbox One and Steam in August 2016. It follows the story of Adam Jensen, in a future in which augmented humans have become outcasts and are segregated from the rest of the population. The game is an action stealth adventure and is the sequel to the critically acclaimed _Deus Ex: Human Revolution_. I worked on the Steam version as a Systems Programmer, where I ensured the game was playable with mouse and keyboard just as well as with a controller.

### Weapons bar ###

![Weapons bar in action.][1]

One of the main features I worked on for the Steam version of the game was a weapons bar. This element on the HUD can be used by players to quickly switch between weapons and gadgets during gameplay. Adding it to the game took quite a bit of work. We did the design, but Eidos provided us with the artistic support. The bar touched quite a few low-level input and UI systems, which required close cooperation with Eidos to figure out how best to add it.

In the end, I am very satisified with the result. I am confident that this element improves the experience for players playing with mouse and keyboard.

### Keybindings screen ###

![Rebinding keys since 2013.][2]

A staple of any Nixxes conversion is the additional options in the settings screen. One screen that is unique to the PC version is the keybindings screen, which is where users are able to bind actions in the game to different inputs on the mouse or keyboard.

Because the proprietary NxApp technology at Nixxes works with scan codes instead of virtual keys, most users will not have to touch this screen. For example, the standard "WASD" input scheme for first person shooters will be converted to the corresponding layout on non-U.S. English keyboard layouts. However, some players have their own preferences, either personal or due to disabilities.

What I've done for this project is to solve the problem of rebinding keys at the NxApp level. This technology is used for every Nixxes conversion to PC, so this will make conversions on future projects much easier.

### Weapon wheel ###

### Map screen ###

[1]: DXMD_WeaponsBar.jpg "{ "orientation": "left" }"
[2]: DXMD_Keybindings.jpg "{ "orientation": "right" }"