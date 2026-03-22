interface Props {
  circleSize?: number
  dotCount?: number
}

export default function SectionDivider({ circleSize = 12, dotCount = 4 }: Props) {
  return (
    <div className="hidden lg:flex flex-col items-center absolute left-10 xl:left-16 top-0 bottom-0 z-20 pointer-events-none">
      {/* Vertical line */}
      <div className="w-px bg-line/60 flex-1" />
      {/* Circle */}
      <div
        className="rounded-full border-2 border-sage/30 bg-bg my-2 shrink-0"
        style={{ width: circleSize, height: circleSize }}
      />
      {/* Dots along the line */}
      {Array.from({ length: dotCount }).map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-px bg-line/60 h-12" />
          <div className="w-1.5 h-1.5 rounded-full bg-sage/40 shrink-0" />
        </div>
      ))}
      <div className="w-px bg-line/60 flex-1" />
    </div>
  )
}
