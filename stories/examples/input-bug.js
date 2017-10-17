import React from 'react'
import Downshift from '../../src'

export default class InputBug extends React.Component {
  state = {
    inputValue: '',
  }

  render() {
    return (
      <div>
        <Downshift
          onInputValueChange={data => {
            console.log(data)
            return this.setState({inputValue: data})
          }}
          inputValue={this.state.inputValue}
        >
          {({getInputProps}) => (
            <div>
              <input {...getInputProps()} />
            </div>
          )}
        </Downshift>
      </div>
    )
  }
}
