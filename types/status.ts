export const PetStatus = {
    Available: 'available',
    Pending: 'pending',
    Sold: 'sold'
  } as const;
  
export type Status = typeof PetStatus[keyof typeof PetStatus];