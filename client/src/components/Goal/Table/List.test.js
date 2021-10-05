import React from 'react'
import List from './List'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'

it('try rendering function', () => {
  const { getBytestId } = render(<button label='click me' type='submit'>Submit</button>)
})

it('rendering reset function', () => {
  const resetGoals = render(<button label='reset goals'>Reset</button>)
})
