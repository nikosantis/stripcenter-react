import React, { useState } from 'react'
import {
  RadioContainer,
  Content,
  Radio,
  Input,
  Background,
  Checked,
  Unchecked,
  Text
} from './styles'

export const RadioInput = () => {
  const [isChecked1, setIsChecked1] = useState(true)
  const [isChecked2, setIsChecked2] = useState(false)
  const [value, setValue] = useState('Local Comercial')

  const radioChange1 = e => {
    setIsChecked1(!isChecked1)
    setIsChecked2(!isChecked2)
    setValue(e.target.value)
  }

  const radioChange2 = e => {
    setIsChecked1(!isChecked1)
    setIsChecked2(!isChecked2)
    setValue(e.target.value)
  }

  return (
    <div>
      <RadioContainer valueCheck={value}>
        <Content>
          <Radio>
            <Input type='radio' name='radio1' checked={isChecked1} onChange={radioChange1} value='Local Comercial' />
            <Background>
              {
                isChecked1 ? <Checked /> : <Unchecked />
              }
            </Background>
          </Radio>
          <Text>
            Local Comercial
          </Text>
        </Content>

        <Content>
          <Radio>
            <Input type='radio' name='radio2' checked={isChecked2} onChange={radioChange2} value='Oficina' />
            <Background>
              {
                isChecked2 ? <Checked /> : <Unchecked />
              }
            </Background>
          </Radio>
          <Text>
            Oficina
          </Text>
        </Content>
      </RadioContainer>
    </div>
  )
}
