import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { List } from '@material-ui/core'
import Activities from './Activities'

const Goal = () => {
  const goals = useSelector((state) => state.goals)

  const [selecteds, setSelecteds] = useState([])

  const onSubmit = values => {
    if (values === 'null') {
      return selecteds
    } else {
      setSelecteds(values)
    }
  }

  const mutiVeryHighArray = selecteds.data?.map((item) => {
    return item.veryHigh
  })
  const veryHigh = [...new Set(mutiVeryHighArray?.flat())]

  const mutiHighArray = selecteds.data?.map((item) => {
    return item.high
  })
  const high = [...new Set(mutiHighArray?.flat())]

  const sums = [...new Set(veryHigh.concat(high))]

  const [openPopup, setOpenPopup] = useState(false)

  return (
    <div>
      <h3>Goals</h3>
      <Form
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <label>Select any goals you want</label>
            {/* <pre>{JSON.stringify(options, 0, 2)}</pre> */}
            <div>
              {goals.map(goal => (
                <label key='{sum}'>
                  <Field
                    name='data'
                    component='input'
                    type='checkbox'
                    value={goal}
                    key='{sum}'
                  />
                  {goal.name}
                  <br />
                </label>
              ))}
            </div>
            <hr />
            <div>
              <button type='submit' disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type='button'
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
              <button
                onClick={() => setOpenPopup(true)}
              >
                Popup
              </button>
            </div>
            <List>Very High contribution: {veryHigh.join(', ')}</List><br />
            <List>High contribution: {high.join(', ')}</List><br />
            <List>Sums: {sums.join(', ')}</List>
            <Activities sums={sums} openPopup={openPopup} setOpenPopup={setOpenPopup} />
          </form>
        )}
      />

    </div>
  )
}

export default Goal
