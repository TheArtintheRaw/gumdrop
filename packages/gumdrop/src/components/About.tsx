import React from 'react';
import { Link } from 'react-router-dom';

import { Stack } from '@mui/material';

import { useWindowDimensions } from '../components/AppBar';

const WHITESPACE = '\u00A0';

export const About = () => {
  const summary = (
    <Stack spacing={1}>
      <div>
        Ghostlife 2099 - Take the your assessment at <a href="https://ghostlifeclub.com/">https://ghostlifeclub.com</a>
        to get started with the designation and redemtion of your OTOM8 ID. 
      </div>

      <div>
        Once you complete your OTOM8 Identification Assessment you will be
         recieve a code to claim your ID shortly after. Make sure you join
         the <a href="https://discord.gg/ghostlife">discord</a>.
      </div>

      <div>
        The usecase of the OTOM8 ID will grant you access to staking rewards,
         discounts of apparel and future NFT collections, gated content - such
         as limited edition runs of apparel and future NFT collections only available
         to holders.
      </div>

      <div>
        The approach, originally pioneered for token airdrops by{' '}
        <a
          href="https://github.com/Uniswap/merkle-distributor"
          target="_blank"
          rel="noreferrer"
        >
          Uniswap
        </a>{' '}
        and ported to Solana by{WHITESPACE}
        <a
          href="https://github.com/saber-hq/merkle-distributor"
          target="_blank"
          rel="noreferrer"
        >
          Saber
        </a>
        , is extended to allow pre-minting a Candy Machine or printing editions
        of a master copy. Moreover, Gumdrop allows creators to directly send
        whitelisted users a drop reclamation link by building the tree with
        off-chain handles (e.g email, discord, etc) and allowing the user to
        redeem into any wallet.
        Below is an example of how it all works. as well as links to the docs
        for a more indepth explaination.
      </div>
    </Stack>
  );

  const create = (
    <Stack spacing={1}>
      <a>CREATION</a>

      <div>
        Creation builds a whitelist of users that can claim either existing
        fungible tokens or directly mint from a pre-sale Candy Machine. See a
        full explanation on the{' '}
        <a
          href="https://docs.metaplex.com/airdrops/create-gumdrop"
          target="_blank"
          rel="noreferrer"
        >
          Metaplex Docs
        </a>
      </div>

      <div>
        Click{' '}
        <a
          href={`data:text/plain;charset=utf-8,${JSON.stringify(
            require('./example.json'),
          )}`}
          download="example.json"
        >
          here
        </a>{' '}
        for an example distribution list with emails.
      </div>
    </Stack>
  );

  const claim = (
    <Stack spacing={1}>
      <Link to={`/claim`}>CLAIMS</Link>

      <div>
        Claims are redeemed through a URL with query parameters holding
        claim-specific keys. Claimants will need to verify ownership of the
        specified handle by answering a OTP challenge and pay the rent and
        minting fees if applicable.
      </div>
    </Stack>
  );

  // const close = (
  //   <Stack spacing={1}>
  //     <a>CLOSING</a>

  //     <div>
  //       Closing the Gumdrop cleans up the on-chain state and allows creators to
  //       recycle any lamports held for rent-exemption after the airdrop is
  //       complete.
  //     </div>

  //     <div>
  //       When closing a Candy Machine-integrated distributor, update authority
  //       will be transferred back to the wallet owner.
  //     </div>
  //   </Stack>
  // );

  const steps = [
    { name: 'summary', inner: summary },
    { name: 'create', inner: create },
    { name: 'claim', inner: claim },
    { name: 'close', inner: close },
  ];

  const maxWidth = 960;
  const { width } = useWindowDimensions();

  return (
    <Stack
      alignContent="left"
      textAlign="left"
      spacing={2}
      style={{
        margin: 'auto',
        maxWidth: Math.min(width, maxWidth),
      }}
    >
      {steps.map((s, idx) => (
        <div key={idx}>{s.inner}</div>
      ))}
    </Stack>
  );
};
