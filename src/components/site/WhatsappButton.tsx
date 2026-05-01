export const WhatsappButton = () => {
  const url =
    "https://wa.me/40767929044?text=Buna%20ziua,%20doresc%20o%20oferta%20pentru%20constructie.";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrie-ne pe WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" aria-hidden />
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] shadow-elegant hover:scale-110 transition-bounce">
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden>
          <path d="M19.11 17.21c-.27-.13-1.59-.78-1.83-.87-.25-.09-.43-.13-.61.13-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01a1 1 0 00-.73.34c-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.59-.65 1.82-1.27.23-.62.23-1.16.16-1.27-.07-.11-.25-.18-.52-.31zM16.04 5.33c-5.91 0-10.71 4.8-10.71 10.71 0 1.89.5 3.74 1.44 5.36L5.33 26.67l5.43-1.42a10.66 10.66 0 005.28 1.4h.01c5.9 0 10.7-4.8 10.71-10.71a10.65 10.65 0 00-3.13-7.58 10.61 10.61 0 00-7.59-3.13zm0 19.27h-.01a8.88 8.88 0 01-4.52-1.24l-.32-.19-3.22.85.86-3.14-.21-.33a8.85 8.85 0 01-1.36-4.71c0-4.9 3.99-8.89 8.89-8.89 2.37 0 4.6.93 6.28 2.6a8.83 8.83 0 012.6 6.29c0 4.9-3.99 8.88-8.89 8.88z" />
        </svg>
      </span>
    </a>
  );
};
