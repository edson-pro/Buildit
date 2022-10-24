function Input({ type, label, ...otherProps }: any) {
  return (
    <div className="flex flex-col">
      <label className="text-sm mb-2 text-primary" htmlFor="">
        {label}
      </label>
      <input
        className="px-3 py-2 border bg-transparent outline-none border-primary rounded-sm"
        type={type || "text"}
        name=""
        id=""
        {...otherProps}
      />
    </div>
  );
}

export default Input;
