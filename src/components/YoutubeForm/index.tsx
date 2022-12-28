import { useFormik } from 'formik'
import { IYoutubeForm } from './interface'
import { object, string } from 'yup'

export function YoutubeForm() {
  const validationSchema = object({
    name: string().required('Required'),
    email: string().email('Invalid Format').required('Required'),
    channel: string().required('Required'),
  })

  const initialValues = {
    name: '',
    email: '',
    channel: '',
  }

  const onSubmit = (values: IYoutubeForm) => console.log(values)

  // const validate = (values: IYoutubeForm) => {
  //   let errors: IYoutubeForm = {} as IYoutubeForm

  //   if(!values.name) errors.name = 'Required'

  //   if(!values.email) errors.email = 'Required'

  //   if(!/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) errors.email = 'Invalid format'

  //   if(!values.channel) errors.channel = 'Required'

  //   return errors
  // }

  const {
    // handleChange,
    handleSubmit,
    // handleBlur,
    getFieldProps,
    // values,
    errors,
    touched,
  } = useFormik({
    initialValues,
    onSubmit,
    // validate
    validationSchema,
  })

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          // name='name'
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.name}
          {...getFieldProps('name')}
        />
        {errors.name && touched.name && (
          <div className='error'>{errors.name}</div>
        )}
      </div>

      <div className='form-control'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          // name='email'
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.email}
          {...getFieldProps('email')}
        />
        {errors.email && touched.email && (
          <div className='error'>{errors.email}</div>
        )}
      </div>

      <div className='form-control'>
        <label htmlFor='channel'>Channel</label>
        <input
          type='text'
          id='channel'
          // name='channel'
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.channel}
          {...getFieldProps('channel')}
        />
        {errors.channel && touched.channel && (
          <div className='error'>{errors.channel}</div>
        )}
      </div>

      <button type='submit'>Submit</button>
    </form>
  )
}
