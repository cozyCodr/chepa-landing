'use client'

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Component() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [email, setEmail] = useState('')

  useEffect(() => {
    const countDownDate = new Date("2024-12-31T23:59:59").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = countDownDate - now

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email)
    setEmail('')
    alert('Thanks for signing up! We\'ll notify you when we launch.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-fuchsia-50 text-primary-foreground flex flex-col justify-center items-center p-4">
      <main className="max-w-4xl mx-auto text-center text-slate-900">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 ">Chepa Ticket Hub is Coming Soon!</h1>
        <p className="text-xl md:text-2xl mb-8">Get ready for the easiest way to book your favorite events.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Exclusive Deals", description: "Get access to the hottest events at unbeatable prices." },
            { title: "Easy Booking", description: "Book your tickets in just a few clicks, anytime, anywhere." },
            { title: "Secure Transactions", description: "Your payments and personal information are always protected." },
          ].map((feature, index) => (
            <Card key={index} className="bg-background/20 backdrop-blur-lg border-none">
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          {[
            { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61565499856128", label: "Facebook", color: "blue" },
            // { Icon: Twitter, href: "#", label: "Twitter" },
            // { Icon: Instagram, href: "#", label: "Instagram" },
            // { Icon: Mail, href: "#", label: "Email" },
          ].map(({ Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              className="text-primary-foreground hover:text-secondary transition-colors"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}