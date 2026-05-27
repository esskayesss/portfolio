'use client'

import { usePodcastPlayer } from "@/hooks/podcast"
import { PiWaveformDuotone } from "react-icons/pi"

export const WavePlayer: React.FC<{slug: string}> = ({slug}) => {
  const {playFile} = usePodcastPlayer()
  return (
    <PiWaveformDuotone className={``} onClick={() => playFile(slug)}/>
  )
}
