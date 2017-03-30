'use strict'

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor (customer_name, type, acct_number) {
    this.customer = customer_name
    this.status = type
    this.account = acct_number
  }

  get account_number () {
    return this.account
  }

  to_string () {
    console.log(`${this.customer}: ${this.status}# ${this.account}`);
  }

  cover_digits () {
    let patt = /(\d{3})-/g
    var change = this.account.replace(patt, 'xxx-')
     console.log(`${this.customer}: ${this.status}# ${change}`);
    // console.log(change);
  }
}

let my_acct = new BankAccount('Hacktivate', 'Checking', '333-555-888')

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_string() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
