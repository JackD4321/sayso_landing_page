export function SearchSuggestionPill() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F4F4F5] border border-gray-200/60 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      {/* Blue Lightning Bolt Icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#2367EE] flex-shrink-0"
      >
        <path
          d="M11.5 1L4.5 11H10L8.5 19L15.5 9H10L11.5 1Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* "sayso" text */}
      <span className="text-sm font-semibold text-[#1D4871] lowercase">sayso</span>
    </div>
  );
}
