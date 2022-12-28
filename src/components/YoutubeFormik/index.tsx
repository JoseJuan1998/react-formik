import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from 'formik'
import { IYoutubeFormik } from './interface'
import { object, string } from 'yup'
import { ErrorMessage as ErrorText } from '../ErrorMessage'
import { ComponentType } from 'react'

export function YoutubeFormik() {
  const validationSchema = object({
    name: string().required('Required'),
    email: string().email('Invalid Format').required('Required'),
    channel: string().required('Required'),
    comments: string().required('Required'),
    address: string().required('Required'),
  })

  const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
      facebook: '',
      twitter: '',
    },
    phoneNumbers: [''],
  }

  const onSubmit = (values: IYoutubeFormik) => console.log(values)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field type='text' id='name' name='name' />
          <ErrorMessage name='name' className='error' component='div' />
        </div>

        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage name='email'>
            {(errorMessage: string) => (
              <div className='error'>{errorMessage}</div>
            )}
          </ErrorMessage>
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field type='text' id='channel' name='channel' />
          <ErrorMessage
            name='channel'
            component={ErrorText as ComponentType<{}>}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='comments'>Comments</label>
          <Field as='textarea' id='comments' name='comments' />
          <ErrorMessage name='comments' className='error' component='div' />
        </div>

        <div className='form-control'>
          <label htmlFor='address'>Address</label>
          <FastField name='address'>
            {(props: any) => {

              const { field, meta } = props

              const { touched, error } = meta

              return (
                <>
                  <input type='text' id='address' {...field} />
                  {touched && error && <div className='error'>{error}</div>}
                </>
              )
            }}
          </FastField>
        </div>

        <div className='form-control'>
          <label htmlFor='facebook'>Facebook</label>
          <Field type='text' id='facebook' name='social.facebook' />
        </div>

        <div className='form-control'>
          <label htmlFor='twitter'>Twitter</label>
          <Field type='text' id='twitter' name='social.twitter' />
        </div>

        <div className='form-control'>
          <label htmlFor='phoneNumbers'>Phones</label>
          <FieldArray name='phoneNumbers'>
            {(fieldArrayProps) => {
              const { form, push, remove } = fieldArrayProps
              const { values, errors } = form
              const { phoneNumbers } = values

              return (
                <>
                  {phoneNumbers.map((_phoneNumber: string, index: number) => (
                    <div key={index}>
                      <Field type='text' name={`phoneNumbers[${index}]`} />
                      {phoneNumbers.length > 1 && (
                        <button type='button' onClick={() => remove(index)}>
                          -
                        </button>
                      )}
                      <button type='button' onClick={() => push('')}>
                        +
                      </button>
                    </div>
                  ))}
                </>
              )
            }}
          </FieldArray>
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}
