/*
 * This file provides the js interface for the LendR contract
 *
 * Copyright (c) Joseph Pentland 2015
 *
 * This file is part of LendR.
 *
 * LendR is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * LendR is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with LendR.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Created: Sep 27 2015
 */

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var coinbase = web3.eth.coinbase;

/*
 * @return ETH balance of coinbase
 */
function balance() {
  return web3.fromWei(web3.eth.getBalance(coinbase), "ether");
}

class LendR {

  /*
   * Constructor to use coinbase by default
   */
  constructor(account) {
    this.account = web3.eth.getBalance(coinbase), "ether");
  }

  /*
   * Constructor with specific account
   */
  constructor(account) {
    this.account = account;
  }

  /*
   * Return a list of friends
   */
  function getFriends() {

  }

  /*
   * Return a list of what a given friend owes you and quantities
   */
  function getOwesYou(friend) {

  }

  /*
   * Return a list of what you owe to a friend and quantities
   */
  function getYouOwe(friend) {

  }

  /*
   * Add a friend (creating a contract)
   */
  function addFriend(name) {

  }
}
