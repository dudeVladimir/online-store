import { ref } from '@vue/reactivity'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useLoginForm() {
  const store = useStore()
  const router = useRouter()

  const show = ref(false)

  const { handleSubmit, isSubmitting } = useForm()

  const {
    value: email,
    errorMessage: eError,
    handleBlur: eBlur,
  } = useField(
    'email',
    yup
      .string()
      .trim()
      .email('Введите корректный email')
      .required('Это поле обязательно')
  )

  const {
    value: password,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField(
    'password',
    yup
      .string()
      .trim()
      .min(6, 'Пароль должен содержать не менее 6 символов')
      .required('Это поле обязательно')
  )

  const onSubmit = handleSubmit(async (values) => {
    await store.dispatch('auth/login', values)
    router.push('/acc')
  })

  return {
    show,
    email,
    eError,
    eBlur,
    password,
    pError,
    pBlur,
    onSubmit,
    isSubmitting,
  }
}
