Dolhpin Dreams is a serious game project produced for the [SAM Foundation](http://www.stichtingsam.nl/). It is a training tool designed to help mentally challenged children with severe autism or Down's syndrome. While interning at the _Dutch Indie Games Company_, I improved the ability to interact with the virtual dolphin via touch screen controls and improved the performance of the renderer.

### Background ###

![The virtual dolphin in the middle of a looping.][1]

The SAM foundation provides dolphin therapy for children with severe mental disabilities. The children are able to develop their speech and social skills by communicating with a creature that only responds to commands given with direct eye contact. Although these sessions are massively beneficial to the patients, they are unfortunately very expensive. There is only one location in the Netherlands that provides the opportunity to interact with dolphins and the therapy itself requires the assistance of trainers, paramedics and therapeutic staff.

The foundation contacted NHTV with the idea to create a virtual environment for dolphin therapy. It would allow patients to continue their training at home, without the need for an actual dolphin to be present. The virtual dolphin would respond to the same commands and behave as naturally as possible in its environment. The user could input commands by using a touch screen.

The dolphin responded to the following commands:

* Beckon - Instructs the dolphin to come closer to the screen, which allows for additional commands.
* Go away - Lets the dolphin resume his laps around the aquarium.
* Bubbles - Instructs the dolphin to blow bubbles with his blowhole.
* Loop - Tells the dolphin to do a loop in-place.
* Roll - The dolphin rolls on his back.
* Sing - Instructs the dolphin to sing and wave his flippers.
* Wave - The dolphin waves his tail at the user.

### Involvement ###

![Debug lines show the path the dolphin takes through the aquarium.][2]

At the time of my involvement, much progress had already been made to the project. What the foundation was looking for was a bit of additional finetuning to the interaction with the dolphin. Specifically, they wanted to rework the way the player could input gestures on a touch screen and look into developing a mobile version of the training tool.

I ended up implementing a new gesture system that provided more reliable tracking, by looking at the amount of coverage of a shape instead of geometric lines from the center. This system allowed for more flexibility from the user and for additional gestures that could not be composed of geometric shapes. Additionally, I modified the animation system to make it easier for the designer to add or modify animations.

One of the other areas I looked into was the slow loading of the program on start-up. I wrote a tool to automatically compress the textures, reducing the start-up time significantly.

[1]: DD_Looping.png "{ &quot;orientation&quot;: &quot;left&quot; }"
[2]: DD_DebugLines.png "{ &quot;orientation&quot;: &quot;right&quot; }"