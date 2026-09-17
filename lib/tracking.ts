declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (...args: unknown[]) => void };
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick(location: string) {
  if (typeof window === "undefined") return;

  try {
    window.fbq?.("track", "Contact", { content_name: location });
  } catch {}

  try {
    window.ttq?.track("Contact", { content_name: location });
  } catch {}

  try {
    window.gtag?.("event", "whatsapp_click", { location });
  } catch {}
}
