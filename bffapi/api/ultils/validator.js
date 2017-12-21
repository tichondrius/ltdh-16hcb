'use strict';
var _ = require('lodash');
var moment = require('moment');


class Validator {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.params = {};
    this.errors = [];
  }

  _getValue(paramName) {
    return this.params[paramName] = _.get(this.req.params, paramName)
      || _.get(this.req.body, paramName)
      || _.get(this.req.query, paramName);
    this.params[paramName] = this.req.params[paramName];
  }

  required(paramName) {
    const value = this._getValue(paramName);
    if (_.isNil(value) || (_.isEmpty(value) && !_.isNumber(value))) {
      this.errors.push(`Param ${paramName} is required`);
    }
    return this;
  }

  validStringLength(paramName, minlengh = 0, maxlength = Number.POSITIVE_INFINITY) {
    const value = this._getValue(paramName);
    if (!value) return this;
    if (typeof value !== 'string') {
      this.errors.push(`Param ${paramName} is not string`);
    }
    else {
      if (value.length < minlengh || value.length > maxlength) {
        this.errors.push(`Param ${paramName} have not length valid from ${minlengh} to ${maxlength}`)
      }
    }
    return this;
  }

  requiredAll(paramNameList) {
    let list = _.isArray(paramNameList) ? paramNameList : [paramNameList];
    _.each(list, (param) => this.required(param));
    return this;
  }

 

  validDate(paramName) {
    const value = this._getValue(paramName);
    if (value && !moment(new Date(value)).isValid()) {
      this.errors.push(`Param ${paramName} is not valid date`);
    }
    return this;
  }

  validValue(paramName, validValues) {
    const value = this._getValue(paramName);
    let _validValues = validValues || [];
    if (value && _validValues.indexOf(value) === -1) {
      this.errors.push(`Param ${paramName} is not have valid values: ${JSON.stringify(validValues)}`)
    }
    return this;
  }

  validNumber(paramName) {
    const value = this._getValue(paramName);
    if (value) {
      let number = Number(value);
      if (!_.isNumber(number) || _.isNaN(number)) {
       this.errors.push(`Param ${paramName} is not have valid number`);
      }
      return this;
    }
    return this;
  }
  getErrors() {
    return this.errors || [];
  }
}

module.exports = Validator;