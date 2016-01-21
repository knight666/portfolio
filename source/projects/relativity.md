_Relativity_ is a networked real-time strategy game in which time itself is a resource. It was designed and built during GameLab, a course part of _International Game Architecture and Design_. During its two year development, I was _Team Lead_, but also designed and implemented the particle system, the sound system and a number of tools. The project was never released to the public.

### Background & story ###

![Building a base near a Time Fissure.][1]

_Relativity_ takes place in the vast emptiness of space between the stars. Several factions are battling it out in vast skirmishes featuring hundreds of vessels. They are fighting over two resources: Matter and Time. While Matter is used to create new ships, Time is useful for speeding up your own units or disrupting enemy movement.

Skirmishes take place on a two-dimensional plane. Motherships are spawned at fixed locations and players rush to the nearest Time Fissure in order to collect Time as soon as possible. While Matter can be gathered from asteroids or even destroyed ships, Time can only be gathered from Fissures. Extractors must be placed on top of the Fissure in order to gather the resource and the Fissure itself cannot be moved.

Even the map itself is in fact one large pool of Time: the map visibly shows where time density is lower. Time density affects unit speed, where lower densities mean slower movement. Players can affect the map as well, using superweapons that take a large amount of Time. These weapons decrease the time density and thus slow the enemy down.

### Leading from the front ###

![Time for tickles!][2]

_Relativity_ was started by two students over a summer holiday, after an idea for a networked real-time strategy game that utilized time as a resource. Although I was not directly involved with the creation of the prototype, I saw potential in the project right away and helped them refine their pitch for the GameLab commission. Even though only one project was supposed to get past the commission, they were so impressed with the pitch that they greenlit _Relativity_ as well.

The prototype was built on a simple game framework that rendered 2D graphics using OpenGL. This framework was extended over the lifetime of the project into a custom engine that included 3D rendering with a multi-pass lighting model, networking using the WinSock library, a custom audio engine built on OpenAL and a custom-built UI. Because the team built all of the features themselves, we were intimately familiar with what the engine was capable of.

As _Team Lead_, I was responsible for ensuring the project went along smoothly. The structure of IGAD was such that we were granted the usage of school resources (computers, teachers, etc) for one day of the week to fully devote to the project, while the rest of the week was used for classes. On every GameLab day, I would prepare a list of issues to discuss in the morning meet-up and meet with the teachers to report on the project's progress. It was my responsibility to ensure that tasks were distributed between the project members, that stalls in the pipeline were taken care of and that we kept on track to meet our milestones.

### Particle system ###

![Time for tickles!][3]

Nam et sem nec augue pellentesque feugiat. Nam aliquam arcu ac efficitur aliquam. In suscipit ligula purus, non porta elit rutrum eu. Integer in ligula eget lectus suscipit porttitor eu non eros. Aenean eget ullamcorper urna, et egestas est. Nunc a mollis dui, id bibendum justo. Ut pulvinar diam eget orci placerat pulvinar. Pellentesque nisi odio, malesuada a mollis sit amet, faucibus vitae odio. Suspendisse sit amet felis suscipit, fringilla mi tincidunt, blandit magna. Etiam aliquam sit amet dolor vitae euismod. In nec bibendum ante, eget molestie est. Mauris ipsum dolor, iaculis rhoncus scelerisque nec, fringilla sed orci. Donec id arcu tempus, mollis augue eget, euismod justo. Quisque purus dolor, efficitur quis mollis sit amet, molestie a tortor.

### Lorum ipsum ###

Nullam lacinia maximus nisi, ut sollicitudin elit ornare vel. Fusce tristique sapien dui, a consequat nisl aliquet vitae. In hac habitasse platea dictumst. Ut eget ultricies nulla. Maecenas auctor molestie sapien et luctus. Proin libero nunc, lobortis sed sapien et, laoreet consequat quam. Maecenas sapien quam, vulputate sit amet orci vel, fermentum luctus felis. Morbi imperdiet fringilla ante non convallis. Morbi ligula justo, commodo et nisi at, pharetra molestie ipsum. Pellentesque vel blandit tortor.

[1]: Relativity_InGame.png "{ "orientation": "left" }"
[2]: p2N1h.jpg "{ "orientation": "right" }"
[3]: p2N1h.jpg "{ "orientation": "left" }"