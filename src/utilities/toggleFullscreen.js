
// toggle video element in and out of fullscreen.
export function toggleFullscreen(video) {
      video.requestFullscreen().catch((error) => {
        alert(
          `Error attempting to enable fullscreen mode: ${error.message} (${error.name})`
        );
      });
    }
    