"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

interface CountdownTimerProps {
  targetDate: string
  className?: string
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    }

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const formatTime = (value: number) => value.toString().padStart(2, "0")

  if (
    timeLeft.dias === 0 &&
    timeLeft.horas === 0 &&
    timeLeft.minutos === 0 &&
    timeLeft.segundos === 0 &&
    +new Date(targetDate) < +new Date()
  ) {
    return (
      <p className={`text-brand-accent-red text-xl font-semibold text-center ${className}`}>
        O período de inscrição para o evento encerrou!
      </p>
    )
  }

  return (
    <div
      className={`flex items-center justify-center space-x-2 sm:space-x-4 bg-brand-neutral-dark p-4 rounded-lg ${className}`}
    >
      <Clock className="w-8 h-8 text-brand-accent-red mr-2 flex-shrink-0" />
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} className="text-center">
          <div className="text-2xl sm:text-4xl font-bold text-brand-text-primary">{formatTime(value)}</div>
          <div className="text-xs sm:text-sm uppercase text-brand-text-secondary">{interval}</div>
        </div>
      ))}
    </div>
  )
}

export default CountdownTimer
