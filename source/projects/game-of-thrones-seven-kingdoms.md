_Game of Thrones: Seven Kingdoms_ is an unreleased massively multiplayer online (MMO) game set in the Game of Thrones universe. The game is built by Bigpoint using Amazon's Lumberyard engine.

In my role as Senior UI Developer, I was responsible for implementing the user interface, from making buttons clickable to laying the groundwork for other developers to build upon. I worked closely with artists and designers in order to match their vision for the title.

### Data binding system ###

For _Game of Thrones: Seven Kingdoms_, I designed and built a system that separates the game logic from the user interface. The data for the game that needs to be represented in the UI is encapsulated in data binding paths.

The way this works is simple. First, both systems agree on a _path_ for a piece of data. Then, the UI code listens for data updates on that path, which could be a username, a button clicked event or any other type of data that can be represented as a string, a number or a list. In order to update values in the UI, the game code _never_ updates the UI directly. Instead, it writes values to these paths, which are then picked up by the UI.

Of course, the system works the other way around as well. The game can listen for updates from the UI or one part of the UI can send updates to another. I found that this high degree of separation provides many benefits: gameplay programmers only have to think about the flow of data to the UI, while artists can work on a new screen without waiting for support from the programmers.

Indeed, because the data binding system does not make judgments about where data comes from, it allows us to dump the current state of the entire UI to a JSON file. This is useful for programmers debugging a difficult-to-reproduce issue _and_ beneficial to artists. In both cases, the game can be played to a certain point, the state of the UI as-is dumped to a file and then loaded in the Lumberyard UI Editor. This allows amazingly fast iteration on both new and existing screens.

All controls in the UI framework were modified to work with the data binding system and this code was eventually shared with Amazon, the makers of the game engine.

### Custom controls for LyShine ###

LyShine is the custom UI framework built-in to the Lumberyard game engine. We used this framework to render the user interface. The framework uses an entity-component system in C++, which allows behaviors to be layered on top of entities. For _Game of Thrones: Seven Kingdoms_ , I built a number of custom elements that were specific to our needs.

The List component is able to render items both horizontally and vertically. It can expand to fill the available space or it can use fixed widths or heights for the list elements. This component was used for rendering menu items, player rewards, etc.

Another interesting one is the Circular Progress component. This component was used for rendering one-dimensional updates, like timers. Because LyShine adds draw commands to the renderer directly, I was able to output a custom vertex list that uses only a few textured polygons to render the control.

Finally, the Draggable component was used to allow dragging and dropping of elements on the UI. When dragging, a copy is made of the item under the cursor and added to the canvas. Because of the component-based architecture, this allows any element on the canvas to become draggeable or droppable by simply adding the component.