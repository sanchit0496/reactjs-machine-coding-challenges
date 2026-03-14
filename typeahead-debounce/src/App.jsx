import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDebounce } from './hooks/useDebounce';
import "./App.css"

const App = () => {
  const indianCities = [
    "Ahmedabad", "Bangalore", "Chennai", "Delhi", "Hyderabad", "Kolkata", "Mumbai",
    "Pune", "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
    "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad",
    "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli",
    "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar",
    "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur",
    "Gwalior", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota", "Chandigarh",
    "Guwahati", "Solapur", "Hubli-Dharwad", "Mysore", "Tiruchirappalli", "Bareilly",
    "Aligarh", "Tiruppur", "Moradabad", "Gurgaon", "Jalandhar", "Bhubaneswar",
    "Salem", "Mira-Bhayandar", "Warangal", "Thiruvananthapuram", "Bhiwandi",
    "Saharanpur", "Guntur", "Amravati", "Bikaner", "Noida", "Jamshedpur", "Bhilai",
    "Cuttack", "Firozabad", "Kochi", "Nellore", "Bhavnagar", "Dehradun",
    "Durgapur", "Asansol", "Rourkela", "Nanded", "Kolhapur", "Ajmer"
  ];

  const [input, setInput] = useState('');
  const [listCity, setListCity] = useState(indianCities);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  const handleCityClick = (city) => { 
    setInput(city);
    setListCity([]);
    setCurrentCityIndex(-1);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    setCurrentCityIndex(-1); 
    handleListChange(inputValue);   
  };

  const handleListChange = (inputValue) => {
    let temp = indianCities.filter((item) => 
      item.toLowerCase().includes(inputValue.toLowerCase())
    );
    setListCity(temp);
  };

  const { debouncedList } = useDebounce(indianCities, input, 3000);

  useEffect(() => {
    const handleKeyPress = (e) => {
      console.log(e.key);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setCurrentCityIndex((prev) => {
          return (prev === debouncedList.length - 1) ? 0 : prev + 1;
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setCurrentCityIndex((prev) => {
          return (prev === 0) ? debouncedList.length - 1 : prev - 1;  // ✅ Fixed
        });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (currentCityIndex >= 0 && debouncedList[currentCityIndex]) {  // ✅ Added selection
          handleCityClick(debouncedList[currentCityIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [debouncedList]);  

  return (
    <div>
      App
      <div>
        <label>Type Here</label>
        <input 
          type='text' 
          value={input}
          onChange={handleInputChange}
        />
        {debouncedList && debouncedList.map((item, index) => {
          return (
            <div
              key={item}
              className={`list-item ${index === currentCityIndex ? 'active' : ''}`}
              onClick={() => handleCityClick(item)}
              onMouseEnter={() => setCurrentCityIndex(index)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
