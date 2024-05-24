export const validate = (formData) => {
  const formErrors = {};

  if (!formData.name.length === 0) {
    formErrors.name = "Required";
  }

  if (formData.name.length < 5) {
    formErrors.name = "Must have 5 or more characters";
  }

  if (formData.difficulty.length === 0) {
    formErrors.difficulty = "Required";
  }

  if (formData.season.length === 0) {
    formErrors.season = "Required";
  }

  if (formData.countries.length === 0) {
    formErrors.countries = "You have to select at least one country";
  }

  return formErrors;
};
