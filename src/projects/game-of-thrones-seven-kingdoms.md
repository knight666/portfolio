_Game of Thrones: Seven Kingdoms_ was an unreleased massive multiplayer online (MMO) game set in the Game of Thrones universe. The game was built in Amazon's Lumberyard engine.

As a Senior UI Developer, I implemented the user interface, from making buttons clickable to laying the groundwork for other developers to build upon. I worked closely with artists and designers to match their vision for the title.

### Data binding system ###

For _Game of Thrones: Seven Kingdoms_, I designed and built a system that separates the game logic from the user interface. We encapsulated the data needed for the UI in data binding paths that would remain stable throughout the application's lifetime. These paths ensured a healthy separation between the UI code and the rest of the game. Gameplay systems would push updates to these paths, and the UI code would listen for changes and render them. For example, a backend system would retrieve the username and write it to the path "/menu/global/player_name". A text field on the login screen would bind to the same path and render the underlying data. These bindings also worked the other way around. When the user clicks the login button, this pushes an event to the data binding system. The login system then picks up on that change and submits the form.

This separation between gameplay and UI code provided many benefits: Gameplay programmers only had to think about the flow of data to the UI, while artists could work on a new screen without waiting for support from the programmers. The data binding system did not care where the data came from, which allowed us to dump the current state of the entire UI into a JSON file. This data dump was useful for programmers debugging a difficult-to-reproduce issue and beneficial to artists. For both usecases, we played the game to a certain point and loaded the UI's state in the Lumberyard UI Editor. This workflow allowed for amazingly fast iteration on both new and existing screens.

We modified all controls in the UI framework to work with the data binding system I designed and implemented. Once we were satisfied with its stability, we shared this code with Amazon Game Studios, makers of our game engine.

### Custom controls for LyShine ###

LyShine is the custom UI framework built into the Lumberyard game engine. We used this framework to render the user interface. The framework uses an entity-component system in C++, which allows behaviors to be layered on top of entities. For Game of Thrones: Seven Kingdoms, I built a number of custom elements that were specific to our needs.

The List component renders items both horizontally and vertically. It can expand to fill the available space or use fixed widths and heights for the list of elements. We used this component to render menu items, player rewards, etc.

I also made a Circular Progress component. The team used this component for rendering one-dimensional updates, like timers. Because LyShine directly adds draw commands to the renderer, I output a custom vertex list that uses only a few textured polygons to render the control.

Finally, the Draggable component was used to allow dragging and dropping elements on the UI. When dragging, a copy of the item under the cursor was added to the canvas. Because of the component-based architecture, any element on the canvas could become draggable or droppable by simply adding the component.