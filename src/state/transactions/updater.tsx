import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, Flex, Link } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { getBscScanLink } from 'utils'
import { useBlock } from 'state/block/hooks'
import useToast from 'hooks/useToast'
import guanoService from 'services/guanoServices'
import { AppDispatch, AppState } from '../index'
import { checkedTransaction, finalizeTransaction } from './actions'

export function shouldCheck(
  currentBlock: number,
  tx: { addedTime: number; receipt?: any; lastCheckedBlockNumber?: number },
): boolean {
  if (tx.receipt) return false
  if (!tx.lastCheckedBlockNumber) return true
  const blocksSinceCheck = currentBlock - tx.lastCheckedBlockNumber
  if (blocksSinceCheck < 1) return false
  const minutesPending = (new Date().getTime() - tx.addedTime) / 1000 / 60
  if (minutesPending > 60) {
    // every 10 blocks if pending for longer than an hour
    return blocksSinceCheck > 9
  }
  if (minutesPending > 5) {
    // every 3 blocks if pending more than 5 minutes
    return blocksSinceCheck > 2
  }
  // otherwise every block
  return true
}

export default function Updater(): null {
  const { library, chainId } = useActiveWeb3React()
  const { t } = useTranslation()

  const { currentBlock } = useBlock()

  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector<AppState, AppState['transactions']>((s) => s.transactions)

  const transactions = useMemo(() => (chainId ? state[chainId] ?? {} : {}), [chainId, state])

  const { toastError, toastSuccess } = useToast()

  useEffect(() => {
    if (!chainId || !library || !currentBlock) return

    Object.keys(transactions)
      .filter((hash) => shouldCheck(currentBlock, transactions[hash]))
      .forEach((hash) => {
        library
          .getTransactionReceipt(hash)
          .then((receipt) => {
            if (receipt) {
              dispatch(
                finalizeTransaction({
                  chainId,
                  hash,
                  receipt: {
                    blockHash: receipt.blockHash,
                    blockNumber: receipt.blockNumber,
                    contractAddress: receipt.contractAddress,
                    from: receipt.from,
                    status: receipt.status,
                    to: receipt.to,
                    transactionHash: receipt.transactionHash,
                    transactionIndex: receipt.transactionIndex,
                  },
                }),
              )
              let toast
              if (receipt.status === 1) {
                toast = toastSuccess
                if (transactions[receipt.transactionHash].approval === undefined && ref !== null) {
                  guanoService.create({
                    TableName: 'marketing',
                    Item: {
                      transaction_hash: { S: receipt.transactionHash },
                      referrer_address: { S: ref },
                      transaction_index: { N: receipt.transactionIndex.toString() },
                      block_hash: { S: receipt.blockHash },
                      block_number: { N: receipt.blockNumber.toString() },
                      status: { N: receipt.status.toString() },
                      address_from: { S: receipt.from },
                      address_to: { S: receipt.to },
                      contract_address: { S: receipt.contractAddress !== null ? receipt.contractAddress : '' },
                    },
                  })
                }
              } else {
                toast = toastError
              }
              toast(
                t('Transaction receipt'),
                <Flex flexDirection="column">
                  <Text>{transactions[hash]?.summary ?? `Hash: ${hash.slice(0, 8)}...${hash.slice(58, 65)}`}</Text>
                  {chainId && (
                    <Link external href={getBscScanLink(hash, 'transaction', chainId)}>
                      {t('View on BscScan')}
                    </Link>
                  )}
                </Flex>,
              )
            } else {
              dispatch(checkedTransaction({ chainId, hash, blockNumber: currentBlock }))
            }
          })
          .catch((error) => {
            console.error(`failed to check transaction hash: ${hash}`, error)
          })
      })
  }, [chainId, library, transactions, currentBlock, dispatch, toastSuccess, toastError, t, ref])

  return null
}
