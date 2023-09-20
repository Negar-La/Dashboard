import React, { useContext } from "react";
import { UserContext } from "../../client/context/UserContext";

const StoreDropdown = () => {
  const { storeNumber, setStoreNumber } = useContext(UserContext);

  const handleStoreChange = (e) => {
    setStoreNumber(e.target.value);
  };

  return (
    <div>
      <label htmlFor="storeDropdown">Select a store: </label>
      <select
        id="storeDropdown"
        value={storeNumber}
        onChange={handleStoreChange}
      >
        <option value="001">Store 001 - Hoboken, NJ</option>
        <option value="502">Store 502 - Louisville, KY</option>
      </select>
    </div>
  );
};

export default StoreDropdown;
