import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { QuantityInputType } from "./QuantityInput.types";
import "./index.scss";

const DDUQuantityInput = ({ value, gap, onChangeNumber }: QuantityInputType) => {
  const numPlus = () => {
    let gapNumber: number = gap ? gap : 1;
    if (value >= 0) {
      onChangeNumber(value + gapNumber);
    }
  };
  const numMinus = () => {
    let gapNumber: number = gap ? gap : 1;
    if (value > 0) {
      onChangeNumber(value - gapNumber);
    }
  };

  return (
    <div className="DDU-quantity-input">
      <button type="button" onClick={numPlus} className="bg-white border border-solid border-gray-200 rounded p-1">
        <PlusIcon className="w-4 h-4 dark:text-gray-400 text-gray-500" />
      </button>

      <span>{value}</span>

      <button type="button" onClick={numMinus} className="bg-white border border-solid border-gray-200 rounded p-1">
        <MinusIcon className="w-4 h-4 dark:text-gray-400 text-gray-500" />
      </button>
    </div>
  );
};

export default DDUQuantityInput;
