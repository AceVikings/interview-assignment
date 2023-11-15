import { ethers } from "hardhat";

async function main() {
  const EntryPointFactory = await ethers.getContractFactory("EntryPoint");
  const entryPoint = await EntryPointFactory.deploy();

  // Deploy Paymaster
  // Deploy wallet
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
