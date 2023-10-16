export interface HospitalCardProps {
    hid:string;
    name: string;
    imageSrc: string;
    onRatingChange: (newRating: number | null) => void;
  }