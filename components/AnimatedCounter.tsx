"use client"

import CountUp from "react-countup"

const AnimatedCounter = ({
    amount
}: { amount : number }) => {
  return (
    <div className="w-full">
      <CountUp 
        duration={2}
        decimals={2}
        decimal="."
        separator=","
        prefix="R"
        end={amount}
      />
    </div>
  )
}

export default AnimatedCounter
