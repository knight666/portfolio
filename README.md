## Commands

* `grunt` - Build site from input.
* `grunt content` - Build thumbnails for screenshots.

## Resizing

    magick "D:\Projects\Portfolio\media\screenshots\DXMD_WeaponsBar.jpg" -set option:filter:blur 0.8 -filter Lagrange -strip -resize 320 -interlace plane -quality 80 "D:\Projects\Portfolio\media\screenshots\Thumbnails\DXMD_WeaponsBar.jpg"