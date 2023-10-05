export interface ItypeService {
    id: string;
    typeService: string;
    valueService: number;
    amount: number;
    dataTracker: string;
    valueTotalByService?: number;
    userName?: boolean;
}

export interface inputService {
    typeService: string;
    valueService: number | string;
    amount: number | string;
}

export interface Imessage {
  message: string;
}
