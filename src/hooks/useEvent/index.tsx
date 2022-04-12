import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { EventDTO } from "../../dto/EventDTO";

interface EventProviderProps {
  children: ReactNode;
}

interface IEventContext {
  events: EventDTO[];
  addEvent: (event: EventDTO) => void;
  deleteEvent: (uuid: string) => void;
}

const AuthContext = createContext({} as IEventContext);

const EventProvider = ({ children }: EventProviderProps) => {
  const [events, setEvents] = useState<EventDTO[]>([]);

  useEffect(() => {
    const getData = async () => {
      const eventsListStoraged = await AsyncStorage.getItem("@countdown");

      if (eventsListStoraged) {
        const eventsList = JSON.parse(eventsListStoraged);
        setEvents(eventsList);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    updateAsyncStorage(events);
  }, [events]);

  const addEvent = (newEvent: EventDTO) => {
    setEvents((oldEventsArray) => [...oldEventsArray, newEvent]);
  };

  const deleteEvent = (uuid: string) => {
    const newEventsArray = events.filter((event) => {
      return event.id !== uuid;
    });
    setEvents(newEventsArray);
  };

  const updateAsyncStorage = async (newEventsArray: EventDTO[]) => {
    await AsyncStorage.setItem("@countdown", JSON.stringify(newEventsArray));
  };

  return (
    <AuthContext.Provider value={{ events, addEvent, deleteEvent }}>
      {children}
    </AuthContext.Provider>
  );
};

function useEvent() {
  const context = useContext(AuthContext);
  return context;
}

export { EventProvider, useEvent };
