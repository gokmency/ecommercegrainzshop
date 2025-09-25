export default function GrainzLogo({ 
  width = 32, 
  height = 32, 
  className = "" 
}: { 
  width?: number; 
  height?: number; 
  className?: string; 
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* GRAINZ Logo - Modern G harfi tasarımı */}
      <rect width="32" height="32" rx="8" fill="#0052FF" />
      <path
        d="M8 8h12c2.21 0 4 1.79 4 4v8c0 2.21-1.79 4-4 4h-8v-6h8v-2h-8V8z"
        fill="white"
      />
      <path
        d="M8 24V8h4v16h-4z"
        fill="white"
        opacity="0.8"
      />
      {/* Decorative dots representing "grains" */}
      <circle cx="26" cy="8" r="1.5" fill="#00D2FF" />
      <circle cx="28" cy="12" r="1" fill="#00D2FF" opacity="0.7" />
      <circle cx="30" cy="16" r="0.8" fill="#00D2FF" opacity="0.5" />
    </svg>
  );
}
