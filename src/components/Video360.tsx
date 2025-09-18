'use client'

// Simple YouTube embed replacement to avoid storing video file in the repo
export default function Video360() {
  return (
    <section className="relative w-screen h-screen bg-black p-0 m-0">
      <div className="absolute inset-0">
        <iframe
          className="absolute inset-0 w-full h-full"
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
