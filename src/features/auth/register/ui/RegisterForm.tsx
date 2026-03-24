import { Formik } from 'formik'
import { useNavigate } from 'react-router'
import styles from '@/pages/auth/ui/Auth.module.scss'
import { Input } from '@/shared/ui/input'
import { useAppDispatch, useAppSelector } from '@/app/hooks/useAppDispatch'
import { registerUser } from '../model/registerThunk'
import * as yup from 'yup'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'
import { CloseEyeIcon } from '@/shared/ui/icons/CloseEyeIcon'
import { OpenEyeIcon } from '@/shared/ui/icons/OpenEyeIcon'
import { useState } from 'react'
import { Checkbox } from '@/shared/ui/checkbox'

const RegisterForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const error = useAppSelector((state) => state.login.error)
  const loading = useAppSelector((state) => state.login.loading)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const validationSchema = yup.object({
    firstName: yup.string().required('Введите имя'),
    lastName: yup.string().required('Введите фамилию'),
    phone: yup
      .string()
      .matches(/^(\+7|8)[0-9]{10}$/, 'Введите корректный номер телефона')
      .required('Введите номер телефона'),
    email: yup.string().email('Неверный e-mail').required('Введите e-mail'),
    password: yup.string().required('Введите пароль'),
    confirmPassword: yup
      .string()
      .required('Подтвердите пароль')
      .oneOf([yup.ref('password')], 'Пароли не совпадают'),
    isAgree: yup.boolean().oneOf([true], 'Необходимо согласие'),
  })

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAgree: false,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await dispatch(registerUser(values))
        if (registerUser.fulfilled.match(result)) navigate('/')
        setSubmitting(false)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          {error && (
            <div className={styles.formError}>
              <Typography>{error}</Typography>
            </div>
          )}
          <div className={styles.inputs}>
            <div className={styles.input}>
              <Input
                label="Имя"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div
                className={`${styles.formError} ${
                  errors.firstName && touched.firstName
                    ? styles.formErrorVisible
                    : ''
                }`}
              >
                <Typography>
                  {touched.firstName && errors.firstName
                    ? errors.firstName
                    : ''}
                </Typography>
              </div>
            </div>

            <div className={styles.input}>
              <Input
                label="Фамилия"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div
                className={`${styles.formError} ${
                  errors.lastName && touched.lastName
                    ? styles.formErrorVisible
                    : ''
                }`}
              >
                <Typography>
                  {touched.lastName && errors.lastName ? errors.lastName : ''}
                </Typography>
              </div>
            </div>

            <div className={styles.input}>
              <Input
                label="Телефон"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div
                className={`${styles.formError} ${
                  errors.phone && touched.phone ? styles.formErrorVisible : ''
                }`}
              >
                <Typography>
                  {touched.phone && errors.phone ? errors.phone : ''}
                </Typography>
              </div>
            </div>

            <div className={styles.input}>
              <Input
                label="E-mail"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div
                className={`${styles.formError} ${
                  errors.email && touched.email ? styles.formErrorVisible : ''
                }`}
              >
                <Typography>
                  {touched.email && errors.email ? errors.email : ''}
                </Typography>
              </div>
            </div>

            <div className={styles.input}>
              <Input
                label="Пароль"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                iconRight={showPassword ? <CloseEyeIcon /> : <OpenEyeIcon />}
                onIconRightClick={() => setShowPassword((prev) => !prev)}
              />
              <div
                className={`${styles.formError} ${
                  errors.password && touched.password
                    ? styles.formErrorVisible
                    : ''
                }`}
              >
                <Typography>
                  {touched.password && errors.password ? errors.password : ''}
                </Typography>
              </div>
            </div>

            <div className={styles.input}>
              <Input
                label="Подтверждение пароля"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                iconRight={
                  showConfirmPassword ? <CloseEyeIcon /> : <OpenEyeIcon />
                }
                onIconRightClick={() => setShowConfirmPassword((prev) => !prev)}
              />

              <div
                className={`${styles.formError} ${
                  errors.confirmPassword && touched.confirmPassword
                    ? styles.formErrorVisible
                    : ''
                }`}
              >
                <Typography>
                  {touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : ''}
                </Typography>
              </div>
            </div>

            <div className={styles.input}>
              <Checkbox
                id="agree"
                name="isAgree"
                label="Согласен с Privacy policy"
                checked={values.isAgree}
                onChange={(e) => setFieldValue('isAgree', e.target.checked)}
                onBlur={handleBlur}
              />

              <div
                className={`${styles.formError} ${
                  errors.isAgree && touched.isAgree
                    ? styles.formErrorVisible
                    : ''
                }`}
              >
                <Typography>
                  {touched.isAgree && errors.isAgree ? errors.isAgree : ''}
                </Typography>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            size="medium"
            variant="primary"
            className={styles.submit}
            disabled={isSubmitting || loading}
          >
            {loading ? 'Загрузка...' : 'Зарегистрироваться'}
          </Button>
        </form>
      )}
    </Formik>
  )
}

export { RegisterForm }
