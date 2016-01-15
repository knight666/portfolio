The _FlinQ 4.0_ product was developed by [FlexPosure BV](http://www.flexposure.nl) as a security management application. I was brought in to work on and maintain the product's front-end client, fix bugs related to 3D rendering and UI and implement and maintain device drivers.

### Product description ###

![Time for tickles!][1]

_FlinQ 4.0_ was designed to interface with the client's existing security infrastructure. For example, a client may have cameras by Bosch, door sensors by Philips and card readers by Honeywell. These products come with their own software or even hardware to manage them. This makes it difficult for security to, for example, link camera events to door sensor events.

The _FlinQ 4.0_ product combines these security solutions into a single server-client architecture. It collects data from the different products using their documented APIs, processes them into a single timeline and sends them as events to its client applications. These clients render the events on a timeline and show them in a 3D representation of the physical location. Users could pull up events from the timeline and see them in 3D space. For example, a camera event would show up in their timeline, the user clicks on the event and the application shows them the event on the camera. The application camera would first focus on the building, then on the floor in the building and finally the security camera itself. After selecting the security camera, users could play back the footage or rotate the camera using PTZ (Pan, Tilt, Zoom) controls.

Users were very enthusiastic about the product, because it was the first of its kind to show these types of security events in a 3D representation of the location. Competing products would only show events on a 2D building layout, making large locations much more difficult to manage.

### Device drivers ###

![Time for tickles!][2]

Every product supported by _FlinQ 4.0_ required its own device drivers. These drivers were written in C# and interfaced with the devices using their documented APIs. After processing the messages, the drivers would output standardized messages of their own, for processing by the server.

Because the drivers were separated from the server logic, it was very easy to add support for new devices. The application had drivers for devices ranging from cameras, card access readers to fire alarms. I personally wrote a driver for the _ProRAE Guardian_ device, which responds to alarms from gas leaks and other hazardous materials.

### Client-side location editor ###

![Time for tickles!][3]

The client application would render the location in 3D, but it didn't work off of an existing plan. The floor plans first had to be converted to a 3D presentation by using the location editor. Users with the appropriate rights could move buildings, move floors in buildings and edit the floor plan by drawing and moving walls on floors.

My work focused mainly on the floor editor, where I added support for moving walls around, snapping wall points to a grid and making the interface more user-friendly.

The floor plans were synchronized between clients by the server, which meant that changes made on one client would instantly show up on other clients.

### Adding UI elements ###

![Time for tickles!][4]

Nam et sem nec augue pellentesque feugiat. Nam aliquam arcu ac efficitur aliquam. In suscipit ligula purus, non porta elit rutrum eu. Integer in ligula eget lectus suscipit porttitor eu non eros. Aenean eget ullamcorper urna, et egestas est. Nunc a mollis dui, id bibendum justo. Ut pulvinar diam eget orci placerat pulvinar. Pellentesque nisi odio, malesuada a mollis sit amet, faucibus vitae odio. Suspendisse sit amet felis suscipit, fringilla mi tincidunt, blandit magna. Etiam aliquam sit amet dolor vitae euismod. In nec bibendum ante, eget molestie est. Mauris ipsum dolor, iaculis rhoncus scelerisque nec, fringilla sed orci. Donec id arcu tempus, mollis augue eget, euismod justo. Quisque purus dolor, efficitur quis mollis sit amet, molestie a tortor.

### Test-driven design ###

Nullam lacinia maximus nisi, ut sollicitudin elit ornare vel. Fusce tristique sapien dui, a consequat nisl aliquet vitae. In hac habitasse platea dictumst. Ut eget ultricies nulla. Maecenas auctor molestie sapien et luctus. Proin libero nunc, lobortis sed sapien et, laoreet consequat quam. Maecenas sapien quam, vulputate sit amet orci vel, fermentum luctus felis. Morbi imperdiet fringilla ante non convallis. Morbi ligula justo, commodo et nisi at, pharetra molestie ipsum. Pellentesque vel blandit tortor.

[1]: p2N1h.jpg "{ "orientation": "left" }"
[2]: p2N1h.jpg "{ "orientation": "right" }"
[3]: p2N1h.jpg "{ "orientation": "left" }"
[4]: p2N1h.jpg "{ "orientation": "right" }"