


export const handleKeyPress = (e) => {
  const spaceRegex = /[\s]/;
  const letterNumsRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]+$/;
  if (spaceRegex.test(e.key) || !letterNumsRegex.test(e.key)) {
    e.preventDefault();
  }
};

export const validateEmailUADY = (email) => {
  const emailRegex = /^a\d{8}@alumnos\.uady\.mx$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  const minLength = 6;
  const validations = [
    {
      check: (pw) => pw.length >= minLength,
      message: `La contraseña debe tener al menos ${minLength} caracteres.`,
    },
    {
      check: (pw) => /[a-zA-Z]/.test(pw),
      message: "La contraseña debe contener al menos una letra.",
    },
    {
      check: (pw) => /[0-9]/.test(pw),
      message: "La contraseña debe contener al menos un número.",
    },
    {
      check: (pw) => /\W|_/.test(pw),
      message: "La contraseña debe contener al menos un carácter especial.",
    },
  ];

  const failedValidation = validations.find((v) => !v.check(password));
  return failedValidation ? failedValidation.message : "";
};

export const validateUser = (user) => {
  const spaceRegex = /[\s]/;
  const letterNumsRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]+$/;

  return !spaceRegex.test(user) && letterNumsRegex.test(user);
};