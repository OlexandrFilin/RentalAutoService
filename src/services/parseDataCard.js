const parseAddress = addressString => {
    const arrayWords = addressString.split(',');
    if (arrayWords.length === 3) {
      return {
        country: arrayWords[arrayWords.length - 1],
        city: arrayWords[arrayWords.length - 2],
        street: arrayWords[arrayWords.length - 3],
      };
    }
    return {
      country: arrayWords[arrayWords.length - 1],
      city: 'XXXXX',
      street: 'XXXXX',
    };
  };

  const limitLengthModel = (modelStr, makeStr) => {
    if (modelStr.length + makeStr.length < 19) {
      return {
        model:modelStr,
        make:makeStr,
      };
    } else if (modelStr.length < 16) {
      return {
        model:modelStr,
        make: makeStr.slice(0, 19 - modelStr.length),
      };
    } else {
      return {
        model:modelStr,
        make: '',
      };
    }
  };

  export {parseAddress,limitLengthModel}