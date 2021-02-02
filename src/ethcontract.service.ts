import { Injectable } from '@angular/core';
const Web3 = require('web3');
declare let require: any;
declare let window: any;
// const tokenAbi = require('../../../Solidity/build/contracts/PropertyTrade.json');
// const PropertyFactory = require('../../../Solidity/build/contracts/PropertyFactory.json');
// const OfferFactory = require('../../../Solidity/build/contracts/OfferFactory.json');



@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private uDonate: any;
  private  web3: any;
  private enable: any;
  private test: any;
//  private _tokenContract: any;
 // private cle: String = '0x01515EC8DB3a7193879260d70e1B816Be3298F5a' ;



constructor() {
  if (typeof window.web3 !== 'undefined') {
    this.web3 = new Web3(window.web3.currentProvider);
    if (this.web3.version.network !== '4') {
     console.log('Please connect to the Rinkeby network');
    }
  } else {
    Web3.providers.HttpProvider('https://ropsten.infura.io/v3/79fcae799c4e456883246b53aff9cf09');
    this.enable = this.enableMetaMaskAccount();
    console.warn(
      'Please use a dapp browser like mist or MetaMask plugin for chrome'
    );
  }
 // this._tokenContract = this.web3.eth.contract("");
}

  private async enableMetaMaskAccount(): Promise<any> {
    let enable = false;
    await new Promise((resolve, reject) => {
      enable = window.ethereum.enable();
    });
    return Promise.resolve(enable);
  }
  public async  gett(): Promise <string> {
    return  await  window.ethereum.enable().then((account) => {
        return account[0];
      });

}
  public async getUserBalance(): Promise<number> {
    const account =  await this.gett();
    return new Promise((resolve, reject) => {
//      const _web3 = this.web3;
      this._tokenContract._eth.getBalance(account, function(err, result) {
        console.log('testtttttttttttttt', this._tokenContract._eth);
        if (err != null) {
          reject(err);
        }
       // resolve(.fromWei(result));
      });
    }) as Promise<number>;
  }















}
