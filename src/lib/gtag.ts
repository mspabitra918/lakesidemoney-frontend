export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

type EventParams = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export const pageview = (url: string) => {
  if (!GA_ID) return;
  if (typeof window === "undefined") return;
  // @ts-ignore
  if (typeof window.gtag === "function") {
    // @ts-ignore
    window.gtag("config", GA_ID, { page_path: url });
  }
};

export const event = ({ action, category, label, value }: EventParams) => {
  if (!GA_ID) return;
  if (typeof window === "undefined") return;
  // @ts-ignore
  if (typeof window.gtag === "function") {
    // @ts-ignore
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

export default { GA_ID, pageview, event };
