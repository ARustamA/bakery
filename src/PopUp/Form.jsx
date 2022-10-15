import React from 'react'
import style from './PopUpSend.module.scss';
import { useForm } from 'react-hook-form';


export const Form = () => {
   const {
      register,
      formState: {
         errors,
      },
      handleSubmit,
   } = useForm();

   const onSubmit = (data) => { console.log(JSON.stringify(data)) }
   return (
      <div className={style.send}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <spa>Name:</spa>
            <input {...register('name', { required: true })} />


            <input type='submit' className={style.input} />
         </form>

      </div>
   )
}
