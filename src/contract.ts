import {
  Transfer as TransferEvent
} from "../generated/Contract/Contract"
import {
  Transfer
} from "../generated/schema"


export function handleTransfer(event: TransferEvent): void {
  // let entity = new Transfer(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.from = event.params.from
  // entity.to = event.params.to
  // entity.value = event.params.value

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
  let id = event.transaction.hash.concatI32(event.logIndex.toI32())

  let transfer = Transfer.load(id)

  if (!transfer) {
    transfer = new Transfer(id)
  }

  transfer.sender = event.params.from
  transfer.receiver = event.params.to
  transfer.amount = event.params.value

  transfer.blockNumber = event.block.number
  transfer.blockTimestamp = event.block.timestamp
  transfer.transactionHash = event.transaction.hash

  transfer.save()
}
