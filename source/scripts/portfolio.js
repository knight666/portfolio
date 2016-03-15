window.onload = function() {
	var targets = document.getElementsByName("project-video");
	for (var i = 0; i < targets.length; ++i)
	{
		var target = targets[i];
		var parent = target.parentElement;

		var link = target.getAttribute("video");

		if (link.indexOf('yt://', 0) === 0)
		{
			target.onclick = function() {
				var video = document.createElement("iframe");
				video.class = "embed-responsive-item";
				video.src = "https://www.youtube.com/embed/" + link.substring('yt://'.length) + "?rel=0&vq=highres&autoplay=1";
				video.allowfullscreen = "";

				parent.removeChild(target);
				parent.appendChild(video);
			}
		}
		else if (link.indexOf('vimeo://', 0) === 0)
		{
			target.onclick = function() {
				var video = document.createElement("iframe");
				video.class = "embed-responsive-item";
				video.src = "http://player.vimeo.com/video/" + link.substring('vimeo://'.length);
				video.allowfullscreen = "";

				parent.removeChild(target);
				parent.appendChild(video);
			}
		}
	}
}