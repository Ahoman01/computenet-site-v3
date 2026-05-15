"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Node {
  x: number
  y: number
  z: number
  size: number
  speed: number
  connections: number[]
}

export function NetworkGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const animationRef = useRef<number>(0)
  const rotationRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize nodes
    const nodeCount = 40
    const nodes: Node[] = []
    
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = 2 * Math.PI * Math.random()
      const radius = 120 + Math.random() * 30
      
      nodes.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        size: 2 + Math.random() * 2,
        speed: 0.001 + Math.random() * 0.002,
        connections: [],
      })
    }

    // Create connections
    for (let i = 0; i < nodes.length; i++) {
      const connectionCount = 2 + Math.floor(Math.random() * 3)
      for (let j = 0; j < connectionCount; j++) {
        const target = Math.floor(Math.random() * nodes.length)
        if (target !== i && !nodes[i].connections.includes(target)) {
          nodes[i].connections.push(target)
        }
      }
    }

    nodesRef.current = nodes

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      rotationRef.current += 0.002

      // Sort nodes by z for proper depth rendering
      const sortedNodes = nodes
        .map((node, index) => ({ ...node, index }))
        .sort((a, b) => a.z - b.z)

      // Draw connections
      ctx.strokeStyle = "rgba(45, 212, 191, 0.15)"
      ctx.lineWidth = 0.5

      for (const node of sortedNodes) {
        const cos = Math.cos(rotationRef.current)
        const sin = Math.sin(rotationRef.current)
        const x1 = node.x * cos - node.z * sin
        const z1 = node.x * sin + node.z * cos
        const scale1 = 200 / (200 + z1)
        const screenX1 = centerX + x1 * scale1
        const screenY1 = centerY + node.y * scale1

        for (const targetIndex of node.connections) {
          const target = nodes[targetIndex]
          const x2 = target.x * cos - target.z * sin
          const z2 = target.x * sin + target.z * cos
          const scale2 = 200 / (200 + z2)
          const screenX2 = centerX + x2 * scale2
          const screenY2 = centerY + target.y * scale2

          const opacity = Math.max(0.05, Math.min(0.2, (scale1 + scale2) / 4))
          ctx.strokeStyle = `rgba(45, 212, 191, ${opacity})`
          ctx.beginPath()
          ctx.moveTo(screenX1, screenY1)
          ctx.lineTo(screenX2, screenY2)
          ctx.stroke()
        }
      }

      // Draw nodes
      for (const node of sortedNodes) {
        const cos = Math.cos(rotationRef.current)
        const sin = Math.sin(rotationRef.current)
        const x = node.x * cos - node.z * sin
        const z = node.x * sin + node.z * cos
        const scale = 200 / (200 + z)
        const screenX = centerX + x * scale
        const screenY = centerY + node.y * scale
        const size = node.size * scale

        const opacity = Math.max(0.3, Math.min(1, scale))
        
        // Glow effect
        const gradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, size * 4)
        gradient.addColorStop(0, `rgba(45, 212, 191, ${opacity * 0.5})`)
        gradient.addColorStop(1, "rgba(45, 212, 191, 0)")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(screenX, screenY, size * 4, 0, Math.PI * 2)
        ctx.fill()

        // Node
        ctx.fillStyle = `rgba(45, 212, 191, ${opacity})`
        ctx.beginPath()
        ctx.arc(screenX, screenY, size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative w-full h-full"
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent" />
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </motion.div>
  )
}
