import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import './styles.css'

interface ImagePosition {
  id: number
  x: number
  y: number
  vx: number
  vy: number
}

const CardPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [imagePositions, setImagePositions] = useState<ImagePosition[]>([])

  // Array de mensajes de San Valentín
  const valentineMessages = [
    {
      title: 'Para ti, con amor',
      message1: 'En este día especial, quiero recordarte lo importante que eres para mí.',
      message2: 'Tu sonrisa ilumina mis días y tu amor llena mi corazón de felicidad.',
      message3: 'Gracias por ser parte de mi vida. Te amo más de lo que las palabras pueden expresar.',
      closing: 'Con todo mi cariño ❤️',
    },
    {
      title: 'Mi corazón es tuyo',
      message1: 'Cada día a tu lado es un regalo que atesoro con todo mi ser.',
      message2: 'Tu amor transforma mi mundo y hace que cada momento sea especial.',
      message3: 'Eres la razón por la que creo en el amor verdadero.',
      closing: 'Eternamente agradecido 💕',
    },
    {
      title: 'Eres mi todo',
      message1: 'No hay palabras suficientes para expresar lo que siento por ti.',
      message2: 'Cada risa, cada mirada, cada momento contigo es un tesoro.',
      message3: 'Eres la luz que guía mi camino y el amor que llena mi alma.',
      closing: 'Con amor infinito 🌹',
    },
    {
      title: 'Mi razón de ser',
      message1: 'Desde que llegaste a mi vida, todo tiene más sentido y color.',
      message2: 'Tu amor es el motor que impulsa mis sueños y esperanzas.',
      message3: 'Contigo he encontrado la felicidad que siempre busqué.',
      closing: 'Siempre tuyo 💖',
    },
    {
      title: 'Amor eterno',
      message1: 'Cada latido de mi corazón lleva tu nombre escrito.',
      message2: 'Eres mi compañero, mi mejor amigo y el amor de mi vida.',
      message3: 'Juntos hemos creado algo hermoso que perdurará para siempre.',
      closing: 'Por siempre y para siempre 💗',
    },
    {
      title: 'Mi tesoro',
      message1: 'Eres la persona más especial que he conocido en toda mi vida.',
      message2: 'Tu amor me hace sentir completo y me da fuerzas para todo.',
      message3: 'Cada día contigo es una nueva aventura llena de amor y alegría.',
      closing: 'Con todo mi amor 💝',
    },
  ]

  // URLs de imágenes de San Valentín
  const valentineImages = [
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=300&fit=crop',
  ]

  useEffect(() => {
    // Inicializar posiciones aleatorias para las imágenes por toda la pantalla
    const initialPositions: ImagePosition[] = valentineImages.map((_, index) => ({
      id: index,
      x: Math.random() * (window.innerWidth - 200),
      y: Math.random() * (window.innerHeight - 200),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }))
    setImagePositions(initialPositions)
  }, [])

  useEffect(() => {
    if (imagePositions.length === 0) return

    const animate = () => {
      setImagePositions((prev) =>
        prev.map((pos) => {
          let newX = pos.x + pos.vx
          let newY = pos.y + pos.vy
          let newVx = pos.vx
          let newVy = pos.vy

          // Rebotar en los bordes de toda la pantalla
          if (newX <= 0 || newX >= window.innerWidth - 200) {
            newX = Math.max(0, Math.min(window.innerWidth - 200, newX))
            newVx = -newVx
          }
          if (newY <= 0 || newY >= window.innerHeight - 200) {
            newY = Math.max(0, Math.min(window.innerHeight - 200, newY))
            newVy = -newVy
          }

          return {
            ...pos,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          }
        })
      )
    }

    const interval = setInterval(animate, 50)
    return () => clearInterval(interval)
  }, [imagePositions.length])

  // Actualizar posiciones cuando cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setImagePositions((prev) =>
        prev.map((pos) => ({
          ...pos,
          x: Math.min(pos.x, window.innerWidth - 200),
          y: Math.min(pos.y, window.innerHeight - 200),
        }))
      )
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const cardVariants = {
    closed: {
      rotateY: 0,
      scale: 1,
    },
    open: {
      rotateY: 180,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  }

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
  }

  const handleCardClick = () => {
    if (!isOpen) {
      setIsOpen(true)
    } else {
      // Cambiar al siguiente mensaje
      setMessageIndex((prev) => (prev + 1) % valentineMessages.length)
    }
  }

  const currentMessage = valentineMessages[messageIndex]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative',
          backgroundImage: 'url(/images/fondo.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Imágenes flotantes por toda la pantalla */}
        {imagePositions.map((pos) => (
          <motion.div
            key={pos.id}
            animate={{
              x: pos.x,
              y: pos.y,
            }}
            transition={{
              type: 'tween',
              duration: 0.05,
              ease: 'linear',
            }}
            style={{
              position: 'fixed',
              width: '200px',
              height: '200px',
              zIndex: 1,
            }}
            whileHover={{
              scale: 1.3,
              zIndex: 100,
              transition: { duration: 0.3 },
            }}
          >
            <Box
              component="img"
              src={valentineImages[pos.id]}
              alt={`Valentine ${pos.id + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 4,
                boxShadow: '0 8px 24px rgba(255, 145, 199, 0.25)',
                border: '3px solid #fff',
                cursor: 'pointer',
              }}
            />
          </motion.div>
        ))}

        {/* Carta centrada */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 10,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 4,
          }}
        >
          <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
              color: '#ff91c7',
            fontWeight: 'bold',
            mb: 4,
            textAlign: 'center',
          }}
        >
          💌 Para TUUUUUUUUU 💌
        </Typography>

          <Box
            sx={{
              perspective: '1000px',
              cursor: 'pointer',
            }}
            onClick={handleCardClick}
          >
            <motion.div
              variants={cardVariants}
              animate={isOpen ? 'open' : 'closed'}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card
                className="main-card"
                sx={{
                  width: { xs: 300, sm: 400 },
                  height: { xs: 400, sm: 500 },
                  position: 'relative',
                  boxShadow: '0 10px 40px rgba(255, 145, 199, 0.25)',
                  borderRadius: 4,
                }}
              >
                {!isOpen ? (
                  <CardContent
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      //background: 'linear-gradient(135deg, #ffe6f2 0%, #ffd6eb 100%)',
                      color: '#ff91c7',
                      borderRadius: 4,
                    }}
                  >
                    <FavoriteIcon sx={{ fontSize: 80, mb: 2, animation: 'pulse 2s infinite' }} />
                    <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                      Haz clic para abrir
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                      💕
                    </Typography>
                  </CardContent>
                ) : (
                  <CardContent
                    className="card"
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      //background: 'linear-gradient(135deg, #ffffff 0%, #fffefd 100%)',
                      //backgroundColor: '#fa7b9b',
                      borderRadius: 4,
                      p: 4,
                      transform: 'rotateY(180deg)',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <motion.div
                      key={messageIndex}
                      variants={messageVariants}
                      initial="hidden"
                      animate="visible"
                      style={{
                        textAlign: 'center',
                        transform: 'rotateY(180deg)',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <FavoriteIcon sx={{ fontSize: 60, color: '#ff91c7', mb: 2 }} />
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#ff91c7',
                          fontWeight: 'bold',
                          mb: 2,
                        }}
                      >
                        {currentMessage.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#d4a5c4',
                          lineHeight: 1.8,
                          mb: 2,
                        }}
                      >
                        {currentMessage.message1}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#d4a5c4',
                          lineHeight: 1.8,
                          mb: 2,
                        }}
                      >
                        {currentMessage.message2}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#d4a5c4',
                          lineHeight: 1.8,
                          mb: 2,
                        }}
                      >
                        {currentMessage.message3}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#ff91c7',
                          mt: 3,
                          fontWeight: 'bold',
                        }}
                      >
                        {currentMessage.closing}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#ff91c7',
                          mt: 2,
                          fontStyle: 'italic',
                          opacity: 0.8,
                        }}
                      >
                        💌 Haz clic para ver más mensajes
                      </Typography>
                    </motion.div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </motion.div>
  )
}

export default CardPage

