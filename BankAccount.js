'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    this.customer_name = customer_name
    this.type = type
    this._acct_number = acct_number
  }

  get account_number () {
    return this._acct_number
  }

  to_string () {
    return `${this.customer_name}: ${this.type}# ${this._acct_number}`
  }

  cover_digits () {
    // let digitGroup = this._acct_number.match(/\d+\-\d+/g);
    return `${this._acct_number.replace(/(\d{3})-(\d{3})-(\d{3})/g, "***-***-$3")}`
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
// console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"
console.log(my_acct.to_string())
// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
console.log(my_acct.cover_digits())
