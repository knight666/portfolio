Game of Thrones: Seven Kingdoms is an unreleased massively multiplayer online (MMO) game set in the Game of Thrones universe. The game is built by Bigpoint using Amazon's Lumberyard engine.

In my role as Senior UI Developer, I was responsible for implementing the user interface, from making buttons clickable to laying the groundwork for other developers to build upon. I worked closely with artists and designers in order to match their vision for the title.

### Custom controls for LyShine ###

LyShine is the custom UI framework built-in to the Lumberyard game engine. We used this framework to render our user interface. The framework uses an entity-component system in C++, which behaviors can be layered on top of empty entities. For our game, I built a number of custom elements that were specific to our needs.

The List component is able to render items both horizontally and vertically. It can expand to fill the available space or it can use fixed widths or heights for the list elements. This component was used for rendering menu items, player rewards, etc.

Another interesting one is the Circular Progress component. This component was used for rendering one-dimensional updates, like timers. Because LyShine adds draw commands to the renderer directly, I was able to output a custom vertex list that uses only a few textured polygons to render the control.

Finally, the Draggable component was used to allow dragging and dropping of elements on the UI. When dragging, a copy is made of the item under the cursor and added to the canvas. Because of the component-based architecture, this allows any element on the canvas to become draggeable or droppable by simply adding the component.

### Lua scripting groundwork ###

### Data binding system ###

Nam in blandit enim, non tristique nibh. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam quis gravida massa. Proin ac tempus lectus. Curabitur a rhoncus turpis. Integer a molestie leo. Quisque et dui mollis, interdum ex id, posuere augue.

### In-game cheat interface ###

Nam et sem nec augue pellentesque feugiat. Nam aliquam arcu ac efficitur aliquam. In suscipit ligula purus, non porta elit rutrum eu. Integer in ligula eget lectus suscipit porttitor eu non eros. Aenean eget ullamcorper urna, et egestas est. Nunc a mollis dui, id bibendum justo. Ut pulvinar diam eget orci placerat pulvinar. Pellentesque nisi odio, malesuada a mollis sit amet, faucibus vitae odio. Suspendisse sit amet felis suscipit, fringilla mi tincidunt, blandit magna. Etiam aliquam sit amet dolor vitae euismod. In nec bibendum ante, eget molestie est. Mauris ipsum dolor, iaculis rhoncus scelerisque nec, fringilla sed orci. Donec id arcu tempus, mollis augue eget, euismod justo. Quisque purus dolor, efficitur quis mollis sit amet, molestie a tortor.