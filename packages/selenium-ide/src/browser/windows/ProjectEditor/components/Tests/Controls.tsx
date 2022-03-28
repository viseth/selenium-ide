import { StateShape } from 'api/types'
import React, { FC } from 'react'
import PlayButton from '../Controls/PlayButton'
import RecordButton from '../Controls/RecordButton'
import StopButton from '../Controls/StopButton'
import PauseButton from '../Controls/PauseButton'

export interface TestControlsProps {
  state: StateShape
}

const TestControls: FC<TestControlsProps> = ({ state }) => {
  switch (state.status) {
    case 'idle':
      return (
        <>
          <PlayButton state={state} />
          <RecordButton />
        </>
      )
    case 'paused':
      return (
        <>
          <PlayButton state={state} />
          <RecordButton />
          <StopButton />
        </>
      )
    case 'playing':
      return (
        <>
          <PauseButton />
          <StopButton />
          <RecordButton />
        </>
      )
    case 'recording':
      return (
        <>
          <PlayButton state={state} />
          <StopButton />
        </>
      )
  }
}

export default TestControls
