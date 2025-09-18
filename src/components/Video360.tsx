'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

// A-Frame element types
interface AFrameElement {
  [key: string]: string | number | boolean | undefined
}

interface AFrameElements {
  'a-scene': AFrameElement
  'a-videosphere': AFrameElement
  'a-camera': AFrameElement
  'a-entity': AFrameElement
  'a-plane': AFrameElement
  'a-text': AFrameElement
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements extends AFrameElements {}
  }
}

export default function Video360() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string>('')
  const [useFallback, setUseFallback] = useState(false)

  const initializeAframeScene = useCallback(() => {
    if (!sceneRef.current) {
      console.log('Video360: sceneRef.current is null')
      return
    }
    
    console.log('Video360: Initializing A-Frame scene...')
    setDebugInfo('Initializing 360° video scene...')
    
    // Clear any existing scene
    sceneRef.current.innerHTML = ''
    
    // Wait for A-Frame to be fully ready
    setTimeout(() => {
      if (!sceneRef.current) {
        console.log('Video360: sceneRef.current is null after timeout')
        return
      }
      
      console.log('Video360: Creating A-Frame scene elements...')
      
      // Try using innerHTML approach first (more reliable with A-Frame)
      const sceneHTML = `
        <a-scene
          vr-mode-ui="enabled: false"
          embedded
          style="width: 100%; height: 100%; background: #000;"
          background="color: #000"
          renderer="antialias: true; colorManagement: true"
        >
          <a-videosphere 
            src="/video/video360.webm"
            rotation="0 0 0"
            scale="1 1 -1"
            play-on-click="true"
            loop="true"
            autoplay="false"
            material="transparent: false"
          />
          
          <a-camera 
            position="0 0 0"
            look-controls="enabled: true; pointerLockEnabled: false"
            cursor="rayOrigin: mouse"
            raycaster="objects: .clickable"
          />
          
          <a-entity position="0 0 -1.5">
            <a-plane 
              class="clickable"
              position="0 0.3 0"
              width="0.3"
              height="0.1"
              color="#4CAF50"
              opacity="0.8"
              material="transparent: true"
            />
            <a-text 
              value="▶ PLAY"
              position="0 0.3 0.01"
              align="center"
              color="white"
              width="6"
            />
            <a-text 
              value="Click and drag to look around"
              position="0 -0.2 0.01"
              align="center"
              color="white"
              width="4"
            />
            <a-text 
              value="Click the play button to start"
              position="0 -0.3 0.01"
              align="center"
              color="white"
              width="4"
            />
          </a-entity>
        </a-scene>
      `
      
      console.log('Video360: Setting innerHTML for A-Frame scene...')
      sceneRef.current.innerHTML = sceneHTML
      
      // Get the scene element after it's created
      const scene = sceneRef.current.querySelector('a-scene')
      if (!scene) {
        console.log('Video360: Failed to find a-scene element')
        setError('Failed to create A-Frame scene')
        setDebugInfo('Scene element not found')
        return
      }
      
      console.log('Video360: A-Frame scene created via innerHTML')
      setDebugInfo('A-Frame scene created - waiting for video to load...')
      
      // Set up event listeners
      scene.addEventListener('loaded', () => {
        console.log('Video360: A-Frame scene loaded successfully')
        setDebugInfo('360° Video loaded successfully')
        setIsLoading(false)
      })
      
      scene.addEventListener('error', (e) => {
        console.log('Video360: A-Frame scene error:', e)
        setError('Failed to load 360° video scene')
        setDebugInfo('Scene loading failed')
      })
      
      // Get videosphere element
      const videosphere = scene.querySelector('a-videosphere')
      if (videosphere) {
        // Add video-specific event listeners
        videosphere.addEventListener('loadeddata', () => {
          console.log('Video360: Video data loaded')
          setDebugInfo('360° Video ready to play')
        })
        
        videosphere.addEventListener('error', (e) => {
          console.log('Video360: Video loading error:', e)
          setError('Failed to load 360° video file')
          setDebugInfo('Video file loading failed')
        })
        
        // Add click event to play video
        videosphere.addEventListener('click', () => {
          console.log('Video360: Video clicked, attempting to play')
          const video = videosphere.components?.material?.data?.src
          if (video && video.play) {
            video.play()
          }
        })
      }
      
      // Set a timeout for video loading
      setTimeout(() => {
        console.log('Video360: Video loading timeout check')
        setDebugInfo('Video loading timeout - check your connection')
      }, 15000)
      
      // Force scene to render
      setTimeout(() => {
        if (scene.components && scene.components.renderer) {
          console.log('Video360: Forcing scene render')
          scene.components.renderer.render()
        }
      }, 2000)
      
    }, 2000) // Wait 2 seconds for A-Frame to be fully ready
  }, [])

  useEffect(() => {
    const loadAframe = async () => {
      try {
        console.log('Video360: Starting A-Frame loading...')
        setDebugInfo('Starting A-Frame loading...')
        
        // First, check if video file is accessible
        try {
          console.log('Video360: Checking video file accessibility...')
          const videoResponse = await fetch('/video/video360.webm', { method: 'HEAD' })
          console.log('Video360: Video response status:', videoResponse.status)
          if (!videoResponse.ok) {
            console.log('Video360: Video file not accessible, using fallback')
            setDebugInfo('Video file not accessible - using fallback')
            setUseFallback(true)
            setIsLoading(false)
            return
          }
          console.log('Video360: Video file accessible, loading A-Frame...')
          setDebugInfo('Video file accessible, loading A-Frame...')
        } catch (error) {
          console.log('Video360: Video file check failed:', error)
          setDebugInfo('Video file check failed - using fallback')
          setUseFallback(true)
          setIsLoading(false)
          return
        }
        
        // Check if A-Frame is already loaded
        if (typeof window !== 'undefined' && (window as unknown as { AFRAME?: unknown }).AFRAME) {
          console.log('Video360: A-Frame already loaded')
          setDebugInfo('A-Frame already loaded - initializing scene')
          // Wait a bit more for A-Frame to be fully ready
          setTimeout(() => {
            initializeAframeScene()
          }, 1000)
          return
        }

        // Load A-Frame script if not already loaded
        if (typeof window !== 'undefined' && !document.querySelector('script[src*="aframe"]')) {
          console.log('Video360: Loading A-Frame script...')
          setDebugInfo('Loading A-Frame script...')
          const script = document.createElement('script')
          script.src = 'https://aframe.io/releases/1.4.0/aframe.min.js'
          script.async = true
          
          script.onload = () => {
            console.log('Video360: A-Frame script loaded, initializing...')
            setDebugInfo('A-Frame script loaded, initializing...')
            // Wait for A-Frame to fully initialize
            setTimeout(() => {
              if ((window as unknown as { AFRAME?: unknown }).AFRAME) {
                console.log('Video360: A-Frame initialized successfully')
                setDebugInfo('A-Frame initialized successfully - initializing scene')
                initializeAframeScene()
              } else {
                console.log('Video360: A-Frame loaded but not initialized')
                setError('A-Frame loaded but not initialized')
                setDebugInfo('A-Frame failed to initialize')
              }
            }, 500)
          }
          
          script.onerror = () => {
            console.log('Video360: Failed to load A-Frame library')
            setError('Failed to load A-Frame library')
            setDebugInfo('Script loading failed')
            setIsLoading(false)
          }
          
          document.head.appendChild(script)
        } else {
          console.log('Video360: A-Frame script already exists, checking initialization...')
          setDebugInfo('A-Frame script already exists, checking initialization...')
          // A-Frame script exists but might not be loaded yet
          const checkAframe = setInterval(() => {
            if ((window as unknown as { AFRAME?: unknown }).AFRAME) {
              console.log('Video360: A-Frame found and ready')
              clearInterval(checkAframe)
              setDebugInfo('A-Frame found and ready - initializing scene')
              initializeAframeScene()
            }
          }, 100)
          
          // Clear interval after 10 seconds
          setTimeout(() => {
            clearInterval(checkAframe)
            if (!(window as unknown as { AFRAME?: unknown }).AFRAME) {
              console.log('Video360: A-Frame timeout - using fallback')
              setDebugInfo('A-Frame timeout - using fallback video player')
              setUseFallback(true)
              setIsLoading(false)
            }
          }, 10000)
        }
      } catch (err) {
        setDebugInfo(`A-Frame error - using fallback: ${err}`)
        setUseFallback(true)
        setIsLoading(false)
      }
    }

    loadAframe()
  }, [initializeAframeScene])

  if (error) {
    return (
      <div className="loading-screen absolute inset-0 bg-black/90 flex justify-center items-center z-50">
        <div className="loading-content text-center text-white max-w-md">
          <h2 className="text-2xl font-light mb-5 text-red-400">360° Video Error</h2>
          <p className="text-white mt-2 mb-4">{error}</p>
          {debugInfo && (
            <div className="text-sm text-gray-300 bg-gray-800 p-3 rounded">
              <strong>Debug:</strong> {debugInfo}
            </div>
          )}
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-accent text-black rounded hover:bg-accent-secondary transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="loading-screen absolute inset-0 bg-black/90 flex justify-center items-center z-50">
        <div className="loading-content text-center text-white max-w-md">
          <h2 className="text-2xl font-light mb-5">Loading 360° Video...</h2>
          <div className="spinner w-12 h-12 border-3 border-white/30 border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
          {debugInfo && (
            <div className="text-sm text-gray-300 bg-gray-800 p-3 rounded">
              <strong>Status:</strong> {debugInfo}
            </div>
          )}
        </div>
      </div>
    )
  }

  // Fallback video component
  const FallbackVideo = () => (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <div className="text-center text-white max-w-md">
        <h2 className="text-2xl font-light mb-5">360° Video Experience</h2>
        <div className="relative">
          <video
            className="w-full max-w-lg rounded-lg shadow-2xl"
            controls
            poster="/assets/classical-music.jpg"
            preload="metadata"
          >
            <source src="/video/video360.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
            <div className="text-center">
              <i className="fas fa-play-circle text-6xl text-accent mb-4"></i>
              <p className="text-lg">Click to play 360° video</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-300">
          For the best 360° experience, use a modern browser with WebGL support.
        </p>
        <button
          onClick={() => setUseFallback(false)}
          className="mt-4 px-4 py-2 bg-accent text-black rounded hover:bg-accent-secondary transition-colors"
        >
          <i className="fas fa-cube mr-2"></i>
          Try 360° Experience
        </button>
      </div>
    </div>
  )

  return (
    <section className="video-360-section min-h-screen relative flex items-center justify-center overflow-hidden bg-black">
      <div className="video-360-container absolute inset-0 overflow-hidden cursor-crosshair select-none">
        {useFallback ? (
          <FallbackVideo />
        ) : (
          <div 
            ref={sceneRef}
            id="scene" 
            className="w-full h-full"
          >
            {/* A-Frame Scene will be dynamically created here */}
          </div>
        )}
      </div>
      
      {/* Debug Info Overlay */}
      {debugInfo && (
        <div className="absolute top-4 left-4 bg-black/70 text-white p-3 rounded text-sm z-20 max-w-xs">
          <strong>Debug:</strong> {debugInfo}
        </div>
      )}
      
      {/* Status Indicator */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded text-sm z-20">
        <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
          isLoading ? 'bg-yellow-500 animate-pulse' : 
          error ? 'bg-red-500' : 
          useFallback ? 'bg-blue-500' : 
          'bg-green-500'
        }`}></span>
        {isLoading ? 'Loading...' : 
          error ? 'Error' : 
          useFallback ? 'Fallback Mode' : 
          'A-Frame Mode'}
      </div>
      
      {/* Fallback Toggle Button */}
      {!useFallback && !isLoading && !error && (
        <button
          onClick={() => setUseFallback(true)}
          className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded text-sm z-20 hover:bg-black/90 transition-colors"
          title="Switch to fallback video player"
        >
          <i className="fas fa-video mr-2"></i>
          Fallback Player
        </button>
      )}
      
      {/* Force Fallback Button for Testing */}
      <button
        onClick={() => {
          console.log('Video360: Force switching to fallback for testing')
          setUseFallback(true)
          setIsLoading(false)
          setError(null)
        }}
        className="absolute top-16 right-4 bg-red-600 text-white px-3 py-2 rounded text-sm z-20 hover:bg-red-700 transition-colors"
        title="Force fallback mode for testing"
      >
        <i className="fas fa-bug mr-2"></i>
        Test Fallback
      </button>
      
      {/* Scroll Hint */}
      <div className="video-scroll-hint absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-4 rounded-full backdrop-blur-lg border border-white/20 flex items-center gap-3 text-sm animate-bounce z-10">
        <i className="fas fa-arrow-down text-accent text-lg"></i>
        <span>Scroll to continue</span>
      </div>
    </section>
  )
}
