const FormatDate = (isoDate: string): string => {
    if (!isoDate) return "Invalid date";
  
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(date);
  };
  
 export default FormatDate; 