import { Repository } from "@/features/github";

export function formatTime(timeString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      month: '2-digit',
      year: 'numeric'
    };
    const date = new Date(timeString);
    return date.toLocaleDateString(undefined, options);
  }

export function sortReposDateDecsending(a: Repository, b: Repository) {
  const dateA = new Date(a.updated_at);
  const dateB = new Date(b.updated_at);
  
  if (dateA > dateB) {
    return -1;
  }
  
  if (dateA < dateB) {
    return 1;
  }
  
  return 0;
}