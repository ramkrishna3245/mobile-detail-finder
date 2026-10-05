/* ============================================================
   MOBILE_SERIES — 4-digit series → { op: operator, circle }
   ⚠️  YE SAMPLE DATA HAI — production se pehle DoT/TEC ki
   public allocation list se verify/expand karo (README dekho).
   MNP ke baad operator badal sakta hai — ye ORIGINAL operator hai.
   ============================================================ */
const MOBILE_SERIES = {
  // ---- Delhi ----
  "9811": { op: "Airtel",   circle: "Delhi" },
  "9810": { op: "Airtel",   circle: "Delhi" },
  "9899": { op: "Airtel",   circle: "Delhi" },
  "9958": { op: "Airtel",   circle: "Delhi" },
  "9818": { op: "Vi (Idea)",circle: "Delhi" },
  "9910": { op: "Vi (Vodafone)", circle: "Delhi" },
  "9999": { op: "Vi (Vodafone)", circle: "Delhi" },
  "9873": { op: "Airtel",   circle: "Delhi" },
  // ---- Mumbai ----
  "9820": { op: "Vi (Vodafone)", circle: "Mumbai" },
  "9821": { op: "Vi (Vodafone)", circle: "Mumbai" },
  "9869": { op: "Airtel",   circle: "Mumbai" },
  "9890": { op: "Airtel",   circle: "Mumbai" },
  "9987": { op: "Vi (Vodafone)", circle: "Mumbai" },
  // ---- Kolkata ----
  "9830": { op: "Airtel",   circle: "Kolkata" },
  "9831": { op: "Vi (Vodafone)", circle: "Kolkata" },
  "9733": { op: "Airtel",   circle: "Kolkata" },
  // ---- Chennai / Tamil Nadu ----
  "9841": { op: "Airtel",   circle: "Chennai" },
  "9840": { op: "Aircel",   circle: "Chennai" },
  "9884": { op: "Airtel",   circle: "Chennai" },
  // ---- Karnataka ----
  "9900": { op: "Airtel",   circle: "Karnataka" },
  "9886": { op: "Airtel",   circle: "Karnataka" },
  // ---- Punjab ----
  "9814": { op: "Airtel",   circle: "Punjab" },
  "9872": { op: "Airtel",   circle: "Punjab" },
  // ---- UP East ----
  "9839": { op: "Airtel",   circle: "UP East" },
  "9935": { op: "Airtel",   circle: "UP East" },
  // ---- Bihar ----
  "9934": { op: "Airtel",   circle: "Bihar" },
  "9771": { op: "Airtel",   circle: "Bihar" },
  // ---- Maharashtra / Gujarat / Rajasthan (sample) ----
  "9822": { op: "Vi (Idea)",circle: "Maharashtra" },
  "9825": { op: "Vi (Idea)",circle: "Gujarat" },
  "9829": { op: "Airtel",   circle: "Rajasthan" },
  // ---- Jio (4G launch series, famous) ----
  "9004": { op: "Jio",      circle: "Pan-India*" },
  "7011": { op: "Jio",      circle: "Pan-India*" },
};
