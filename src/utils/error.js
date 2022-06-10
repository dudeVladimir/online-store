const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'Пользователь с таким eMail не найден',
  INVALID_PASSWORD: 'Неверный пароль',
  USER_DISABLED: 'Учетная запись отключена',
  EMAIL_EXISTS: 'Адрес электронной почты уже используется другим аккаунтом',
  TOO_MANY_ATTEMPTS_TRY_LATER:
    'Мы заблокировали все запросы с этого устройства из-за необычной активности. Попробуйте позже.',
}

export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : code
}