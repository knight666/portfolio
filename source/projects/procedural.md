Procedural Design was a course taught at _International Game Architecture and Design_ that involved the creation of a landscape and a number of geometric shapes, all generated using code instead of being authored by a visual artist.

### Landscape ###

![The landscape uses multiple types of noise to generates its peaks and valleys.][1]

The landscape is generated using Perlin noise. First, a two-dimensional grid is generated, with equal spacing between vertices. Next, each data point on a two-dimensional Perlin texture is used as the basis for the vertical offset of each vertex. The effect is a randomly-generated but varied landscape with peaks and valleys.

In the shader for the landscape, the slope is used to determine if the vertex is part of a grass valley, a rocky slope or a snowy hilltop. Two textures are combined in the shader: one for rock and another for grass. These textures are generated as well, using Worley noise as their basis, with Perlin noise for randomization. Although they are not high quality, the textures can be tiled without discernible seams.

### Spherical mapping ###

![Time for tickles!][2]

Nam et sem nec augue pellentesque feugiat. Nam aliquam arcu ac efficitur aliquam. In suscipit ligula purus, non porta elit rutrum eu. Integer in ligula eget lectus suscipit porttitor eu non eros. Aenean eget ullamcorper urna, et egestas est. Nunc a mollis dui, id bibendum justo. Ut pulvinar diam eget orci placerat pulvinar. Pellentesque nisi odio, malesuada a mollis sit amet, faucibus vitae odio. Suspendisse sit amet felis suscipit, fringilla mi tincidunt, blandit magna. Etiam aliquam sit amet dolor vitae euismod. In nec bibendum ante, eget molestie est. Mauris ipsum dolor, iaculis rhoncus scelerisque nec, fringilla sed orci. Donec id arcu tempus, mollis augue eget, euismod justo. Quisque purus dolor, efficitur quis mollis sit amet, molestie a tortor.

### Procedural animation ###

![Time for tickles!][3]

Nullam lacinia maximus nisi, ut sollicitudin elit ornare vel. Fusce tristique sapien dui, a consequat nisl aliquet vitae. In hac habitasse platea dictumst. Ut eget ultricies nulla. Maecenas auctor molestie sapien et luctus. Proin libero nunc, lobortis sed sapien et, laoreet consequat quam. Maecenas sapien quam, vulputate sit amet orci vel, fermentum luctus felis. Morbi imperdiet fringilla ante non convallis. Morbi ligula justo, commodo et nisi at, pharetra molestie ipsum. Pellentesque vel blandit tortor.

[1]: PD_Looping.png "{ "orientation": "left" }"
[2]: p2N1h.jpg "{ "orientation": "right" }"
[3]: p2N1h.jpg "{ "orientation": "left" }"