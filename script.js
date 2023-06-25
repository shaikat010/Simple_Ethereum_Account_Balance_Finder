
const URL = "https://mainnet.infura.io/v3/YOURAPUKEY";
const web3 = new Web3(new Web3.providers.HttpProvider(URL));

document.getElementById("balanceForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const addressInput = document.getElementById("addressInput");
  const address = addressInput.value.trim();

  if (!address) {
    alert("Please enter an Ethereum address");
    return;
  }

  try {
    const wei = await web3.eth.getBalance(address);
    const balance = web3.utils.fromWei(wei, 'ether');
    document.getElementById("balanceResult").textContent = "Balance: " + balance.toString() + " ETH";
  } catch (error) {
    console.error(error);
    alert("An error occurred while fetching the balance. Please try again.");
  }
});
