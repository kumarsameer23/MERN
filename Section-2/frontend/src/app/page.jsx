import Mybutton from '@/components/button';
import Card from '@/components/Card';
import React from 'react'

const Home = () => {

const [num1, num2] = [34,76];

const greet = (name) => {
return `Good Morning ${name}`;
}

  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Welcome to Home Page</h1>
      <p style={{ color : 'red', textAlign : 'center', fontSize: 40 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, blanditiis.</p>
      <img className='h-48 block m-auto' src="next.svg" alt="" />

      <h1 className='text-5xl font-bold text-center'>{num1+num2}</h1>
      {greet('Lestrade')}

      <Mybutton>Home</Mybutton>
      <Mybutton>About</Mybutton>
      <Mybutton>Contact</Mybutton>

<div className='w-1/2 flex item-center p-10 gap-10'>
      <Card 
      title={'My Title'}
      description={'Card Description'}
      btnText={'Submit'}
      ></Card>
      <Card title={'Title 2'}
      description={'Card Description 2'}
      btnText={'Okay'}>
      </Card> 
      <Card 
      title={'HOLA AMIGO'}
      description={'Kaise ho thik ho'}
      btnText={'Haa'}></Card>
      
</div>

    </div>
  )
};
// Types of Cases
// camelCase
// snake_case
// kebab-case
// PascalCase

export default Home;