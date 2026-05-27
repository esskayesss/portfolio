'use client'

import { useEffect, useRef, useState } from "react"
import { PlayArrow } from "../icons/play"
import { PauseOutline } from "../icons/pause"
import { usePodcastPlayer } from "@/hooks/podcast"

const toHMS = (time: number): string => {
  const zeroPad = (num: number, places: number = 2) => String(num).padStart(places, '0')

  const hrs = Math.floor(time / 3600)
  time %= 3600
  const mins = Math.floor(time / 60)
  time %= 60
  time = Math.floor(time)

  if (hrs > 0)
    return `${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(time)}`

  return `${zeroPad(mins)}:${zeroPad(time)}`
}

export const PodcastPlayer: React.FC = () => {
  const {fileName: blogName, elapsedTime, totalTime, isPlaying, displayPlayer, togglePlayer, togglePlayPause, seekTo} = usePodcastPlayer()
  const [numRectangles, setNumRectangles] = useState<number>(60);
  const [marqueeBlogName, setMarqueeBlogName] = useState<boolean>(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const blogContainerRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const filled = Math.floor((elapsedTime / totalTime) * numRectangles);
  
  const updateNumRectangles = () => {
    if (progressRef.current) {
      const containerWidth = progressRef.current.offsetWidth;
      const calculatedRectangles = Math.floor(containerWidth / 12);
      const clampedRectangles = Math.max(10, Math.min(100, calculatedRectangles));
      setNumRectangles(clampedRectangles);
    }

    if(blogRef.current && blogContainerRef.current) {
      if (blogContainerRef.current.clientWidth < blogRef.current.clientWidth)
        setMarqueeBlogName(true)
      else
        setMarqueeBlogName(false)
    }
  };

  useEffect(() => {
    updateNumRectangles(); // Set initial value
    window.addEventListener('resize', updateNumRectangles);
    return () => window.removeEventListener('resize', updateNumRectangles);
  }, []);

  useEffect(() => {
    console.log(`[page]changed: ${displayPlayer}`)
  }, [displayPlayer])

  return (
    <>
      <div className={`${displayPlayer ? 'null' : 'hidden'} print:hidden fixed bottom-0 h-fit bg-bg w-screen left-0 flex justify-between border-t border-ghost items-center z-50`}>
        <div className="w-full max-w-6xl mx-auto justify-between flex flex-col gap-2 relative p-6 ">
          <div 
            className="absolute bottom-full right-0 bg-bg p-1 px-4 border-t border-x border-ghost cursor-pointer"
            onClick={togglePlayer}
          >
            CLOSE X 
          </div>
          <div className="progress-stubs flex justify-between gap-2 w-full" ref={progressRef}>
            {Array.from({length: numRectangles}).map((_, idx) => {
              return (
                <div 
                  className={`ring-1 ring-green-fg ring-inset w-3 h-5 ${idx <= filled ? 'bg-green-fg': null} ${idx == filled ? 'animate-pulse':null} cursor-pointer`}
                  key={idx} onClick={() => seekTo(idx/numRectangles * totalTime)} />
              )
            })}
          </div>
          <div className="flex flex-col-reverse justify-between w-full items-center md:gap-8 md:flex-row">
            <div className="flex gap-2 whitespace-nowrap flex-row-reverse md:flex-row items-center justify-between md:justify-start w-full">
              <button className="bg-bg border border-fg flex items-center px-2" onClick={togglePlayPause}>
                <span>{isPlaying? 'PAUSE' : 'PLAY '}</span> 
                {isPlaying ? <PauseOutline /> : <PlayArrow />}
              </button>
              <span> {toHMS(elapsedTime)} / {toHMS(totalTime)} </span>
            </div>
            <div 
              className="min-w-fit md:text-right overflow-hidden w-full md:w-fit"
              ref={blogContainerRef}
            >
              <div className={`${marqueeBlogName?"scroll":null} w-full md:w-fit relative whitespace-nowrap`} ref={blogRef}>
                <span className="block w-full md:w-fit">{blogName}</span>
                <span className="pl-12 absolute left-110 whitespace-nowrap">
                  <span>{blogName}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
