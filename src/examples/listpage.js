import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "~/components/Button";
import { useLiveState } from "livestate";
import QRCode from "react-qr-code";

const defaultValue = {
  name: "my untitled shopping list",
  list: [],
};

const ListPage = () => {
  const { query } = useRouter();
  const [state, setState] = useLiveState({
    id: query.listId,
    defaultValue,
  });

  return (
    <div className="p-4 max-w-lg">
      <h1 className="text-4xl mb-4">Shopping list</h1>
      <NewItemInput
        onAdd={(name) => {
          if (!name) return;
          setState({
            list: [...state.list, { name }],
          });
        }}
      />
      <ul className="mt-4">
        {state.list.map((item, idx) => (
          <li
            key={idx}
            className="bg-flamingo-100 p-4 rounded-lg mb-4 flex flex-row justify-between"
          >
            <div className={item.ok ? "line-through" : ""}>{item.name}</div>
            <div>
              <button
                className="px-4 rounded-lg bg-red-300 border border-red-600 text-white mr-2"
                onClick={() => {
                  if (!window.confirm("Remove?")) return;
                  setState({ list: state.list.filter((_, i) => i !== idx) });
                }}
              >
                X
              </button>
              <button
                onClick={() => {
                  setState({
                    list: state.list.map((item, i) =>
                      i === idx ? { ...item, ok: !item.ok } : item
                    ),
                  });
                }}
                className="px-4 rounded-lg bg-green-400 border border-green-600 text-white"
              >
                √
              </button>
            </div>
          </li>
        ))}
        {state.list.length === 0 && <p>List ist empty, awesome!</p>}
      </ul>

      <Share />
    </div>
  );
};

const useBrowser = (fn, defaultValue) => {
  if (typeof window === "undefined") return defaultValue;
  return fn();
};

const Share = () => {
  const { query } = useRouter();
  const [show, setShow] = useState(false);

  const link = useBrowser(() => {
    return location.origin + "/shoppinglist/" + query.listId;
  });

  return (
    <div>
      <Button className="mb-4" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show QR Code"}
      </Button>
      {show && <QRCode value={link} />}
    </div>
  );
};

const NewItemInput = ({ onAdd }) => {
  const [inputValue, setValue] = useState("");
  const handleAdd = () => {
    if (!inputValue) return;

    onAdd(inputValue);
    setValue("");
  };

  return (
    <div className="flex flex-row">
      <input
        className="flex-1 p-2 w-1/2 px-8 text-flamingo-800 bg-white rounded-xl font-jellee border-flamingo-800 border-2 block"
        value={inputValue}
        onKeyUp={(e) => e.key === "Enter" && handleAdd()}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button className="w-32 ml-2" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
};

export default ListPage;
