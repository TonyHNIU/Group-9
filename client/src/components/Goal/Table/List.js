import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { Form, Field, useField } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { Table, List } from '@material-ui/core';

const Goal = () => {
  const goals = useSelector((state) => state.goals)

  const [selecteds,setSelecteds] = useState([]);

  const onSubmit = async values => {
    if (values === 'null') {
      return selecteds;
    } else {
      setSelecteds(values);
    }
};

const mutiVeryHighArray = selecteds.data?.map((item) => {
  return item.veryHigh;
});
const veryHigh = [...new mutiVeryHighArray.flat()];

const mutiHighArray = selecteds.data?.map((item) => {
  return item.high;
});
const high = [...new mutiHighArray.flat()];

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
            {/*<pre>{JSON.stringify(options, 0, 2)}</pre>*/}
            <div>
              {goals.map(goal => (
                <label key='{sum}'>
                  <Field
                    name="data"
                    component="input"
                    type="checkbox"
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
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
              <button
              onClick={""}
              >
                Popup
              </button>
            </div>
            <List>Very High contribution: {veryHigh.join(', ')}</List><br />
            <List>High contribution: {high.join(', ')}</List><br />
            <List>Sums:</List>
          </form>
        )}
      />

    </div>
  )
}

export default Goal
