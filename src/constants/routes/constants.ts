export const authenticatedRoutesModel = {
  dashboard: {
    index: '/',
  },
  profile: {
    index: '/profile',
    changePassword: '/profile/change-password',
  },
  formik: {
    field: '/formik/field',
    fieldArray: '/formik/field-array',
  },
};

export const nonAuthenticatedRoutesModel = {
  authorization: {
    index: '/sign-in',
  },
  registration: {
    index: '/sign-up',
  },
  forgotPassword: '/forgot-password',
  utility: {
    notFound: '/not-found',
  },
};
