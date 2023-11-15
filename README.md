# EVM Coding Challenge: ERC-4337 based DeFi Smart Contract Wallet with Batching

Problem Statement: Objective:
Develop a DeFi smart contract wallet on the EVM, emphasizing ERC-4337 integration, that enables users to perform batched transactions.

## Step 1 - Plan of Action

We are primarily focusing on 2 things: <br>

1. Building a Smart Contract Wallet with Paymaster Integration
2. Allowing Optimised Transaction batching through the wallet with functionality to withdraw tokens

## Step 2 - Scope of Work

1. Smart Contracts:
   Deploy an ERC-4337 smart contract wallet named BatchedWallet on any EVM-compatible testnet.
   The contract should support depositing and withdrawing of ETH and ERC20 tokens.
   Allow users to perform batched transactions in one call to optimize for gas.
   Integrate ERC-4337 to enable users to perform transactions without spending gas using a Paymaster.
2. Test Cases:
   Write test cases for each function in the BatchedWallet contract.
   Ensure that you cover basic success scenarios and edge cases.
3. Documentation:
   Document the design decisions made during the contract creation (can be bullet points just for yourself, but will be discussed afterwards).

---
