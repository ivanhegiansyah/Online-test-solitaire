export default function Button({ text, className, onClick, type }) {
  return (
    <>
      <button
        className={`w-full px-4 py-3 block transition-colors rounded bg-[#1E293B] text-[#E2E8F0]  ${className}`}
        onClick={onClick}
        type={type}
      >
        {text}
      </button>
    </>
  );
}
