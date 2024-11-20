import { AddPackingListForm, TablePackingList } from "../components"


export const InventoryAdmin = () => {

  return (
    <div className="flex flex-col justify-center items-center">
      <AddPackingListForm />

      <TablePackingList />

    </div>
  )
}
