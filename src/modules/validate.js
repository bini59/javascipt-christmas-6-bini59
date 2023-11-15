const validate = {
  dateValidate : (date) => {
    if (isNaN(date)) {
      return false;
    }
    if (date < 1 || date > 31) {
      return false;
    }
    return true;
  }
}

export default validate;