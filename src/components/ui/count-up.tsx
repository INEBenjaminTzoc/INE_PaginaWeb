import CountUp from 'react-countup'

export default function CountUpText({prefix, suffix, value, title}: {prefix?: string, suffix?: string, value: number, title: string}) {
  return (
    <div className="text-2xl font-bold text-[#004F9E]!">
      {prefix}
      <CountUp 
        end={value}
        duration={2.5}
        decimals={
          title.includes("Inflación") || title.includes("Desocupación") || title.includes("Producto") ? 2 : 0
        }
        decimal="."
        separator=","
        delay={0.5}
      />
      {suffix}
    </div>
  )
}
