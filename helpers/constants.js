'use strict';

module.exports = {
	currentVersion: "0.1.0",
	minVersion: [
		{ height: 1,      ver: "^0.1.0"}
	],
	activeDelegates: 201,
	maximumVotes: 1,
	addressLength: 208,
	blockHeaderLength: 248,
	blockTime: 15000,
	blockReceiptTimeOut: 30*2, // 2 blocks
	confirmationLength: 77,
	epochTime: new Date(Date.UTC(2016, 4, 24, 17, 0, 0, 0)),
	fees: {
		send: 10000000,
		vote: 100000000,
		secondsignature: 10000000,
		delegate: 2500000000,
		multisignature: 500000000,
		dapp: 2500000000
	},
	feeStart: 1,
	feeStartVolume: 10000 * 100000000,
	fixedPoint: Math.pow(10, 8),
	maxAddressesLength: 208 * 128,
	maxAmount: 100000000,
	maxConfirmations: 77 * 100,
	maxPayloadLength: 1024 * 1024,
	maxPeers: 100,
	maxRequests: 10000 * 12,
	maxSharedTxs: 100,
	maxSignaturesLength: 196 * 256,
	maxTxsPerBlock: 25,
	minBroadhashConsensus: 51,
	nethashes: [
		// Mainnet
		'4c1170a3edb03f961e5e3f7cedcd25563f0a46ec4aa3342715d09c47b398ea19',
		// Testnet
		'0daee950841005a3f56f6588b4b084695f0d74aaa38b21edab73446064638552'
	],
	numberLength: 100000000,
	requestLength: 104,
	rewards: {
		milestones: [
            500000000,  // Initial reward
            250000000,  // Milestone 1
            150000000,   // Milestone 2
            100000000
		],
		offset: 10,   // Start rewards at block (n)
		distance: 1168800, // Distance between each milestone ~ 1 year
	},
	signatureLength: 196,
	totalAmount: 9999999983700000,
	unconfirmedTransactionTimeOut: 10800 // 1080 blocks
};
