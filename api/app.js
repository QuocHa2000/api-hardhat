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
  const owners = await ethers.getSigners();
  const token = await ethers.getContractFactory("TokenWDT");
  const contract = await token.deploy();

  // console.log(owners[0]);
  for (owner of owners) {
    console.log(parseInt(await owner.getBalance()));
  }
  const tx = await owners[0].sendTransaction({
    to: owners[1].address,
    value: ethers.utils.parseEther("5.0"),
  });
  console.log(
    "after sending",
    parseInt(await owners[0].getBalance()),
    parseInt(await owners[1].getBalance())
  );

  // const name = await contract.balanceOf(owner[0].address);
  // console.log(111111, await contract.address);
})();

// app.listen(3000, () => console.log("App is listen on ", 3000));
