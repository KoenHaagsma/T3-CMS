import { useState } from 'react';
import { MdClose } from 'react-icons/md';

type ModalProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  createStockList: (title: string) => void;
};

const Modal = ({ setOpen, createStockList }: ModalProps) => {
  const [title, setTitle] = useState<string>('');

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      setOpen(false);
      createStockList(title);
    }
  };

  const handleClickCreate = () => {
    setOpen(false);
    createStockList(title);
  };

  return (
    <div className="absolute z-50 bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="justify-center items-center bg-white flex flex-col rounded-md py-4 px-4">
        <div className="w-full flex justify-between mb-4 items-center">
          <h3 className="text-lg font-bold">Create a new stocklist</h3>
          <MdClose
            size={28}
            className="cursor-pointer"
            onClick={handleClickClose}
          />
        </div>
        <div className="flex flex-col px-8">
          <label htmlFor="title">
            What name do you want to give your stocklist
          </label>
          <input
            type="text"
            id="title"
            className="border rounded py-2 px-4 mt-2"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={title}
          />
          <button
            className={`mt-4 w-fit py-2 px-4 rounded-md bg-purple-600 text-white disabled:opacity-50`}
            disabled={title.length === 0}
            onClick={handleClickCreate}
          >
            Create Stocklist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
