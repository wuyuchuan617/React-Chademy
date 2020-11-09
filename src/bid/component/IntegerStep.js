import React, { useState, useEffect } from 'react'
import { Slider, InputNumber, Row, Col } from 'antd'

class IntegerStep extends React.Component {
  state = {
    inputValue: 1,
  }

  onChange = (value) => {
    this.setState({
      inputValue: value,
    })
  }

  render() {
    const { inputValue } = this.state
    return (
      <Row>
        <Col span={1000}>
          <Slider
            min={1}
            max={10000}
            onChange={this.onChange}
            trackStyle={{
              backgroundColor: '#C77334',
            }}
            handleStyle={{
              borderColor: '#C77334',
              height: '14px',
              width: '14px',
              marginLeft: '-7px',
              marginTop: '-4.5px',
              backgroundColor: '#C77334',
            }}
            style={{ margin: '20px 0px', width: '170px' }}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>

        <Col span={1000}>
          <InputNumber
            min={1}
            max={10000}
            style={{ margin: '20px 20px', width: '100px', textAlign: 'center' }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    )
  }
}

class DecimalStep extends React.Component {
  state = {
    inputValue: 0,
  }

  onChange = (value) => {
    if (isNaN(value)) {
      return
    }
    this.setState({
      inputValue: value,
    })
  }

  render() {
    const { inputValue } = this.state
    return (
      <Row style={{ margin: 'auto' }}>
        <Col span={12}>
          <Slider
            min={0}
            max={1}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
            step={0.01}
          />
        </Col>
        <Col span={4} style={{ margin: 'auto' }}>
          <InputNumber
            min={0}
            max={1}
            style={{ margin: '0 16px' }}
            step={0.01}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    )
  }
}

export { IntegerStep, DecimalStep }
