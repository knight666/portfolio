_Rise of the Tomb Raider_ is the sequal to _Tomb Raider (2013)_ and was developed by [Crystal Dynamics](http://www.crystaldynamics.com) for Xbox One, while Nixxes was contracted to convert the title to PC. In my role as a Systems Programmer I ensured the user interface worked well with mouse and keyboard and fixed bugs related to UI and input. I also implemented Razer Chroma effects for the title.

### Menus ###

![Time for tickles!][1]

My main body of work for this project constituted of getting the numerous menus to work with mouse and keyboard input. Luckily, most of the hard work had already been done for [the previous project](lara-croft-and-the-temple-of-osiris.html) built with this engine, but there were a lot more menu screens this time around.

Besides the usual main menu and in-game screens, _Rise of the Tomb Raider_ also sports an "Expeditions" mode, where users can combine collectible cards into challenges. Getting these menus to work with mouse and keyboard proved to be a real challenge, because selecting elements out of order with the mouse often brought underlying issues to the surface.

On top of that, a lot of the menu screens had been tilted with a 3D effect, causing problems with mouse picking. This bug had been slumbering since the previous _Tomb Raider_ title and only surfaced because of the increased usage of the effect. Luckily, with the help of a coworker, I was able to debug the problem and create a general solution to fix the issue once and for all.

### Improved context bar ###

![Time for tickles!][2]

On our previous collaboration with Crystal Dynamics, I implemented a context bar widget for [Lara Croft and the Temple of Osiris](lara-croft-and-the-temple-of-osiris.html). Because _Rise of the Tomb Raider_ is built on the same codebase, I was able to bring the widget over wholesale. The widget allows for the adding of gamepad button prompts that are automatically transformed to clickable buttons when playing with mouse and keyboard.

For this project, I improved the look and feel of the widget, making it easier to integrate in existing menu screens. The widget was used to add mouse interaction to all menu screens in _Rise of the Tomb Raider_.

### Razer Chroma effects ###

![Time for tickles!][3]

We were contracted by Razer to add lighting effects for their Chroma-enabled keyboards, mice and mousepads by using their Chroma SDK. The SDK allows one to control the color and intensity of each of the keys on supported keyboards, the lights on a mouse's scrollwheel and the lights on the edge of a supported mousepad. I was responsible for designing and implementing these effects in the game.

* **Loading screen** - A yellow beam is scanned from left to right across the keyboard and the mouse and mousepad fade between yellow and black.

* **In-game** - While in the game, actions bound to the keyboard light up in yellow and white when pressed.

* **Key bindings** - While in the key bindings screen, the actions already bound to keys light up, while unbound keys remain dark. When rebinding, bound keys flash red while unbound keys light up.

* **Glowstick** - While Lara has her glowstick out, the keyboard, mouse and mousepad display the glowstick color as the background color.

[1]: p2N1h.jpg "{ "orientation": "left" }"
[2]: p2N1h.jpg "{ "orientation": "right" }"
[3]: p2N1h.jpg "{ "orientation": "left" }"