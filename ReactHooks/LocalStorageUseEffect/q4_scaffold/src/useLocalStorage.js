import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  // Get stored value from localStorage
  const getStoredValue = () => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  };

  // State to store the person object
  const [value, setValue] = useState(getStoredValue);

  // Update localStorage whenever the value changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
