const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')   
}

describe('Token', () => {
    let token, accounts, deployer

    beforeEach(async () => {
        const Token = await ethers.getContractFactory("Token")
        token = await Token.deploy('The Blizzard of Odds', 'BLZ', '1000000')

        accounts = await ethers.getSigners()
        deployer = accounts[0]
    })

    describe('Deployment', () => {
        const name = 'The Blizzard of Odds';
        const symbol = 'BLZ';
        const decimals = '18';
        const totalSupply = tokens('1000000');

    it('Has a correct name', async () => {      
        expect(await token.name()).to.equal(name)   
    })

    it('Has a correct symbol', async () => {      
        expect(await token.symbol()).to.equal(symbol)
    })

    it('Has a correct decimals', async () => {      
        expect(await token.decimals()).to.equal(decimals)
    })

    it('Has a correct total supply', async () => {     
        expect(await token.totalSupply()).to.equal(totalSupply)
    })

    it('assigns total supply to deployer', async () => {     
        expect(await token.balanceOf(deployer.address)).to.equal(totalSupply)
    })

  })   
})
