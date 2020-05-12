/** @jsx jsx */
import { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

const myTest = css`
  background-color: red;
  width: 400px;
  height: 400px;
  font-size: 10px;
`

function App(): JSX.Element {
  return (
    <Fragment>
      <div css={myTest}>Testing Emotion</div>

      {/* <div>
        <>Fragment not working</>
      </div> */}
    </Fragment>
  )
}

export default App
