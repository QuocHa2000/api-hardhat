// const express = require("express");
const { ethers } = require("hardhat");

// const app = express();

// app.get("/address", async (req, res, next) => {
//   try {
//     const owner = await ethers.getSigners();
//     const token = await ethers.getContractFactory("Token");
//     console.log(token);
//     res.status(200).json({ address: owner[2].address });
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

(async () => {
  const owner = await ethers.getSigners();
  const token = await ethers.getContractFactory("TokenWDT");
  const contract = await token.deploy();
  const name = await contract.balanceOf(owner[0].address);
  console.log(contract.address);
})();

// app.listen(3000, () => console.log("App is listen on ", 3000));
