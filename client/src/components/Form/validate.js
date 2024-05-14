export const validate = (formData) => {
    const formErrors = {};
  
    if (!formData.name.trim()) {
      formErrors.name = "Required";
    }
  
    if (!formData.difficulty) {
      formErrors.difficulty = "Required";
    }
  
    if (!formData.season) {
      formErrors.season = "Required";
    }
  
    if (formData.countries.length === 0) {
      formErrors.countries = "You have to select at least one country";
    }
  
    return formErrors;
  };