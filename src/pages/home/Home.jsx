import HomeStyle from './Home.style'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Home = () => {
  const [query, setQuery] = useState('egg')
  const [selectedMeal, setSelectedMeal] = useState('breakfast')

  const APP_ID ="f6edb9f6";
  const APP_KEY ="4ab957a75da653a00a88eb87864b8139";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`
  const getData = async() => {
    const { data } = await axios.get(url)
    console.log(data.hits)
  };

  useEffect(() => {
  getData();
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Home;
