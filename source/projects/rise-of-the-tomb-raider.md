_Rise of the Tomb Raider_ is the sequal to _Tomb Raider (2013)_ and was developed by [Crystal Dynamics](http://www.crystaldynamics.com) for Xbox One. Nixxes was contracted to convert the title to PC and in my role as a Systems Programmer I ensured the user interface worked well with mouse and keyboard and fixed bugs related to UI and input. I also implemented Razer Chroma effects for the title.

### Improved context bar ###

![Time for tickles!][1]

On our previous collaboration with Crystal Dynamics, I implemented a context bar widget for [Lara Croft and the Temple of Osiris](lara-croft-and-the-temple-of-osiris.html). Because _Rise of the Tomb Raider_ is built on the same codebase, I was able to bring the widget over wholesale. The widget allows for the adding of gamepad button prompts that are automatically transformed to clickable buttons when playing with mouse and keyboard.

For this project, I improved the look and feel of the widget, making it easy to integrate in existing menu screens.

### Razer Chroma effects ###

![Time for tickles!][2]

We were contracted by Razer to add lighting effects for their keyboards, mice and mousepads using their Chroma SDK. The SDK allows one to control the color and intensity of each of the keys on the keyboard, the lights on the scrollwheel and the lights on the edge of the mousepad. I was responsible for designing and implementing these effects in the game.

* Loading screen effect, where a yellow beam is scanned from left to right across the keyboard and the mouse and mousepad fade between yellow and black.

* In-game effect. While in the game, actions bound to the keyboard light up in yellow and white when pressed.

* Key bindings effect. While in the key bindings screen, the actions already bound to keys light up, while the others remain dark. When rebinding, bound keys flash red while unbound keys light up.

* Glowstick effect. While Lara has her glowstick out, the keyboard, mouse and mousepad display the glowstick color as the background color.

[1]: p2N1h.jpg "{ "orientation": "left" }"
[2]: p2N1h.jpg "{ "orientation": "right" }"