/* const hre = require("hardhat");

async function main() {
  const YouTube = await hre.ethers.getContractFactory("Youtube");
  const youtube = await YouTube.deploy();

  await youtube.deployed();

  console.log("YouTube deployed to:", youtube.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  */

const hre = require("hardhat");

async function main() {
  // Compile the contract if it's not compiled
  await hre.run("compile");

  const YouTube = await hre.ethers.getContractFactory("Youtube");
  const youtube = await YouTube.deploy();

  // Wait for the contract to be deployed
  await youtube.waitForDeployment();

  console.log("YouTube deployed to:", youtube.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
