/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

// ref: https://github.com/jasminmif/react-interactive-paycard
import React, { useState, useRef, useCallback, useEffect } from 'react'
import CForm from './components/form'
import Card from './components/card'
import { Button, Modal } from 'react-bootstrap'

import './index.scoped.scss'
import { transCardNumber } from '../../utils'

const initialState = {
  cardNumber: '#### #### #### ####',
  cardHolder: 'FULL NAME',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
  isCardFlipped: false,
}

const MainScreen = (props) => {
  const [state, setState] = useState(initialState)
  const [currentFocusedElm, setCurrentFocusedElm] = useState(null)

  // 為了設定有綁定的信用卡，亂寫的
  const { data } = props
  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setState({
        isCardFlipped: false,
        ...data,
      })

      const target = ['cardNumber', 'cardHolder', 'cardDate', 'cardCvv']
      Object.entries(data).forEach(([name, value]) => {
        if (target.includes(name)) {
          console.log(name, ' => ', formFieldsRefObj[name])
          if (formFieldsRefObj[name].current) {
            // 將值透過 ref 直接塞給元素
            formFieldsRefObj[name].current.value = value
          }
        }
      })

      console.log(
        '%c DEBUG %cData',
        'color: #0092FA; font-weight: bold; ',
        'color: #fff; background: #0092FA; font-weight: bold; padding: 5px; border-radius: 3px'
      )
    } else {
      // 新增 走這邊
      setState(initialState)
    }
  }, [data])

  const handleSubmit = (event) => {
    props.onSubmit(event, state)
  }

  const updateStateValues = useCallback(
    (keyName, value) => {
      setState({
        ...state,
        [keyName]: value || initialState[keyName],
      })

      console.log(
        '%c DEBUG %cData => state',
        'color: #0092FA; font-weight: bold; ',
        'color: #fff; background: #0092FA; font-weight: bold; padding: 5px; border-radius: 3px',
        state
      )
    },
    [state]
  )

  // References for the Form Inputs used to focus corresponding inputs.
  let formFieldsRefObj = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
    cardCvv: useRef(),
  }

  let focusFormFieldByKey = useCallback((key) => {
    formFieldsRefObj[key].current.focus()
  })

  // This are the references for the Card DIV elements.
  let cardElementsRef = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
  }

  let onCardFormInputFocus = (_event, inputName) => {
    const refByName = cardElementsRef[inputName]
    setCurrentFocusedElm(refByName)
  }

  let onCardInputBlur = useCallback(() => {
    setCurrentFocusedElm(null)
  }, [])

  return (
    <Modal
      {...props}
      size="lg"
      className="card_container"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="wrapper">
        <CForm
          cardMonth={state.cardMonth}
          cardYear={state.cardYear}
          onUpdateState={updateStateValues}
          cardNumberRef={formFieldsRefObj.cardNumber}
          cardHolderRef={formFieldsRefObj.cardHolder}
          cardDateRef={formFieldsRefObj.cardDate}
          onCardInputFocus={onCardFormInputFocus}
          onCardInputBlur={onCardInputBlur}
        >
          <Card
            cardNumber={state.cardNumber}
            cardHolder={state.cardHolder}
            cardMonth={state.cardMonth}
            cardYear={state.cardYear}
            cardCvv={state.cardCvv}
            isCardFlipped={state.isCardFlipped}
            currentFocusedElm={currentFocusedElm}
            onCardElementClick={focusFormFieldByKey}
            cardNumberRef={cardElementsRef.cardNumber}
            cardHolderRef={cardElementsRef.cardHolder}
            cardDateRef={cardElementsRef.cardDate}
          ></Card>

          <Button onClick={handleSubmit}>提交</Button>
        </CForm>
      </div>
    </Modal>
  )
}

export default MainScreen
