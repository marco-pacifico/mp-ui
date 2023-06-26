export default function Icon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" className="fill-amber-300" />
      <path
        d="M12.4804 17.3679L11.4562 16.3537L14.5237 13.2862H7.07129V11.8047H14.5237L11.4562 8.74219L12.4804 7.72301L17.3028 12.5455L12.4804 17.3679Z"
      />
    </svg>
  );
}
