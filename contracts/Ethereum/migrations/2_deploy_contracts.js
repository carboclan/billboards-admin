var Artwork = artifacts.require("./ERC721Full.sol");
var BillBoard = artifacts.require("./Billboard.sol");

const deploymentAccount =  '0xE8B21A66d89401254045bAb95B474B52B6faC351'; //[0] address from mnemonic
const artistAccount = '0xE8B21A66d89401254045bAb95B474B52B6faC351'; // artist account [on mainnet & rinkeby]

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Artwork, "This Artwork Is Always OnSale", "TAIAOS").then((deployedArtwork) => {
    return deployer.deploy(BillBoard, artistAccount, deployedArtwork.address);
  });
};
