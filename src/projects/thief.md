_Thief_ is a video game title produced by [Eidos Montréal](http://www.eidosmontreal.com) and was released in February 2014 for Steam, Xbox One and PlayStation 4. _Nixxes_ was contracted to convert the title from Xbox One to Steam/Windows. As a Systems Programmer, I was responsible for adding support for mouse and keyboard input, changing the user interface to be more mouse-friendly and for fixing bugs related to UI, input and the underlying platform.

### Keyboard and mouse prompts ###

![Keyboard prompts are displayed when using mouse and keyboard.][1]

Players can play the game using either mouse and keyboard or an Xinput-compatible gamepad. When they do, the game must update all button prompts currently visible, for example the prompts in a tutorial message. Luckily, _Thief_ sported a very intuitive input system. All player interactions were grouped in what _Eidos_ called "actions", which were bound to inputs in their editor. Instead of using button prompts in their tutorial directly, they used the action names. This allowed us to translate these actions to mouse and keyboard prompts when the player is using that input method.

This system for handling game input was so intuitive to me that I started using it in my personal projects from then on. I've also written an article about the subject on my blog: [How to flip input handling on its head with action mapping](http://knight666.com/blog/action-mapping/).

### Map navigation ###

![In-game map navigation using the mouse][2]

The in-game map can be used to figure out where you are in the world and where you're supposed to be going. Navigating it with a gamepad is quite different from navigating it with a mouse. I was responsible for making the map screen as easy to navigate as possible when using a mouse.

When playing with a mouse and keyboard, most players intuitively guess how best to navigate the in-game map screen: by clicking and dragging. In _Thief_, players could use the mouse to accomplish the following in the in-game map screen:

* Navigation - By clicking and dragging with the left mouse button, players can drag the map screen from under them. Using a bit of clever projection math, the drag position remains fixed on the map screen, even when zoomed in or rotated.

* Zooming - Using the scrollwheel, players can zoom in and out of the map.

* Rotating - By clicking and dragging with the _right_ mouse button, players can rotate the map to a new orientation.

This was quite different from the gamepad navigation, where you move the map with the left stick, zoom with the left and right triggers and rotate with the right stick.

[1]: TH4_ButtonPrompts.jpg "{ &quot;orientation&quot;: &quot;left&quot; }"
[2]: TH4_Map.jpg "{ &quot;orientation&quot;: &quot;right&quot; }"