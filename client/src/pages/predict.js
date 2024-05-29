import React, { useState,useEffect,useLayoutEffect } from 'react'
import axios from '../api/axios'
import useAuth from "../hooks/useAuth";
import Navbar from '../components/Navbar';
import robo from '../hooks/robo.gif'


export const Predict = () => {
    const [pred, setPred]=useState('')
    const [year, setYear]=useState('')
    const [kilometers, setKilometers]=useState('')
    const [mileage, setMileage]=useState('')
    const [engine, setEngine]=useState('')
    const [power, setPower]=useState('')
    const [seats, setSeats]=useState('');
    const [manufacturer, setManufacturer]=useState('Audi')
    const [fuel, setFuel]=useState('Petrol')
    const [transmission, setTransmission]=useState('Manual')
    const [owner, setOwner]=useState('First')
    const { auth } = useAuth();
    const accessToken = auth?.accessToken;

    const Submit=(e)=>{
      e.preventDefault()
      console.log("abc")
      axios.post("/predict",{year,kilometers,mileage,engine,power,seats,manufacturer,fuel,transmission,owner},
      {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }, withCredentials: true
      })
      .then(result=>{
        console.log(result)
        setPred(result.data.data)
      })

    }



  return (
    <div>
      <Navbar/>
        <form className="grid lg:grid-cols-2 md:mt-[40px] mt-[50px] bg-gradient-to-r from-neutral-300 to-slate-50 text-xl">
          <div className="py-[17px] mt-[55px] mb-[10px] mx-auto px-8  rounded-3xl bg-white shadow-xl">
            <div class="py-[10px] md:ml-[175px]">
              <label className="" >Year : </label>
                <input className="border-2 px-2" type="text" onChange={(e) => {let x=e.target.value.slice(3); setYear(x) }} placeholder="Year" name="Year" id="" required />
            </div>
            <div className="py-[10px] ">
              <label className="" >Distance Travelled (Km) : </label>
                <input className="border-2 px-2" type="text" onChange={(e) => { setKilometers(e.target.value) }} placeholder="Distance Travelled" name="Kilometers" id="" required />
            </div>
            <div className="py-[10px] md:ml-[78px]">
              <label className="" >Mileage (Km/L) : </label>
                <input className="border-2 px-2" type="text" onChange={(e) => { setMileage(e.target.value) }} placeholder="Mileage" name="Mileage" id="" required />
            </div>
            <div className="py-[10px] md:ml-[105px]">
              <label className="" >No. of Seats : </label>
                <input className="border-2 px-2" type="text" onChange={(e) => { setSeats(e.target.value) }} placeholder="Seats" name="Seats" id="" required />
            </div>
            <div className="py-[10px] md:ml-[25px]">
              <label className="" >Engine Capacity (Cc) : </label>
                <input className="border-2 px-2" type="text" onChange={(e) => { setSeats(e.target.value) }} placeholder="Seats" name="Seats" id="" required />
            </div>
            <div className="py-[10px] md:ml-[100px]">
              <label className="" >Power (Bhp) : </label>
                <input className="border-2 px-2" type="text" onChange={(e) => { setSeats(e.target.value) }} placeholder="Seats" name="Seats" id="" required />
            </div>
            <div className="flex flex-wrap py-[15px] md:ml-[95px]">
              <label className="" for="type">Manufacturer : </label>
              <div className="">
                  <select onChange={(e)=>setManufacturer(e.target.value)} className="cursor-pointer mx-1 px-5  bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      {/* <option selected>{option}</option> */}
                      <option value="Audi" >Audi</option>
                      <option value="BMW" >BMW</option>
                      <option value="Chevrolet" >Chevrolet</option>
                      <option value="Datsun" >Datsun</option>
                      <option value="Fiat" >Fiat</option>
                      <option value="Force" >Force</option>
                      <option value="Ford" >Ford</option>
                      <option value="Honda" >Honda</option>
                      <option value="Hyundai" >Hyundai</option>
                      <option value="ISUZU" >ISUZU</option>
                      <option value="Isuzu" >Isuzu</option>
                      <option value="Jaguar" >Jaguar</option>
                      <option value="Jeep" >Jeep</option>
                      <option value="Lamborghini" >Lamborghini</option>
                      <option value="Land" >Land Rover</option>
                      <option value="Mahindra" >Mahindra</option>
                      <option value="Maruti" >Maruti</option>
                      <option value="Mercedes-Benz" >Mercedes-Benz</option>
                      <option value="Mini" >Mini</option>
                      <option value="Mitsubishi" >Mitsubishi</option>
                      <option value="Nissan" >Nissan</option>
                      <option value="Porsche" >Porsche</option>
                      <option value="Renault" >Renault</option>
                      <option value="Skoda" >Skoda</option>
                      <option value="Tata" >Tata</option>
                      <option value="Toyota" >Toyota</option>
                      <option value="Volkswagen" >Volkswagen</option>
                      <option value="Volvo" >Maruti</option>
                  </select>
              </div>
            </div>
            <div className="flex flex-wrap py-[15px] md:ml-[60px]">
              <label className="" for="type">Fuel Type : </label>
              <div className="">
                  <select onChange={(e)=>setFuel(e.target.value)} className="cursor-pointer mx-1 px-5  bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      {/* <option selected>{option}</option> */}
                      <option value="Petrol" >Petrol</option>
                      <option value="CNG" >CNG</option>
                      <option value="Diesel" >Diesel</option>
                      <option value="LPG" >LPG</option>
                      <option value="Electric" >Electric</option>
                  </select>
              </div>
            </div>
            <div className="flex flex-wrap py-[15px] md:ml-[20px]">
              <label className="" for="type">&nbsp; Transmission Type: </label>
              <div className="">
                  <select onChange={(e)=>setTransmission(e.target.value)} className="cursor-pointer mx-1 px-5  bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      {/* <option selected>{option}</option> */}
                      <option value="Manual" >Manual</option>
                      <option value="Automatic" >Automatic</option>
                  </select>
              </div>
            </div>
            <div className="flex flex-wrap py-[15px] md:ml-[30px]">
              <label className="" for="type">&nbsp; Owner Type: </label>
              <div className="">
                  <select onChange={(e)=>setOwner(e.target.value)} className="cursor-pointer mx-1 px-5  bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      {/* <option selected>{option}</option> */}
                      <option value="First" >First</option>
                      <option value="Second" >Second</option>
                      <option value="Third" >Third</option>
                      <option value="Fourth & Above" >Fourth & above</option>
                  </select>
              </div>
            </div>
            <div className='flex justify-center'><button className='bg-black text-white py-2 px-3 rounded-xl mt-[10px] hover:bg-gray-700' onClick={Submit}>SUBMIT</button></div>
            <div className='mt-[20px] flex justify-center'>Predicted Result: {pred}</div>
          </div>
          <div>
          <img className='h-[500px]' src={robo} alt=""></img>
          </div>
        </form>
        
    </div>
  )
}

