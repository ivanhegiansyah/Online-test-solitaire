export default function Input({
  name,
  text,
  type,
  value,
  onChange,
  containerClassName,
  labelClassName,
  inputClassName,
  isError,
  placeholder,
}) {
  return (
    <>
      <div
        className={`relative flex flex-col gap-1 mt-5 ${containerClassName}`}
      >
        <label htmlFor={name} className={`pl-1 ${labelClassName}`}>
          {text}
        </label>

        <input
          id={name}
          name={name}
          type={type || 'text'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`py-2 px-4 appearance-none rounded border focus:outline-none ${
            isError
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 focus:border-blue-400'
          } ${inputClassName}`}
        />
      </div>
    </>
  );
}
