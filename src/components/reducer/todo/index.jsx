import React, { useReducer, useState } from "react";

const TodoReducer = () => {
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editId, setEditId] = useState(null); 
  const [editText, setEditText] = useState("");

  const initialState = {
    data: [],
    counter: 0,
    isActive: true,
  };

  const reducer = (state, { type, text, id }) => {
    switch (type) {
      case "add":
        return {
          ...state,
          data: [...state.data, { id: Date.now(), list: text }],
        };
      case "delete":
        return {
          ...state,
          data: state.data.filter((value) => value.id !== id),
        };
      case "edit":
        return {
          ...state,
          data: state.data.map((item) =>
            item.id === id ? { ...item, list: text } : item
          ),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredData = state.data.filter((value) =>
    value.list.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const handleSave = (id) => {
    dispatch({ type: "edit", text: editText, id });
    setEditId(null); 
    setEditText("");
  };

  return (
    <div className="p-5 w-[60%] m-auto bg-[#2b2b2b] h-[100vh]">
    
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search"
        value={searchTerm}
        className="p-[10px] rounded-[7px] w-[67%] "
      />

    
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Text"
        value={text}
        className="p-[10px] rounded-[7px] ml-5 w-[20%]"
      />
      <button
        className="w-100% h-100% ml-1"
        onClick={() => {
          dispatch({ type: "add", text });
          setText(""); 
        }}
      >
        Add
      </button>
      
      <p className="text-[#676767] text-[30px]">___________________________________________________________</p>

      <div className="mt-5">
        {filteredData.map((value) => (
          <div
            className="flex items-center bg-[#121212] mt-4 justify-between px-2 py-1 rounded-[7px]"
            key={value.id}
          >
            {editId === value.id ? (
           
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="p-2"
              />
            ) : (
            
              <div>{value.list}</div>
            )}

            <div className="flex gap-4">
              {editId === value.id ? (
                
                <button onClick={() => handleSave(value.id)}>💾</button>
              ) : (
               
                <button onClick={() => handleEdit(value.id, value.list)}>
                  ✏️
                </button>
              )}

            
              <button onClick={() => dispatch({ type: "delete", id: value.id })}>
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoReducer;
