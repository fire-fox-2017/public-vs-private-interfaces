'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    this._customer_name = customer_name;
    this._type = type;
    this._acct_number = acct_number;
  }

  get account_number() {
    return this._acct_number;
  }

  set customer_name(newValue) {
    this._customer_name = newValue;
  }

  set account_number(newValue) {
    this._acct_number = newValue;
  }

  set type(newValue) {
    this._type = newValue;
  }



  to_string () {
    let result = `${this._customer_name}: ${this._type}# ${this._acct_number}`;
    console.log(result);
    return result;
  }

  cover_digits () {
    let checkNumRegex = /(\d)+\-(\d)+/;
    let censoredNum = this._acct_number.replace(checkNumRegex, '***-***');
    let result = `${this._customer_name}: ${this._type}# ${censoredNum}`;
    console.log(result);
    return result;

  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

// console.log(my_acct)
// console.log(my_acct.account_number)

console.log(my_acct.account_number);
my_acct.account_number = '333-555-222';

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
