import React, { Suspense } from "react"
import { Header } from "@/components/Header"
import ActionCard from "./ActionCard"
import AddDataCard from "./AddDataCard"
import CreateStoreCard from "./CreateStoreCard"
import DeleteDataCard from "./DeleteDataCard"
import DeleteStoreCard from "./DeleteStoreCard"
import UpdateDataCard from "./UpdateDataCard"


const PAGE_TITLE = 'Simple Test for IndexedDB'
const PAGE_DESC1 = 'First, you need to create a DB, then you can create a store. After that, you can add data or delete the store. Of course, you can also delete the DB. The data that has been added can also be updated and deleted.'
const PAGE_DESC2 = 'Press F12 and select Application tab to observe the data in the IndexedDB in the Storage section.'

export default function Home() {
  return (
    <>
      <Header title={PAGE_TITLE} descList={[PAGE_DESC1, PAGE_DESC2]} />

      <main className="relative flex w-full h-full flex-row flex-wrap gap-5 p-4 md:p-8 ml:p-12">
          <Suspense fallback={<div>Loading...</div>}>
            <CreateStoreCard />
            <UpdateDataCard />
            <AddDataCard />
            <DeleteDataCard />
            <DeleteStoreCard />
            <ActionCard />
          </Suspense>
      </main>
    </>
  )
}