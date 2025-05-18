function TagInput({ label, values, inputValue, setInputValue, onAdd, onRemove }) {
    return (
      <div>
        <label className="block font-medium mb-1">{label}</label>
        <div className="flex flex-wrap gap-2 mb-2">
          {values.map((val, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
            >
              {val}
              <button
                type="button"
                onClick={() => onRemove(i)}
                className="ml-1 text-red-500"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault();
              const trimmed = inputValue.trim();
              if (trimmed && !values.includes(trimmed)) {
                onAdd(trimmed);
                setInputValue("");
              }
            }
          }}
          placeholder={`Add ${label.toLowerCase()} and press Enter`}
          className="border p-2 w-full"
        />
      </div>
    );
  }
  
  export default TagInput