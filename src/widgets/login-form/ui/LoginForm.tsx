import { Formik } from 'formik'
import { useNavigate } from 'react-router'
import { Input } from '@/shared/ui/input'
import { useAppDispatch, useAppSelector } from '@/app/hooks/useAppDispatch'
import { loginUser } from '@/features/auth/model/authThunk'
import * as Yup from 'yup'
import { Button } from '@/shared/ui/button'
import styles from '@/pages/auth/ui/Auth.module.scss'
import { Typography } from '@/shared/ui/typography'
import { OpenEyeIcon } from '@/shared/ui/icons/OpenEyeIcon'
import { useState } from 'react'
import { CloseEyeIcon } from '@/shared/ui/icons/CloseEyeIcon'

const LoginForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const error = useAppSelector((state) => state.auth.login.error)
  const loading = useAppSelector((state) => state.auth.login.loading)
  const [showPassword, setShowPassword] = useState(false)

  const validationSchema = Yup.object({
    email: Yup.string().email('Неверный e-mail').required('Введите e-mail'),
    password: Yup.string().required('Введите пароль'),
  })

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await dispatch(loginUser(values))
        if (loginUser.fulfilled.match(result)) navigate('/')
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
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <div
            className={`${styles.formError} ${
              error ? styles.formErrorVisible : ''
            }`}
          >
            <Typography>{error ? error : ''}</Typography>
          </div>
          <div className={styles.inputs}>
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
          </div>

          <Typography variant="text" className={styles.forgot}>
            Восстановить пароль
          </Typography>

          <Button
            type="submit"
            size="medium"
            variant="primary"
            className={styles.submit}
            disabled={isSubmitting || loading}
          >
            {loading ? 'Загрузка...' : 'Войти'}
          </Button>
        </form>
      )}
    </Formik>
  )
}

export { LoginForm }
