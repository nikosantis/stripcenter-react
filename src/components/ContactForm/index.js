import React from 'react'
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
  const name = useInputValue('')
  const company = useInputValue('')
  const phone = useInputValue('')
  const email = useInputValue('')
  const comments = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log({
      name: name.value,
      company: company.value,
      phone: phone.vlue,
      email: email.value,
      comments: comments.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Field className='field is-horizontal'>
        <div className='field-body'>
          <div className='field'>
            <Control className='control'>
              <Input className='input' type='text' {...name} />
              <Label className='label'>Nombre</Label>
            </Control>
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
          </div>

          <div className='field'>
            <Control className='control'>
              <Input className='input' type='text' {...email} />
              <Label className='label'>Email</Label>
            </Control>
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
