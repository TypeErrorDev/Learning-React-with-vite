import { useState } from "react";
function DeckList() {
  return (
    <div className="flex flex-col gap-4">
      {/* Table Header */}
      <table className="w-full max-w-[500px] mx-auto p-5 text-white border-b border-zinc-500">
        <thead className="flex justify-center p-3">
          <tr className="flex w-full">
            <th className="flex-1 text-left">Name</th>
            <th className="flex-1 text-left">Count</th>
            <th className="flex-1 text-left">Points</th>
            <th className="flex-1 text-left">Category</th>
            <th className="flex-1 text-left">Actions</th>
          </tr>
        </thead>
      </table>
      {/* Table Body */}
      <div className="flex flex-col gap-4">
        {/* create a row for each deck and dynamically render them */}
        <div className="flex justify-between p-5 text-white border-b border-zinc-500">
          <div>Deck Name</div>
          <div>0</div>
          <div>0</div>
          <div>Category</div>
          <div className="flex gap-2">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
      {/* Add Deck Button */}
      <button className="bg-cyan-500 rounded-bl-md rounded-br-md p-2">
        Add Deck
      </button>
    </div>
  );
}

export default DeckList;
