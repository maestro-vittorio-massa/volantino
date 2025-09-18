'use client'

// Simple YouTube embed replacement to avoid storing video file in the repo
export default function Video360() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-black py-6 md:py-10">
      <div className="relative w-full max-w-6xl h-[70vh] md:h-auto md:pt-[56.25%]">
        <iframe
          className="absolute inset-0 w-full h-full rounded-xl shadow-2xl"
          src="https://www.youtube.com/embed/oPd0rLVxTU8?rel=0&modestbranding=1&playsinline=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  )
}
