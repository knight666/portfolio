_Relativity_ is a networked real-time strategy game in which time itself is a resource. It was designed and built during GameLab, a course part of _International Game Architecture and Design_. During its two year development, I was _Team Lead_, but also designed and implemented the particle system, the sound system and a number of tools. The project was never released to the public.

### Background & story ###

![Building a base near a Time Fissure.][1]

_Relativity_ takes place in the vast emptiness of space between the stars. Several factions are battling it out in vast skirmishes featuring hundreds of vessels. They are fighting over two resources: Matter and Time. While Matter is used to create new ships, Time is useful for speeding up your own units or disrupting enemy movement.

Skirmishes take place on a two-dimensional plane. Motherships are spawned at fixed locations and players rush to the nearest Time Fissure in order to collect Time as soon as possible. While Matter can be gathered from asteroids or even destroyed ships, Time can only be gathered from Fissures. Extractors must be placed on top of the Fissure in order to gather the resource and the Fissure itself cannot be moved.

Even the map itself is in fact one large pool of Time: the map visibly shows where time density is lower. Time density affects unit speed, where lower densities mean slower movement. Players can affect the map as well, using superweapons that take a large amount of Time. These weapons decrease the time density and thus slow the enemy down.

### Leading from the front ###

![A battle in progress.][2]

_Relativity_ was started by two students over a summer holiday, after an idea for a networked real-time strategy game that utilized time as a resource. Although I was not directly involved with the creation of the prototype, I saw potential in the project right away and helped them refine their pitch for the GameLab commission. Even though only one project was supposed to get past the commission, they were so impressed with the pitch that they greenlit _Relativity_ as well.

The prototype was built on a simple game framework that rendered 2D graphics using OpenGL. This framework was extended over the lifetime of the project into a custom engine that included 3D rendering with a multi-pass lighting model, networking using the WinSock library, a custom audio engine built on OpenAL and a custom-built UI. Because the team built all of the features themselves, we were intimately familiar with what the engine could and could not do.

As team lead, I was responsible for ensuring the project went along smoothly. The structure of IGAD was such that we were granted the usage of school resources (computers, teachers, etc) for one day of the week to fully devote to the project, while the rest of the week was used for classes. On every GameLab day, I would prepare a list of issues to discuss in the morning meet-up and meet with the teachers to report on the project's progress. It was my responsibility to ensure that tasks were distributed between the project members, that stalls in the pipeline were taken care of and that we kept on track to meet our milestones.

### Particle system ###

![The Particle Editor in its full glory.][3]

Besides my role as team lead, I was also responsible for a number of subsystems. Most notably, I built the particle system and the audio system. The particle system was based on emitters, either infinite or on a timeline, that spawned particles. The particles had properties at the start and at the end of their lifetime, like size, rotation, texturing, color, etc. These properties were smoothed over the lifetime of the particle, resulting in varied and interesting effects.

The particle system used a custom .ini for all of its effects. Designers could change properties in this file and reload them in the game with the single press of a button. Artists would use special materials on the models to attach emitters. The workflow wasn't perfect though, and artists soon asked for a tool to edit properties visuaully.Based on these requests, I built a Particle Editor using the Qt framework.

The Particle Editor was a visual tool for editing the properties in the .ini file. Each property was given a slider, a checkbox or a custom control and designers could change a property, save it to .ini and reload it in the game. I was continually amazed with what the artists were able to produce with a particle system with such limited properties.

[1]: Relativity_InGame.png "{ &quot;orientation&quot;: &quot;left&quot; }"
[2]: Relativity_Battle.png "{ &quot;orientation&quot;: &quot;right&quot; }"
[3]: Relativity_ParticleEditor.png "{ &quot;orientation&quot;: &quot;left&quot; }"