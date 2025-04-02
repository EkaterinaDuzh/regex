export default class Validator {
    static validateUsername(nickname) {
      return /^[a-z][\w-]+[a-z]$/i.test(nickname) && !/\d{4,}/.test(nickname);
    }
  }