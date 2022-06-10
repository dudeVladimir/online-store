import { computed, ref } from '@vue/reactivity'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useSigninForm() {
  const store = useStore()
  const router = useRouter()

  const show = ref(false)

  const { handleSubmit, isSubmitting } = useForm()

  const {
    value: name,
    errorMessage: nError,
    handleBlur: nBlur,
  } = useField(
    'name',
    yup
      .string()
      .trim()
      .required('Это поле обязательно')
      .min(3, 'Минимальное количество символов - 3')
  )

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
    await store.dispatch('auth/signin', values)
    router.push('/acc')
  })

  const passwordSec = ref('')

  return {
    pSError: computed(() => password.value !== passwordSec.value),
    show,
    email,
    eError,
    eBlur,
    password,
    pError,
    pBlur,
    onSubmit,
    name,
    nError,
    nBlur,
    isSubmitting,
    passwordSec,
  }
}
