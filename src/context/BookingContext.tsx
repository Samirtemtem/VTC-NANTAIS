import React, { createContext, useState, ReactNode } from "react";

interface BookingData {
  date?: string;
  [key: string]: any;
}

interface BookingContextType {
  bookingData: BookingData;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
}

export const BookingContext = createContext<BookingContextType>({
  bookingData: {},
  setBookingData: () => {},
});

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider = ({ children }: BookingProviderProps) => {
  const [bookingData, setBookingData] = useState<BookingData>({});

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};

export const Booking = BookingContext;
