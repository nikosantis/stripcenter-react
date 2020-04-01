import React, { useState, useEffect } from 'react'
import {
  Field,
  Control,
  Input,
  Label,
  LabelPreRadio,
  RadioField,
  TextArea
} from './styles'
import { RadioInput } from '../Reusables/RadioInput'
import { SubmitButton } from '../Reusables/Buttons'
import { useInputValue } from '../../hooks/useInputValue'

export const ContactForm = () => {
  const [isValid, setIsValid] = useState(false)
  const [isShowValidName, setIsShowValidName] = useState(false)
  const [isShowValidEmail, setIsShowValidEmail] = useState(false)
  const [isShowValidPhone, setIsShowValidPhone] = useState(false)
  const name = useInputValue('')
  const company = useInputValue('')
  const email = useInputValue('')
  const phone = useInputValue('')
  const comments = useInputValue('')

  const nameRegex = name.value.length > 3
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
  const phoneRegex = /(^[0-9]{8,9})$/.test(phone.value)

  const handleSubmit = e => {
    e.preventDefault()
    if (isValid) {
      console.log({
        name: name.value,
        company: company.value,
        phone: phone.value,
        email: email.value,
        comments: comments.value
      })
      setIsShowValidName(false)
      setIsShowValidPhone(false)
      setIsShowValidEmail(false)
    } else {
      !nameRegex && setIsShowValidName(true)
      !phoneRegex && setIsShowValidPhone(true)
      !emailRegex && setIsShowValidEmail(true)
    }
  }

  useEffect(() => {
    if (emailRegex && phoneRegex) {
      setIsValid(true)
    }
  }, [email, phone])

  useEffect(() => {
    if (nameRegex) {
      setIsShowValidName(false)
    }
    if (emailRegex) {
      setIsShowValidEmail(false)
    }
    if (phoneRegex) {
      setIsShowValidPhone(false)
    }
  }, [nameRegex, phoneRegex, emailRegex])

  return (
    <form disabled={!isValid} onSubmit={handleSubmit}>
      <Field className='field is-horizontal'>
        <div className='field-body'>
          <div className='field'>
            <Control className='control'>
              <Input className='input' type='text' {...name} />
              <Label className='label'>Nombre</Label>
            </Control>
            {isShowValidName ? <p className='help is-danger'>El nombre es requerido</p> : ''}
          </div>

          <div className='field'>
            <Control className='control'>
              <Input className='input' type='text' {...company} />
              <Label className='label'>Empresa</Label>
            </Control>
          </div>
        </div>
      </Field>

      <Field className='field is-horizontal'>
        <div className='field-body'>
          <div className='field'>
            <Control className='control'>
              <Input className='input' type='tel' {...phone} />
              <Label className='label'>Teléfono</Label>
            </Control>
            {isShowValidPhone ? <p className='help is-danger'>Número inválido, ej:987766432</p> : ''}
          </div>

          <div className='field'>
            <Control className='control'>
              <Input className='input' type='text' {...email} />
              <Label className='label'>Email</Label>
            </Control>
            {isShowValidEmail ? <p className='help is-danger'>Email inválido, ej: nombre@mail.com</p> : ''}
          </div>
        </div>
      </Field>

      <RadioField className='field is-horizontal'>
        <LabelPreRadio className='label has-text-centered-mobile'>¿Qué buscas?</LabelPreRadio>

        <RadioInput />
      </RadioField>

      <Field className='field'>
        <Control className='control'>
          <TextArea className='textarea has-fixed-size' rows='1' {...comments} />
          <Label className='label'>Comentarios</Label>
        </Control>
      </Field>

      <Field className='field'>
        <Control className='control has-text-centered-mobile'>
          <SubmitButton>
            Cotizar
          </SubmitButton>
        </Control>
      </Field>
    </form>
  )
}
