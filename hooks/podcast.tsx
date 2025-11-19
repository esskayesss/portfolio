import { getBlogBySlug } from "@/lib/blogs"
import { useEffect, useState } from "react"

export const usePodcastPlayer = () => {
  const [currentSlug, setSlug] = useState<string>('')
  const [displayPlayer, setDisplayPlayer] = useState<boolean>(false)
  const [elapsedTime, setElapsedTime] = useState<number>(0)
  const [totalTime, setTotalTime] = useState<number>(340)
  const [fileName, setFileName] = useState<string>('empty')
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const resolution = 100

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsed) => {
          const newElapsed = prevElapsed + resolution/1000;
          return newElapsed >= totalTime ? 0 : newElapsed;
        });
      }, resolution);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, totalTime, resolution]);
  
  useEffect(() => {
    if (!currentSlug) return
    console.log(`updating slug: ${currentSlug}`)
    setElapsedTime(0)
    const updateMeta = async (slug: string) => {
      const post = await getBlogBySlug(slug)
      if (!post){ 
        console.error('slug couldn\'t be resolved')
        setFileName(slug)
        setDisplayPlayer(true)
        return
      }

      const name = post.metadata.title
      setFileName(name)
      setDisplayPlayer(true)
    }

    updateMeta(currentSlug)
  }, [currentSlug])

  useEffect(() => {
    console.log(`[hook]changed: ${displayPlayer}`)
  }, [displayPlayer])

  // TODO: DEBOUNCE THIS
  const seekTo = (time: number): void => {
    setElapsedTime(time)
  }
  
  const togglePlayer = () => {
    setDisplayPlayer(!displayPlayer)
  }

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playFile = (name: string) => {
    setSlug(name)
  }

  return {
    fileName,
    elapsedTime,
    totalTime,
    isPlaying,
    displayPlayer,
    playFile,
    togglePlayer,
    togglePlayPause,
    seekTo,
  }
}
