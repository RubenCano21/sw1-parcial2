
const Prompt = () => {
  return (
    <div className='flex flex-col border-2 border-gray-300 rounded-lg p-4 max-w-lg mt-10'>
      <h1 className='text-3xl font-bold'>¿Que quieres crear?</h1>
      <p className='mt-4 text-lg'>Escribe aquí tu idea y la hare realidad en minutos. Mientras mas detallada sea tu idea. mejor podre entenderla y crearla para ti.</p>
      <div className='mt-8'>
        <textarea className='textarea textarea-bordered w-full max-w-lg h-48' 
        placeholder='Escribe tu prompt aqui...'>
        </textarea>
      </div>
      <div className='mt-4'>
        <button className='btn btn-primary'>Enviar</button>
      </div>
    </div>
  )
}

export default Prompt;