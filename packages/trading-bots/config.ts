import { parseEther } from "viem";

const botConfig = {
  creditTokenName: "SaltToken",
  tokensToSend: parseEther("100"),
  networkTokensToSend: parseEther("0.1"),
  confirmations: 1,
  tradeFrequency: 1_000,
};

export default botConfig;
