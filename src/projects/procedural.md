Procedural Design was a course taught at _International Game Architecture and Design_ that involved the creation of a landscape and a number of geometric shapes, all generated using code instead of being authored by a visual artist.

### Landscape ###

![Landscape generated using Perlin noise.][1]

The landscape is generated using Perlin noise. First, a two-dimensional grid is generated, with equal spacing between vertices. Next, each data point on a two-dimensional Perlin texture is used as the basis for the vertical offset of each vertex. The effect is a randomly-generated but varied landscape with peaks and valleys.

Normals for each vertex are determined by using the cross product on two edges of the resulting triangle. This normal is stored in each vertex and averaged with the normals of adjacent triangles. This produces a smoother lighting result, because every vertex will have a different normal, depending on the adjacent vertices.

In the shader for the landscape, the slope is used to determine if the vertex is part of a grass valley, a rocky slope or a snowy hilltop. Two textures are combined in the shader: one for rock and another for grass. These textures are generated as well, using Worley noise as their basis, with Perlin noise for randomization. Although they are not high quality, the textures can be tiled without discernible seams.

### Spherical mapping ###

![Sphere generated from a radius value.][2]

The vertices for the sphere are determined by drawing circles on a perpendicular circle, taking samples using sine and cosine. Texture coordinates are a bit trickier. The first problem is that a two-dimensional texture on a three-dimensional encounters a point where the texture must "wrap around". Earth has a similar problem: after dividing it in approximately 24 time zones, you end up with a line near New Zealand where local time between adjacent time zones differs an entire day, the so-called "date line".

We can solve the problem with the "date line" by checking whether the next texture coordinate is smaller than the current. If so, we clamp the coordinates to the end of the texture.

Another problem, also related to texturing, has to do with the north and south poles. As you get closer to the poles, the texture becomes more and more distorted. This is unavoidable when mapping a 2D plane to a 3D surface, but can be worked around by subdividing the poles in a slightly different manner.

The brick texture used on the sphere model was generated using a combination of Perlin noise and distance calculations. Just like the rock and grass textures, it can be repeated without discernable edges.

### Procedural animation ###

![Procedurally animated model][3]

One interesting element about this project that remains is the dancing figure in the center of the screen. The model is composed of several procedurally generated geometric meshes: spheres, cylinders and cones. However, the animation itself is procedural as well.

The meshes are organised in a hierarchy, where each mesh is a child of another. For example, the head mesh is a child of the neck mesh, which is a child of the body mesh. When the meshes are rotated or translated in their local space, their children move along. This relationship is the basis of the animation: when the upper leg mesh is rotated, the lower leg rotates along with it. The animation is therefore a series of sine curves, applied to rotations on specific meshes.

[1]: PD_Looping.png "{ &quot;orientation&quot;: &quot;left&quot; }"
[2]: PD_Sphere.png "{ &quot;orientation&quot;: &quot;right&quot; }"
[3]: PD_Animated.png "{ &quot;orientation&quot;: &quot;left&quot; }"