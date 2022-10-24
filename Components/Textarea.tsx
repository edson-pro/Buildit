function TextArea({ type, label, ...otherProps }: any) {
  return (
    <div className="flex items-start flex-col w-full">
      <label className="text-sm mb-2 text-primary" htmlFor="">
        {label}
      </label>
      <textarea
        name=""
        rows={5}
        className="border bg-transparent outline-none border-primary w-full"
        id=""
        {...otherProps}
      ></textarea>
    </div>
  );
}

export default TextArea;
