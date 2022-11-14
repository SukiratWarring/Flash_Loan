const {except} = require("chai")
const hre=require("hardhat")
describe("Flash_Loan Contract",function(){
  it("Deployment",async()=>{
    const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");
    const flashloan = await FlashLoan.deploy("0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D",{gasLimit:500000});
  
    await flashloan.deployed();
  
  console.log('The address of the deployed contract is : ', flashloan.address)
  })
})
